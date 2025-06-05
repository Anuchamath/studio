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
    <div className="bg-card rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_12px_theme(colors.primary/0.7)] hover:shadow-[0_0_25px_theme(colors.primary)] transition-all duration-300 transform hover:-translate-y-1">
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
        <h3 className="text-2xl font-headline text-primary mb-3 text-glow-primary">{title}</h3>
        <p className="text-card-foreground/80 mb-4 min-h-[60px]">{description}</p>
        <Button variant="outline" className="w-full group border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_15px_theme(colors.accent/0.8)] transition-all duration-300">
          Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
