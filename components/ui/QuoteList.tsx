"use client";

import { Card, CardContent } from "@/components/ui/card";

type Quote = {
  topic: string;
  text: string;
};

type QuoteListProps = {
  quotes: Quote[];
};

export function QuoteList({ quotes }: QuoteListProps) {
  return (
    <div className="grid gap-4 mt-6">
      {quotes.map((quote, index) => (
        <Card key={index}>
          <CardContent className="p-4 text-lg">
            “{quote.text}”
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
