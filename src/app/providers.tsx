"use client";

import themes from "@/utils/themes";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themes}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
