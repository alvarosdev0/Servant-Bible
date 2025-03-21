export type ResponseBooksTypes = {
  result:
    | [
        {
          names: [2];
          abrev: string;
          chapters: number;
          testament: string;
        }
      ]
    | any;
  loading: boolean;
};

export type ResponseVersesTypes = {
  result:
    | [
        {
          testament: string;
          name: string;
          num_chapters: number;
          chapter: number;
          vers: [object];
        }
      ]
    | any;
  loading: boolean;
};

export type ResponseVersionsTypes = {
  result:
    | [
        {
          name: string;
          version: string;
          uri: string;
        }
      ]
    | any;
  loading: boolean;
};
