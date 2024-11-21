"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type ShortenedURLProps = {
  url: string;
};

export function ShortenedURL({ url }: ShortenedURLProps) {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Copied!",
        description: "The shortened URL has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy URL to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="truncate mr-4">
          <p className="text-sm font-medium text-muted-foreground">Shortened URL:</p>
          <p className="text-primary font-medium">{url}</p>
        </div>
        <Button 
          size="icon" 
          variant="outline"
          onClick={copyToClipboard}
          className="hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}