import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madam CAC | Fast, Stress-Free CAC Business Registration in Nigeria",
  description:
    "Register your business name, limited company or NGO with the Corporate Affairs Commission (CAC). Trusted by 1,000+ Nigerian businesses. Chat with Madam CAC on WhatsApp today.",
  openGraph: {
    title: "Madam CAC | CAC Business Registration Made Easy",
    description:
      "Business Name, LTD, Incorporated Trustees, annual returns and more, handled end-to-end.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
