import useSWRMutation from "swr/mutation";
import { useDependencies } from "~core/di";

import { Lead } from "../../models/lead";

export function useCreateLead() {
  const { createLeadUseCase } = useDependencies();

  // The fetcher is called when the mutation is triggered.
  const fetcher = async (_: string, { arg }: { arg: Lead }) => {
    return await createLeadUseCase.execute(arg);
  };

  // "createLead" is the SWR key; it can be any unique string.
  const { trigger, data, error, isMutating } = useSWRMutation("leads", fetcher);

  return {
    createLead: trigger,
    lead: data as Lead | undefined,
    isCreating: isMutating,
    error,
  };
}
