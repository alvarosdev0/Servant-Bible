export type SearchType = {
  searchData: VerseFound[];
  searchMeta: {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
    nextCursor: number | unknown;
  };
};

export type VerseFound = {
  verse: string;
  study: string;
  number: number;
  id: number;
  book: string;
  chapter: number;
};
