// These styles apply to every route in the application
import "./global.css";
import { HeroUIProvider } from "@heroui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <div className="flex flex-col gap-4 p-8">{children}</div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
