"use client";

import { fetchSearch } from "@/services/search";
import { SearchType } from "@/types/search";
import { useInfiniteQuery } from "@tanstack/react-query";

interface useSearchProps {
  q: string | "";
  testament?: string;
  take: number;
  page: number;
}

export const useSearch = (props: useSearchProps) => {
  const { q, take } = props;
  const {
    isLoading,
    isError,
    error,
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{ data: SearchType }>({
    queryKey: ["search"],
    queryFn: ({ pageParam }) => fetchSearch({ q, take, pageParam }),
    initialPageParam: 1,
    retry: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => lastPage.data.searchMeta.nextCursor,
  });
  return {
    isLoading,
    isError,
    error,
    search: data?.pages ?? [],
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
