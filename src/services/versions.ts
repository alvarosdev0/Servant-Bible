const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

export const fetchVersions = async () => {
  await delay(300);

  return await fetch(`https://bible-api.deno.dev/api/versions`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })

    .then((res) => {
      return {
        versions: res,
      };
    });
};
