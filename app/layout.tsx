// These styles apply to every route in the application
import "./global.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="p-4 flex justify-center items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
