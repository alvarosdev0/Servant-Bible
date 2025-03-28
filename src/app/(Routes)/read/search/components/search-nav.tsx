"use client";

import { useQueryState } from "nuqs";
import SearchBar from "../../components/search-bar";
import VersionsCarousel from "../../components/versions-carousel";
import { SearchNavBooks } from "./search-nav-books";

const SearchNav = () => {
  const [selectedVersion, setVersion] = useQueryState("version", {
    defaultValue: "rv1960",
  });
  const [selectedBook, setBook] = useQueryState("book", { defaultValue: "" });
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });

  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] gap-2">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <SearchNavBooks setBook={setBook} selectedBook={selectedBook} />
          <SearchBar setQuery={setQuery} />
        </div>
        <VersionsCarousel
          setVersion={setVersion}
          selectedVersion={selectedVersion}
        />
      </div>
    </div>
  );
};

export default SearchNav;
