import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chakravarthulaharsha.github.io"),
  title: "Sai Sri Harsha Chakravarthula | Cybersecurity & AI Researcher",
  description:
    "Academic portfolio of Sai Sri Harsha Chakravarthula, doctoral researcher at the University of North Texas specializing in cybersecurity in emerging systems, trustworthy AI, LLM and edge security.",
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
    title: "Sai Sri Harsha Chakravarthula | Cybersecurity & AI Researcher",
    description: "Research, publications, teaching, and experience in trustworthy AI and cybersecurity.",
    url: "https://chakravarthulaharsha.github.io",
    siteName: "Sai Sri Harsha Chakravarthula",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
