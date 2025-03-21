"use client";

import { useEffect, useState } from "react";

export function useGetBibleVerses(chapter: number, abrev: string) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bible-api.deno.dev/api/read/rv1960/${abrev}/${chapter}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
  }, []);
  return { result, loading };
}
