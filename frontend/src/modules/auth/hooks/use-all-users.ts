import useSWR from "swr";
import { User } from "~modules/users/models";
import { useDependencies } from "~core/di";

export function useAllUsers() {
  const { getAllUsersUseCase } = useDependencies();

  // SWR key can be any unique string.
  const { data, error } = useSWR("allUsers", () =>
    getAllUsersUseCase.execute(),
  );

  return {
    users: data as User[] | undefined,
    isLoading: !error && !data,
    error,
  };
}
