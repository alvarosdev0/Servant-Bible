import { fetchBooks } from "@/services/books";
import { BookType } from "@/types/book";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const { isLoading, isError, data, refetch } = useQuery<{ books: BookType[] }>(
    {
      queryKey: ["books"],
      queryFn: () => fetchBooks(),
    }
  );

  return {
    refetch,
    isLoading,
    isError,
    books: data?.books ?? [],
  };
};
