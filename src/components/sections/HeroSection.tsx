
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1200x800.png"
          alt="Swarna Panhida platform background"
          data-ai-hint="modern abstract gold black"
          layout="fill"
          objectFit="cover"
          className="blur-sm brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      <div className="relative z-10 p-4 container mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline mb-6 text-primary">
          Welcome to Swarna Panhida
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-3xl mx-auto">
          Unleash your creativity and compete in the ultimate showcase of talent in film, technology, and media.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
            <Link href="#categories">Explore Categories</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            <Link href="#rules">View Rules</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
