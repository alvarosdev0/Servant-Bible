"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useBooks } from "@/hooks/useBooks";

interface SearchNavBooksProps {
  setBook: (origin: string) => void;
  selectedBook?: string;
}

export function SearchNavBooks(props: SearchNavBooksProps) {
  const { selectedBook, setBook } = props;

  const { isLoading, isError, books } = useBooks();

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedBook
            ? books.find((book) => book.abrev === selectedBook)?.names[0]
            : "Seleccionar libro..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar libro..." className="h-9" />
          <CommandList>
            <CommandEmpty>No hay libros disponibles...</CommandEmpty>
            <CommandGroup>
              {books.map((book) => (
                <CommandItem
                  key={book.abrev}
                  value={book.abrev}
                  onSelect={(currentValue) => {
                    setBook(currentValue === selectedBook ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {book.names[0]}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedBook === book.abrev ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
