const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

export const fetchVerses = async (abrev: string, chapter: number) => {
  await delay(300);

  return await fetch(
    `https://bible-api.deno.dev/api/read/rv1960/${abrev}/${chapter}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })

    .then((res) => {
      return {
        verses: res,
      };
    });
};
