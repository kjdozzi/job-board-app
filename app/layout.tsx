import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personalized Job Board",
  description: "Daily curated Product Manager job listings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto py-4 px-4">
              <h1 className="text-2xl font-bold">PM Job Board</h1>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
