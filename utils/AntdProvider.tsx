"use client";
import React, { useState } from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import dayjs from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi");

if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

export function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => createCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== "undefined") {
    return render;
  }

  return (
    <StyleProvider hashPriority="high" cache={cache}>
      {render}
    </StyleProvider>
  );
}
