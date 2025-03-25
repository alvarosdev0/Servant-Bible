import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BooksType } from "@/types/book";
import ChapterPopover from "./chapter-popover";
import { Separator } from "@/components/ui/separator";

interface BookProps {
  book: BooksType;
  version: string;
}

const BookPopover = (props: BookProps) => {
  const { book, version }: BookProps = props;
  const chaptersArray = Array.from({ length: book.chapters }, (v, i) => i + 1);

  return (
    <Popover key={book.abrev}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          {book.names[0]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 h-full max-h-[60vh] overflow-y-scroll">
        <div className="grid gap-4">
          <div className="space-y-2 text-center gap-2 flex flex-col">
            <strong className="text-1xl font-medium">
              Capitulos disponibles para{" "}
              <span className="font-bold">{book.names[0]}</span>
            </strong>
            <Separator />
          </div>
          <div className="grid gap-2 grid-cols-3">
            {chaptersArray.map((chapter) => (
              <ChapterPopover
                version={version}
                key={chapter}
                book={book}
                chapter={chapter}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BookPopover;
