'use client';

import { AntdProvider } from "./AntdProvider";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import enUS from "antd/locale/en_US";

interface ProviderProps {
  children: React.ReactNode;
  locale: string;
}

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  return (
    <ConfigProvider
      locale={locale === "vi" ? viVN : enUS}
      theme={{
        token: {
          colorPrimary: "#FF5722",
        },
      }}
    >
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  );
}

export default function Providers(props: ProviderProps) {
  return <AntdConfigProvider {...props} />;
}
