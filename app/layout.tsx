import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitchell College — New London, CT | Where Possibility Begins",
  description:
    "Mitchell College is a private liberal arts college on the Thames River in New London, Connecticut. Explore our academic programs, campus life, and the Mitchell Ability Model.",
  keywords:
    "Mitchell College, New London, Connecticut, liberal arts, college, Thames River, Mariners, NCAA Division III",
  openGraph: {
    title: "Mitchell College — Where Possibility Begins",
    description:
      "A waterfront campus. A personalized education. A community that celebrates every learner.",
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
