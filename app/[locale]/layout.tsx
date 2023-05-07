import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import { Cabin } from "next/font/google";
import ThemeProvider from "@/utils/Providers";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";

const font = Cabin({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "vi" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale = "vi" },
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {

  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider locale={locale}>
            <div className="main">
              <div className="gradient" />
            </div>
            <Header />
            <main className="app">
              <Banner />
              <div className="max-w-7xl mx-auto relative z-20 p-4 xl:p-0">{children}</div>
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: Record<string, any>;
}) {
  const messages = (await import(`@/locales/${locale}.json`)).default;

  const t = createTranslator({ locale, messages });

  return {
    title: t("home.title"),
    description: t("home.description"),
    icons: {
      icon: "/assets/icons/logo.svg",
    },
  };
}
