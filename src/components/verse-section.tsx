import { Sun } from "lucide-react";
import { Card } from "./ui/card";

const VerseSection = () => {
  return (
    <div className="flex flex-col py-4 px-6 min-h-[30vh] bg-[url(/img/landscape.jpg)] bg-cover bg-center">
      <Card className="flex-1/2 p-6 bg-[#ffffff8f]">
        <strong className="flex items-center  gap-2 text-2xl">
          <Sun size={25} strokeWidth={1} />
          Versículo del día
        </strong>
        <p className="italic text-lg">
          {`"Hijo mío, atiende a mis consejos; escucha atentamente lo que digo. No
          pierdas de vista mis palabras; guárdalas muy dentro de tu corazón."`}
        </p>
        <strong className="text-1xl text-right">Proverbios 4:20-22</strong>
      </Card>
    </div>
  );
};

export default VerseSection;
