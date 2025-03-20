"use client";

import { useEffect, useState } from "react";

export function useGetBibleVersions() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bible-api.deno.dev/api/versions")
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
  }, []);
  return { result, loading };
}
