# 🏗️ Frontend Architecture & Setup

Este documento descreve a arquitetura, decisões técnicas e padrões de desenvolvimento para a Landing Page.

O objetivo desta arquitetura é manter **baixa complexidade** cognitiva, alta velocidade de desenvolvimento (DX) e **separação clara de responsabilidades** usando o padrão MVVM (Model-View-ViewModel).

## ⚡ Tech Stack

  * **Core:** [Next.js 15](https://nextjs.org/) (App Router)
  * **Build Mode:** Static Export (`output: 'export'`)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Language:** TypeScript
  * **Validation:** [Zod](https://zod.dev/)
  * **Forms:** [React Hook Form](https://react-hook-form.com/)
  * **Icons:** [Lucide React](https://lucide.dev/)
  * **Utilities:** `clsx` + `tailwind-merge` (para gestão de classes CSS)

-----

## 📂 Estrutura de Pastas

Adotamos uma arquitetura baseada em **Features** (funcionalidades) com **MVVM**.

```text
src/
├── app/                    # Next.js App Router (apenas roteamento e layout)
│   ├── layout.tsx          # Fontes, Metadados Globais e Providers
│   ├── page.tsx            # Composição da Home (chama as Features)
│   └── ui-kit/             # "Kitchen Sink" (Showcase de componentes base)
│
├── components/             # UI Kit "Burro" (Dumb Components)
│   └── ui/                 # Componentes atômicos (Button, Input, Card)
│       ├── button.tsx
│       └── ...
│
├── features/               # 📍 Onde o código de negócio reside
│   ├── homepage/            # Exemplo de Feature
│   │   ├── components/     # Views (Componentes Visuais da feature)
│   │   ├── viewModels/     # ViewModels (Lógica de estado e regras)
│   │   ├── models/         # Models (Schemas Zod e Tipos)
│   │   └── services/       # Integrações (Fetch, API calls)
│   │
│   └── contact/           # Outra feature...
│
├── lib/                    # Utilitários globais (cn, formatters)
└── styles/                 # CSS Globais
```

-----

## 🏛️ Padrão Arquitetural: MVVM no React

Para evitar componentes gigantes ("God Components") e mistura de lógica com UI, seguimos estritamente o MVVM.

### 1\. Model (`features/*/models`)

Define a estrutura dos dados e validação. **Não contém lógica de UI.**

  * Utilizamos `Zod` para schemas.
  * Utilizamos TypeScript interfaces derivadas do Zod.

<!-- end list -->

```typescript
// features/contact/models/contact.schema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### 2\. ViewModel (`features/*/viewModels`)

É o cérebro. Um **Custom Hook** que gerencia o estado, validação e comunicação com serviços.

  * Deve retornar apenas dados e funções para a View.
  * **Não deve retornar JSX.**

<!-- end list -->

```typescript
// features/contact/viewModels/useContactViewModel.ts
export function useContactViewModel() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
     // Lógica de envio, loading state, tratamento de erro
  };

  return { form, onSubmit };
}
```

### 3\. View (`features/*/components`)

É a interface visual. Apenas exibe dados e captura eventos.

  * Conecta-se à `ViewModel`.
  * Usa componentes de `src/components/ui`.
  * **Zero lógica de negócio complexa.**

<!-- end list -->

```tsx
// features/contact/components/ContactForm.tsx
import { useContactViewModel } from '../viewModels/useContactViewModel';

export function ContactForm() {
  const { form, onSubmit } = useContactViewModel(); // Binding

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input {...form.register('email')} />
    </form>
  );
}
```

-----

## 🎨 Design System & UI Kit

Para evitar a complexidade do Storybook, mantemos uma página interna de desenvolvimento.

  * **Localização:** `/src/app/ui-kit/page.tsx`
  * **Acesso:** `http://localhost:3000/ui-kit` (Não é gerada no build de produção se configurado corretamente, ou pode ser mantida como oculta).
  * **Objetivo:** Visualizar todos os componentes base (Botões, Inputs, Tipografia) em um só lugar para garantir consistência visual.

-----

## 🚀 Build & Deployment

Este projeto é configurado como **Static Export**. Não há servidor Node.js em execução (SSR/ISR desativados).

### Configuração (`next.config.mjs`)

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Necessário para exportação estática
};
```

### Comandos

  * `npm run dev`: Roda servidor local.
  * `npm run build`: Gera a pasta `out/` com HTML/CSS/JS estáticos.
  * `npm run start`: (Não utilizado em produção estática).

### Deploy

A pasta `out/` pode ser hospedada em qualquer CDN ou Storage (AWS S3, Google Cloud Storage, Vercel, Netlify, Firebase Hosting).

-----

## 🧪 Estratégia de Testes

Focamos em ROI (Retorno sobre Investimento).

  * **Unitários:** Não obrigatórios para UI Components.
  * **E2E (Smoke Test):** Recomendado uso de **Playwright** para testar fluxos críticos (ex: submissão do formulário de contato com sucesso) antes do deploy.

-----

## 🤝 Guia de Contribuição (Convenções)

1.  **Novas Funcionalidades:** Sempre crie uma nova pasta em `src/features/`.
2.  **Estilos:** Use classes utilitárias do Tailwind. Evite `style={{}}` inline.
3.  **Componentes Base:** Se um componente for reutilizável por mais de uma feature (ex: um Botão), ele deve ir para `src/components/ui`. Se for específico, fica na pasta da feature.
4.  **Imports:** Use path aliases (`@/components`, `@/features`) configurados no `tsconfig`.
