import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract media background"
          data-ai-hint="film tech microphone"
          layout="fill"
          objectFit="cover"
          className="blur-md brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      <div className="relative z-10 p-4 container mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-6 text-glow-primary animate-neon-pulse">
          Welcome to SwarnaVerse
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-3xl mx-auto">
          Unleash your creativity and compete in the ultimate showcase of talent in film, technology, and media.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_20px_theme(colors.primary)] transition-all duration-300">
            <Link href="#categories">Explore Categories</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_theme(colors.accent)] transition-all duration-300">
            <Link href="#rules">View Rules</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
