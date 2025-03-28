import SearchNav from "./components/search-nav";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-black uppercase">Busca en la palabra</h1>
        <strong className="font-medium text-xl">
          Utilizando la versión que mejor te parezca.
        </strong>
      </div>
      <SearchNav />
      {children}
    </>
  );
}
