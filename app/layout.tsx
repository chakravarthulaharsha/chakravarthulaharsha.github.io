import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chakravarthulaharsha.github.io"),
  title: "Sai Sri Harsha Chakravarthula | Ph.D. Researcher in Cybersecurity & AI",
  description:
    "Academic portfolio of Sai Sri Harsha Chakravarthula, Ph.D. student at the University of North Texas. Research in LLM security, trustworthy AI, secure edge systems, and healthcare AI.",
  keywords: [
    "Sai Sri Harsha Chakravarthula",
    "cybersecurity",
    "trustworthy AI",
    "LLM security",
    "edge AI security",
    "RAG security",
    "University of North Texas",
  ],
  openGraph: {
    title: "Sai Sri Harsha Chakravarthula | Ph.D. Researcher in Cybersecurity & AI",
    description: "Research, publications, teaching, and professional experience in cybersecurity, AI, and secure edge systems.",
    url: "https://chakravarthulaharsha.github.io",
    siteName: "Sai Sri Harsha Chakravarthula",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
