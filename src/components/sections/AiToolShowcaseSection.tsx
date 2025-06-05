import { AiCategoryGeneratorForm } from '@/components/AiCategoryGeneratorForm';

export function AiToolShowcaseSection() {
  return (
    <section id="ai-tool" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-primary text-glow-primary">
          AI-Powered Insights
        </h2>
        <AiCategoryGeneratorForm />
      </div>
    </section>
  );
}
