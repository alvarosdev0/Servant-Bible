import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="flex items-center justify-center py-4 px-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="text-xl cursor-pointer">
            ¿Por qué elegirnos?
          </AccordionTrigger>
          <AccordionContent className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum veritatis aliquid odio? Consequuntur, quam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger className="text-xl cursor-pointer">
            ¿Cuál es nuestro objetivo?
          </AccordionTrigger>
          <AccordionContent className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum veritatis aliquid odio? Consequuntur, quam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="text-xl cursor-pointer">
            ¿Algo puede mejorarse?
          </AccordionTrigger>
          <AccordionContent className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum veritatis aliquid odio? Consequuntur, quam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
