import BookPopover from "./book-popover";
import { useBooks } from "@/hooks/useBooks";
import SkeletonSchema from "@/components/skeletonSchema";

interface BooksGridProps {
  version: string;
}

const BooksGrid = (props: BooksGridProps) => {
  const { version } = props;
  const { isLoading, isError, books } = useBooks();

  return (
    <div className="flex flex-col w-[60vw] min-h-[40vh] gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Listado de libros</h2>
        <strong className="font-normal">
          Todos los capitulos y libros disponibles actualmente.
        </strong>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {isLoading === true && (
          <>
            <div className="flex gap-2 w-full">
              <SkeletonSchema
                grid={5}
                className="min-w-[9.5rem] min-h-[2rem]"
              />
            </div>
          </>
        )}
        {isLoading === false &&
          books.map((book) => (
            <BookPopover version={version} book={book} key={book.abrev} />
          ))}
      </div>
    </div>
  );
};

export default BooksGrid;
