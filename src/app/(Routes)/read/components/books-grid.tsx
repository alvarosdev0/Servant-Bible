import { useGetBibleBooks } from "@/api/useGetBibleBooks";
import { BooksType } from "@/types/books";
import BookPopover from "./book-popover";
import { ResponseBooksTypes } from "@/types/responses";

interface BooksGridProps {
  version: string;
}

const BooksGrid = (props: BooksGridProps) => {
  const { version } = props;
  const { loading, result }: ResponseBooksTypes = useGetBibleBooks();

  return (
    <div className="flex flex-col min-h-[30vh] gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Listado de libros</h2>
        <strong className="font-normal">
          Todos los capitulos y libros disponibles actualmente.
        </strong>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {loading === false &&
          result?.map((book: BooksType) => (
            <BookPopover version={version} book={book} key={book.abrev} />
          ))}
      </div>
    </div>
  );
};

export default BooksGrid;
