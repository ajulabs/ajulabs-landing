import { useI18n } from '@/lib/i18n/context';
import { useBreakpoint } from '../components/cases/hooks/useBreakpoint';
import { CASES_DATA } from '../models/cases.types';

export function useCasesViewModel() {
  const { t } = useI18n();
  const breakpointState = useBreakpoint();

  return {
    cases: CASES_DATA,
    translations: t.cases,
    ...breakpointState,
  };
}