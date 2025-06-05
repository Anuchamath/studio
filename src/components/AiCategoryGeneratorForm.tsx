"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateCategoryDescription, type GenerateCategoryDescriptionInput } from '@/ai/flows/generate-category-description';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  categoryName: z.string().min(3, "Category name must be at least 3 characters long."),
  sourceContent: z.string().min(10, "Source content must be at least 10 characters long."),
});

type FormData = z.infer<typeof formSchema>;

export function AiCategoryGeneratorForm() {
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedDescription(null);
    try {
      const result = await generateCategoryDescription(data);
      setGeneratedDescription(result.description);
      toast({
        title: "Description Generated!",
        description: "The AI has successfully created a category description.",
      });
    } catch (error) {
      console.error("Error generating description:", error);
      setGeneratedDescription("Failed to generate description. Please try again.");
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-border/70 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">AI Category Description Generator</CardTitle>
        <CardDescription className="text-card-foreground/80">
          Enter a category name and some source details (e.g., key features, target audience, unique aspects) to generate a compelling description using AI.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="categoryName" className="text-card-foreground">Category Name</Label>
            <Input
              id="categoryName"
              {...register("categoryName")}
              placeholder="e.g., Sci-Fi Short Film Contest"
              className="bg-input border-border focus:border-primary focus:ring-primary"
            />
            {errors.categoryName && <p className="text-sm text-destructive">{errors.categoryName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="sourceContent" className="text-card-foreground">Source Content / Details</Label>
            <Textarea
              id="sourceContent"
              {...register("sourceContent")}
              placeholder="e.g., Focus on futuristic themes, visual effects, storytelling. Max 5 minutes. Open to amateurs and professionals."
              rows={5}
              className="bg-input border-border focus:border-primary focus:ring-primary"
            />
            {errors.sourceContent && <p className="text-sm text-destructive">{errors.sourceContent.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/80 transition-all duration-300">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Generating...' : 'Generate Description'}
          </Button>
          {generatedDescription && (
            <div className="mt-6 p-4 border border-border/50 rounded-md bg-background/50">
              <h4 className="font-headline text-lg text-primary mb-2">Generated Description:</h4>
              <p className="text-card-foreground/90 whitespace-pre-wrap">{generatedDescription}</p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
