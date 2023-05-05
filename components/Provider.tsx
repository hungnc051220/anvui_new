"use client";

import { AntdProvider } from "./AntdProvider";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <AntdProvider>{children}</AntdProvider>;
};

export default Provider;
