import { HeroUIProvider } from "@heroui/react";

export async function Providers({ children }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
