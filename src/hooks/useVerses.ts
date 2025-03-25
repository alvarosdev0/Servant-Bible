import { fetchVerses } from "@/services/verses";
import { VersesType } from "@/types/verses";
import { useQuery } from "@tanstack/react-query";

export const useVerses = (abrev: string, chapter: number) => {
  const { isLoading, isError, data, refetch } = useQuery<{
    verses: VersesType;
  }>({
    queryKey: ["verses"],
    queryFn: () => fetchVerses(abrev, chapter),
  });

  return {
    refetch,
    isLoading,
    isError,
    verses: data?.verses.vers ?? [],
  };
};
