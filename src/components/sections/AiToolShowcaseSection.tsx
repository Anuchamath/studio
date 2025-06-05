import { AiCategoryGeneratorForm } from '@/components/AiCategoryGeneratorForm';

export function AiToolShowcaseSection() {
  return (
    <section id="ai-tool" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          AI-Powered Insights
        </h2>
        <AiCategoryGeneratorForm />
      </div>
    </section>
  );
}
