import { URLShortener } from "@/components/url-shortener";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-2">
            <Link className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">URL Shortener</h1>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Transform your long URLs into concise, shareable links. Our modern URL shortener
            makes it easy to create and manage shortened URLs for your needs.
          </p>
          <URLShortener />
        </div>
      </div>
    </main>
  );
}