"use client";

import { Separator } from "@/components/ui/separator";
import BooksGrid from "./books-grid";
import SearchBar from "./search-bar";
import VersionsCarousel from "./versions-carousel";
import { useState } from "react";

const ReadSection = () => {
  const [version, setVersion] = useState("rv1960");
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-4 min-h-[40vh] ">
      <div className="min-h-[10vh] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-black uppercase">Busca en la palabra</h1>
          <strong className="font-medium text-xl">
            Utilizando la versión que mejor te parezca.
          </strong>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 p-6 rounded-xl">
          <div className="flex flex-col ">
            <SearchBar />
            <VersionsCarousel
              selectedVersion={version}
              setVersion={setVersion}
            />
          </div>
          <Separator />
          <BooksGrid version={version} />
        </div>
      </div>
    </div>
  );
};

export default ReadSection;
