"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSearch } from "@/hooks/useSearch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SearchHero = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toString();
  const book = searchParams.get("book")?.toString();
  const version = searchParams.get("version")?.toString();

  const {
    isLoading,
    isError,
    search,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearch({
    q: query ?? "",
    take: 5,
    page: 1,
  });

  useEffect(() => {
    refetch();
  }, [query]);

  const searchFlatMap = search.flatMap((page) => page.data.searchData) ?? [];
  const searchMetaFlatMap =
    search.flatMap((page) => page.data.searchMeta) ?? [];

  console.log(searchFlatMap, searchMetaFlatMap);

  return (
    <div className="py-4 px-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-4">
          {isLoading === false && isError === false && (
            <div className="flex flex-col gap-4 items-center">
              {searchFlatMap.map((verse, index) => (
                <Card
                  className="flex flex-col gap-2 p-4 w-[50vw]"
                  key={`${verse.book}${verse.chapter}${index}`}
                >
                  <div className="flex justify-between">
                    <strong className="text-2xl font-bold">{verse.book}</strong>
                    <strong className="text-1xl font-medium">
                      Capítulo {verse.chapter}
                    </strong>
                  </div>
                  <strong className="font-normal italic">
                    "{verse.verse}"
                  </strong>
                  <Link
                    href={`/read/search/${
                      version === undefined ? "rv1960" : version
                    }/${verse.book}/${verse.chapter}/${verse.number}`}
                  >
                    <Button
                      className="w-full cursor-pointer"
                      variant={"outline"}
                    >
                      Leer
                    </Button>
                  </Link>
                </Card>
              ))}
              {isFetchingNextPage === true && isError === false && (
                <strong className="text-1xl">
                  Cargando nuevos resultados...
                </strong>
              )}
              {hasNextPage === true && (
                <Button
                  onClick={() => {
                    void fetchNextPage();
                  }}
                  className="cursor-pointer w-[20vw]"
                >
                  Cargar más resultados
                </Button>
              )}
              {hasNextPage === false && isError === false && (
                <strong className="text-1xl">
                  No hay más resultados disponibles...
                </strong>
              )}
            </div>
          )}
          {isError && search[0] === undefined && (
            <div className="flex justify-center items-center">
              <strong className="font-medium text-1xl">
                No encontramos resultados para su busqueda
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
