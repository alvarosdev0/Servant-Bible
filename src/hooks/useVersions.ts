import { fetchVersions } from "@/services/versions";
import { VersionType } from "@/types/version";
import { useQuery } from "@tanstack/react-query";

export const useVersions = () => {
  const { isLoading, isError, data, refetch } = useQuery<{
    versions: VersionType[];
  }>({
    queryKey: ["versions"],
    queryFn: () => fetchVersions(),
  });

  return {
    refetch,
    isLoading,
    isError,
    versions: data?.versions ?? [],
  };
};
