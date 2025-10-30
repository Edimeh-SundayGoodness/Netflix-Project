import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./components/ui/provider";
import "@fontsource/inter";
import { ORG_NAME } from "./constants";

export const metadata: Metadata = {
  title: ORG_NAME,
  description: `Official Website of ${ORG_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
          <Provider>
            {children}
          </Provider>
      </body>
    </html>
  );
}