import { ChartNoAxesCombined, Sparkle, SquarePen } from "lucide-react";
import { Card } from "./ui/card";

const WhySection = () => {
  return (
    <div className="flex py-4 px-6 gap-2 bg-[#D5CFE1] min-h-[40vh]">
      <Card className="flex flex-col gap-2 flex-1/3 items-center p-6 bg-[#731963] text-white">
        <Sparkle size={50} strokeWidth={1} />
        <strong className="text-2xl font-medium">
          Mantén tu progreso en la palabra
        </strong>
        <strong className="text-1xl font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
          dignissimos harum ipsum quasi vero.
        </strong>
      </Card>
      <Card className="flex flex-col gap-2 flex-1/3 items-center p-6 bg-[#731963] text-white">
        <ChartNoAxesCombined size={50} strokeWidth={1} />
        <strong className="text-2xl font-medium">
          Disponible en todos los dispositivos
        </strong>
        <strong className="text-1xl font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
          dignissimos harum ipsum quasi vero.
        </strong>
      </Card>
      <Card className="flex flex-col gap-2 flex-1/3 items-center p-6 bg-[#731963] text-white">
        <SquarePen size={50} strokeWidth={1} />
        <strong className="text-2xl font-medium">
          Crea comentarios y marcaciones mientras lees
        </strong>
        <strong className="text-1xl font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
          dignissimos harum ipsum quasi vero.
        </strong>
      </Card>
    </div>
  );
};

export default WhySection;
