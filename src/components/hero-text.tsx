import Link from "next/link";
import { Button } from "./ui/button";

const HeroText = () => (
  <div className="flex flex-col w-full justify-center itemce gap-3 max-w-[50vw]">
    <h1 className="text-white text-5xl font-bold max-w-[650px]">
      TOMA EL PRIMER PASO HACIA EL PROPÓSITO QUE DIOS PUSO EN TI.
    </h1>
    <p className="text-white text-lg max-w-[450px]">
      Busca dentro de la palabra con la versión que tú quieras, cuando quieras y
      cuanto quieras con un seguimiento de tu progreso.
    </p>
    <Link href="/read" className="">
      <Button
        type="button"
        className="cursor-pointer bg-[#731963] border-1 border-[#d5cfe177] w-[200px]"
      >
        Lee la biblia ahora
      </Button>
    </Link>
  </div>
);

export default HeroText;
