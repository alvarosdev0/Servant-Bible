import { useGetBibleVerses } from "@/api/useGetBibleVerses";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useVerses } from "@/hooks/useVerses";
import { Eraser, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ChapterPopoverProps {
  book: { abrev: string; names: [2] };
  chapter: number;
  version: string;
}

const ChapterPopover = (props: ChapterPopoverProps) => {
  const { book, chapter, version } = props;
  const [selectedVerses, setSelectedVerses] = useState([0, 0]);
  const [bookURL, setBookURL] = useState(``);
  const router = useRouter();

  const { isLoading, isError, verses } = useVerses(book.abrev, chapter);

  console.log(verses);

  const verseClick = (verse: number) => {
    if (selectedVerses[0] === 0) {
      setBookURL(`read/${version}/${book.abrev}/${chapter}/${verse}`);
      setSelectedVerses([verse, 0]);
    } else if (selectedVerses[1] === 0 && verse > selectedVerses[0]) {
      setBookURL(
        `read/${version}/${book.abrev}/${chapter}/${selectedVerses[0]}-${verse}`
      );
      setSelectedVerses([selectedVerses[0], verse]);
    } else if (selectedVerses[0] !== 0 && selectedVerses[1] !== 0) {
      setBookURL(`read/${version}/${book.abrev}/${chapter}/${verse}`);
      setSelectedVerses([verse, 0]);
    }
  };
  const verseStrongText = () => {
    if (selectedVerses[0] === 0 && selectedVerses[1] === 0) {
      return `Leer capitulo desde el comienzo`;
    } else if (selectedVerses[0] !== 0 && selectedVerses[1] === 0) {
      return `Leer verso ${selectedVerses[0]}`;
    } else if (selectedVerses[0] !== 0 && selectedVerses[1] !== 0) {
      return `Leer versos ${selectedVerses[0]} - ${selectedVerses[1]}`;
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" className="cursor-pointer bg-[#731963]">
          {chapter}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 h-full max-h-[40vh] overflow-y-scroll text-center gap-2">
        <div className="grid gap-4">
          <div className="flex flex-col gap-2 space-y-2 text-center">
            <strong className="text-1xl font-medium">
              Versiculos disponibles para{" "}
              <span className="font-bold">{book.names[0]}</span>{" "}
              <span className="font-bold">{chapter}</span>
            </strong>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    router.push(
                      bookURL === ``
                        ? `${version}//${book.abrev}/${chapter}`
                        : bookURL
                    )
                  }
                  variant="outline"
                  className="grid m-0 place-self-end cursor-pointer basis-[70%]"
                >
                  <Eye strokeWidth={2} />
                </Button>
                <Button
                  onClick={() => setSelectedVerses([0, 0])}
                  variant="outline"
                  className="grid m-0 place-self-end cursor-pointer basis-[30%]"
                >
                  <Eraser strokeWidth={2} />
                </Button>
              </div>
              <strong className="text-sm font-medium text-center">
                {verseStrongText()}
              </strong>
            </div>
            <Separator />
          </div>
          <div className="grid gap-2 grid-cols-3">
            {isLoading === true && (
              <strong className="text-sm font-medium">
                Cargando versiculos...
              </strong>
            )}
            {isLoading === false &&
              verses.map((verse) => (
                <Button
                  key={verse.id}
                  variant="default"
                  className={
                    selectedVerses[0] === verse.number ||
                    selectedVerses[1] === verse.number
                      ? "cursor-pointer bg-[#D5CFE1] border-1 border-black text-black"
                      : "cursor-pointer bg-[#731963]"
                  }
                  onClick={() => verseClick(verse.number)}
                >
                  {verse.number}
                </Button>
              ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChapterPopover;
