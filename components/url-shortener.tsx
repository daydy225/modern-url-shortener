"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { URLForm } from "@/components/url-form";
import { ShortenedURL } from "@/components/shortened-url";

export function URLShortener() {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(url: string) {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Generate a random short URL (in production, this would be handled by your backend)
      const shortened = `https://short.url/${Math.random().toString(36).substr(2, 6)}`;
      setShortUrl(shortened);
      toast({
        title: "Success!",
        description: "Your URL has been shortened successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle>Shorten Your URL</CardTitle>
        <CardDescription>
          Enter a long URL below to create a shortened version.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <URLForm onSubmit={onSubmit} isLoading={isLoading} />
        {shortUrl && <ShortenedURL url={shortUrl} />}
      </CardContent>
    </Card>
  );
}