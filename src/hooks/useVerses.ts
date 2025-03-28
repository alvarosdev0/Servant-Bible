import { fetchVerses } from "@/services/verses";
import { VersType } from "@/types/vers";
import { useQuery } from "@tanstack/react-query";

export const useVerses = (abrev: string, chapter: number) => {
  const { isLoading, isError, data, refetch } = useQuery<{
    verses: VersType;
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
