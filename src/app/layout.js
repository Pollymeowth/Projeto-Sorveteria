import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Gelateria",
  description: "Sorvetes Artesanais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
