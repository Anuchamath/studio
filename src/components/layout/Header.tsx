
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="https://placehold.co/40x40.png" 
            alt="Swarna Panhida Logo" 
            data-ai-hint="minimalist gold quill"
            width={32} 
            height={32} 
            className="h-8 w-8 rounded-sm"
          />
          <h1 className="text-2xl md:text-3xl font-headline text-primary">Swarna Panhida</h1>
        </Link>
        <nav className="space-x-4 md:space-x-6">
          <Link href="#categories" className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm md:text-base">Categories</Link>
          <Link href="#rules" className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm md:text-base">Rules</Link>
          <Link href="#ai-tool" className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm md:text-base">AI Tool</Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm md:text-base">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
