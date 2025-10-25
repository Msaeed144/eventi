export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-3 w-[280px] bg-white border border-strokeColor rounded-sm h-[500px]">
          
        </div>

        {children}
      </div>
    </div>
  );
}
