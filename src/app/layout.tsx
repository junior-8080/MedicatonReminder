import { Outfit } from "next/font/google";
import Providers from "@/components/providers/providers";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  font-outfit`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
