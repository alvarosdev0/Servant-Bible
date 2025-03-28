const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

interface fetchSearchProps {
  q: string;
  take: number;
  pageParam?: number | unknown;
  testament?: string;
}

export const fetchSearch = async (props: fetchSearchProps) => {
  const { q, take, pageParam } = props;
  await delay(300);

  return await fetch(
    `https://bible-api.deno.dev/api/read/nvi/search?q=${q}&take=${take}&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })

    .then((res) => {
      const currentPage = Number(res.meta.page);
      const nextCursor = currentPage > 4 ? undefined : currentPage + 1;

      return {
        data: {
          searchData: res.data,
          searchMeta: {
            ...res.meta,
            nextCursor,
          },
        },
      };
    });
};
