import { Cabin } from "next/font/google";
import ThemeProvider from "@/utils/Providers";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";
import { useTranslation } from "@/i18n";

const font = Cabin({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return {
    title: "AnVui | Trang chủ",
    description: "anvui.vn",
    icons: {
      icon: "/assets/icons/logo.svg",
    },
  };
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={font.className}>
        <ThemeProvider locale={lng}>
          <div className="main">
            <div className="gradient" />
          </div>
          <Header lng={lng} />
          <main className="app">
            <Banner />
            <div className="max-w-7xl mx-auto relative z-20 p-4 xl:p-0">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

