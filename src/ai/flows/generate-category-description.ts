'use server';

/**
 * @fileOverview A flow for generating descriptions for competition categories using AI.
 *
 * - generateCategoryDescription - A function that generates a category description.
 * - GenerateCategoryDescriptionInput - The input type for the generateCategoryDescription function.
 * - GenerateCategoryDescriptionOutput - The return type for the generateCategoryDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCategoryDescriptionInputSchema = z.object({
  categoryName: z.string().describe('The name of the competition category.'),
  sourceContent: z.string().describe('The source content to be used in generating the description, such as a list of details or resources.'),
});
export type GenerateCategoryDescriptionInput = z.infer<typeof GenerateCategoryDescriptionInputSchema>;

const GenerateCategoryDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description for the competition category.'),
});
export type GenerateCategoryDescriptionOutput = z.infer<typeof GenerateCategoryDescriptionOutputSchema>;

export async function generateCategoryDescription(input: GenerateCategoryDescriptionInput): Promise<GenerateCategoryDescriptionOutput> {
  return generateCategoryDescriptionFlow(input);
}

const generateCategoryDescriptionPrompt = ai.definePrompt({
  name: 'generateCategoryDescriptionPrompt',
  input: {schema: GenerateCategoryDescriptionInputSchema},
  output: {schema: GenerateCategoryDescriptionOutputSchema},
  prompt: `You are an expert content creator specializing in writing engaging and informative descriptions for competition categories.

  Based on the category name and the provided source content, generate a compelling description for the competition category.

  Category Name: {{{categoryName}}}
  Source Content: {{{sourceContent}}}

  Description:`, // Ensure the LLM generates a complete description.
});

const generateCategoryDescriptionFlow = ai.defineFlow(
  {
    name: 'generateCategoryDescriptionFlow',
    inputSchema: GenerateCategoryDescriptionInputSchema,
    outputSchema: GenerateCategoryDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateCategoryDescriptionPrompt(input);
    return output!;
  }
);
