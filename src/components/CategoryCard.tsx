import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export function CategoryCard({ title, description, imageUrl, imageHint }: CategoryCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border/70 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-headline text-primary mb-3">{title}</h3>
        <p className="text-card-foreground/80 mb-4 min-h-[60px] text-sm">{description}</p>
        <Button variant="outline" className="w-full group text-sm">
          Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
