import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Menubar from "@/components/Menubar";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import SideModal from "@/components/modal/SideModal";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { getCurrentUser } from "./actions/getCurrentUser";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube-Clone",
  description: "YouTube Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />

        <Container>
          <Header currentUser={currentUser} />

          <Menubar currentUser={currentUser} />

          <div className="xl:hidden">
            <SideModal currentUser={currentUser} />
          </div>

          <div className="hidden xl:block fixed top-12 h-screen w-[250px] overflow-y-auto">
            <Sidebar currentUser={currentUser} />
          </div>

          <ModalProvider currentUser={currentUser} />

          <main className="w-screen h-screen pt-14 md:pl-28 xl:pl-[250px] overflow-hidden">
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
