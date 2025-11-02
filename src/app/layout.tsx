import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:{
    default:"ایونتی",
    template:" ایونتی | %s",
    absolute:""
    
  },
  icons: { icon: "images/icons/tumbnail.png" }, // فایل داخل public

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
 
      <body
        className="bg-secondaryColor"
      >
        {children}
      </body>
    </html>
  );
}
