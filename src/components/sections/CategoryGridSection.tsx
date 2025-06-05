
import { CategoryCard } from '@/components/CategoryCard';

const categories = [
  {
    title: "Announcing",
    description: "Showcase your announcing skills in Sinhala, English, or Tamil. Scripts provided, with a final round for seniors.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "microphone announcer",
  },
  {
    title: "Editing",
    description: "Test your editing prowess in Sinhala, English, or Tamil. A 3-hour written exam. No electronic devices.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "text document editing",
  },
  {
    title: "Dubbing",
    description: "Bring characters to life with your voice. Dubbing scripts and videos provided for Sinhala and English mediums.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "voice actor microphone",
  },
  {
    title: "Sports Commentary",
    description: "Narrate the thrill of the game! Provide live sports commentary for selected videos in Sinhala or English.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "sports stadium microphone",
  },
  {
    title: "Graphic Designing",
    description: "Create stunning visuals! Design graphics based on a given topic and submit your digital work (PNG/JPEG + project file).",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "graphic design software",
  },
  {
    title: "Photography",
    description: "Capture the moment! On-site photography challenge based on a given topic. Submit original and RAW files.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "camera photography",
  },
  {
    title: "Cartoon Drawing",
    description: "Illustrate your imagination! Create cartoons based on a topic. Paper provided, bring your own art supplies.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "cartoon sketch drawing",
  },
  {
    title: "Poster Drawing",
    description: "Design impactful posters! Create posters based on a topic. Paper provided, bring your own art supplies.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "poster design art",
  },
  {
    title: "Technical Event",
    description: "Showcase your technical media skills! A written and practical test in Sinhala or English. No electronic devices.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "sound mixing board",
  },
  {
    title: "Group Event",
    description: "Collaborate and present! Teams of up to 5 deliver a live presentation on a given topic on competition day.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "team presentation group",
  },
  {
    title: "Short Film",
    description: "Tell your story through film! Create original short films (10-15 mins) on any theme. Max 10 cast/crew.",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "film camera movie",
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
