"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Versión popular",
    href: "/read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
  {
    title: "Reina Valera 1960",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
  {
    title: "Reina Valera 1995",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
  {
    title: "Nueva versión internacional",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
  {
    title: "Dios habla hoy",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
  {
    title: "Palabra de Dios para todos",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/read" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()}} text-md`}
            >
              Comenzar a leer
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Guía
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Servant Bible
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis aliquam quidem id assumenda sapiente officiis
                      obcaecati consequatur tempore dolor alias?
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/plans" title="Planes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                soluta!
              </ListItem>
              <ListItem href="/read/todayword" title="Versiculo del día">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, obcaecati?
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Beneficios de la palabra"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Versiones
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
