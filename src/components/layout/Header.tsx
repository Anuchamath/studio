import Link from 'next/link';
import { Clapperboard } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Clapperboard className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-headline text-primary text-glow-primary">SwarnaVerse</h1>
        </Link>
        <nav className="space-x-6">
          <Link href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">Categories</Link>
          <Link href="#rules" className="text-foreground hover:text-primary transition-colors font-medium">Rules</Link>
          <Link href="#ai-tool" className="text-foreground hover:text-primary transition-colors font-medium">AI Tool</Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
