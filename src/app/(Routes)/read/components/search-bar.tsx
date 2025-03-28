"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  setQuery: (origin: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { setQuery } = props;
  const [value, setValue] = useState("");

  const useField = ({ type }: { type: string }) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return {
      type,
      value,
      onChange,
    };
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(value);
  };

  const search = useField({ type: "text" });

  return (
    <form className="flex gap-2 w-full" onSubmit={onSubmit}>
      <Input
        {...search}
        placeholder="Libro, versículo..."
        className="bg-[#D5CFE1] text-black w-full"
      />
      <Button type="submit" className="cursor-pointer bg-[#731963]">
        <Search strokeWidth="1" size={25} color="white" />
      </Button>
    </form>
  );
};

export default SearchBar;
