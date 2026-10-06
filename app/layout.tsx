import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Sri Harsha Chakravarthula | Cybersecurity & AI Researcher",
  description:
    "Academic and technical ePortfolio of Sai Sri Harsha Chakravarthula, Ph.D. researcher in Cybersecurity in Emerging Systems, AI/ML security, LLM security, secure edge AI, RAG-based edge security, cloud, IoT, and healthcare AI.",
  keywords: [
    "Sai Sri Harsha Chakravarthula",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM Security",
    "Secure Edge AI",
    "RAG Security",
    "IoT Security",
    "Healthcare AI",
    "University of North Texas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
