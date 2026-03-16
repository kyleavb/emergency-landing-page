import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Honor the Promise to Yourself — Mitchell College Professional Studies Business",
  description:
    "Complete your B.A. in Business online at Mitchell College. Transfer 60+ credits and finish your degree on your schedule. $500/credit, fully online, asynchronous.",
  keywords:
    "Mitchell College, online business degree, degree completion, transfer credits, adult learners, professional studies",
  openGraph: {
    title: "Honor the Promise to Yourself — Mitchell College",
    description:
      "See how your 60+ transfer credits apply toward a fully online B.A. in Business.",
    type: "website",
    locale: "en_US",
    siteName: "Mitchell College",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
