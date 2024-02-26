import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const font = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Portfolio | Photography Portfolio",
  description: "My photography repository. find all my pictures in here",
  authors: [{ name: 'NnoromIV', url: 'https://github.com/nnoromiv' }],
  keywords: ['photo', 'photography', 'picture', 'instagram', 'blockchain', 'ethereum'],
  publisher: 'NnoromIV'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
