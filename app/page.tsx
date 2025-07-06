"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes } from "@/lib/quotes";
import { Card, CardContent } from "@/components/ui/card";

type Quote = {
  topic: string;
  text: string;
};

export default function Home() {
  const [topic, setTopic] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quotes.filter(
      (quote) =>
        quote.topic.toLowerCase().trim() === topic.toLowerCase().trim()
    );
    setFilteredQuotes(result.slice(0, 3));
  };

  return (
    <main className="max-w-xl mx-auto py-20 px-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">Motivational Quote Generator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Enter a topic (e.g. success, life)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Generate</Button>
      </form>

      {filteredQuotes.length > 0 && (
        <div className="space-y-4 mt-8 text-left">
          {filteredQuotes.map((quote, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-base">“{quote.text}”</CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
