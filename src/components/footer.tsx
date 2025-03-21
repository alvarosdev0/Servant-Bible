import Link from "next/link";
import { Separator } from "./ui/separator";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const dataFooter = [
  {
    id: 1,
    name: "Blog",
    link: "blog",
  },
  {
    id: 2,
    name: "Acerca de nosotros",
    link: "aboutus",
  },

  {
    id: 3,
    name: "Contacto",
    link: "contact",
  },
];

const dataFooterUtils = [
  {
    id: 1,
    name: "Versiones bíblicas",
    link: "versions",
  },
  {
    id: 2,
    name: "Versiculo del día",
    link: "read/todayword",
  },
  {
    id: 3,
    name: "Donaciones",
    link: "donations",
  },
  {
    id: 4,
    name: "Ayuda",
    link: "help",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4 flex gap-2 flex-col">
      <div className="flex justify-between min-h-[50vh] text-white bg-[#731963]">
        <div className="flex flex-col gap-2 w-full p-4 text-left py-15 px-6">
          <strong className="text-2xl">SERVANT BIBLE</strong>
          <strong className="text-4xl">
            <span className="italic">
              {`"Si ustedes se mantienen fieles a mi palabra, serán de veras mis
              discípulos; conocerán la verdad, y la verdad los hará libres".{" "}`}
            </span>
          </strong>
          <strong className="text-right">Juan 8, 31-42</strong>
        </div>
        <div className="flex justify-evenly py-15 px-6 w-full">
          <ul className="flex flex-col gap-2">
            <li>
              <strong className="text-1xl">MINISTERIO</strong>
            </li>
            {dataFooter.map((item) => (
              <li className="" key={item.id}>
                <Link href={item.link} className="hover:underline me-4 md:me-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 w-40">
            <li>
              <strong className="text-1xl">ENLACES ÚTILES</strong>
            </li>
            {dataFooterUtils.map((item) => (
              <li className="" key={item.id}>
                <Link href={item.link} className="hover:underline me-4 md:me-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="px-6" />
      <div className="flex justify-between py-5 px-6">
        <div className="flex flex-col">
          <span className="block sm:text-center">
            &copy; 2025
            <Link href="#" className="ml-1">
              Servant Bible
            </Link>{" "}
            todos los derechos reservados.
          </span>
          <div className="flex gap-2">
            <a href="#">Políticos de privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-5">
            <a href="#">
              <Linkedin size={25} strokeWidth={1} />
            </a>
            <a href="#">
              <Instagram size={25} strokeWidth={1} />
            </a>
            <a href="#">
              <Youtube size={25} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
