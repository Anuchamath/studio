import { CategoryCard } from '@/components/CategoryCard';

const categories = [
  {
    title: "Short Film Showcase",
    description: "Submit your best short films. All genres welcome. Let your cinematic vision shine.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "cinema film reel",
  },
  {
    title: "Tech Innovation Challenge",
    description: "Present groundbreaking tech solutions. From AI to sustainable tech, impress the judges.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "circuit board technology",
  },
  {
    title: "Podcast Prodigy",
    description: "Share your voice with the world. Best podcast episode on any topic wins.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "microphone podcast",
  },
  {
    title: "Digital Art Expo",
    description: "Exhibit your stunning digital artworks. Illustrations, 3D models, and more.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "digital art abstract",
  },
  {
    title: "Indie Game Development",
    description: "Showcase your innovative indie games. Creativity and gameplay are key.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "game controller joystick",
  },
  {
    title: "Music Production Masters",
    description: "Submit your original music tracks. All genres and styles are encouraged.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "audio waveform music",
  },
];

export function CategoryGridSection() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-glow-primary">
          Competition Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              imageHint={category.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
