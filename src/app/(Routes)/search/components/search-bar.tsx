import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex gap-2 w-full min-w-[39vw]">
      <Input
        type="text"
        placeholder="Libro, versículo..."
        className="bg-[#D5CFE1] text-black w-full"
      />
      <Button type="submit" className="cursor-pointer bg-[#731963]">
        <Search strokeWidth="1" size={25} color="white" />
      </Button>
    </div>
  );
};

export default SearchBar;
