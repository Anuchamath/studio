'use server';

/**
 * @fileOverview A flow that summarizes competition rules using AI.
 *
 * - summarizeCompetitionRules - A function that summarizes the competition rules.
 * - SummarizeCompetitionRulesInput - The input type for the summarizeCompetitionRules function.
 * - SummarizeCompetitionRulesOutput - The return type for the summarizeCompetitionRules function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCompetitionRulesInputSchema = z.object({
  rules: z
    .string()
    .describe('The complete set of competition rules to be summarized.'),
});
export type SummarizeCompetitionRulesInput = z.infer<
  typeof SummarizeCompetitionRulesInputSchema
>;

const SummarizeCompetitionRulesOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the competition rules.'),
});
export type SummarizeCompetitionRulesOutput = z.infer<
  typeof SummarizeCompetitionRulesOutputSchema
>;

export async function summarizeCompetitionRules(
  input: SummarizeCompetitionRulesInput
): Promise<SummarizeCompetitionRulesOutput> {
  return summarizeCompetitionRulesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCompetitionRulesPrompt',
  input: {schema: SummarizeCompetitionRulesInputSchema},
  output: {schema: SummarizeCompetitionRulesOutputSchema},
  prompt: `Summarize the following competition rules, extracting the key guidelines and important information:

  {{{rules}}} `,
});

const summarizeCompetitionRulesFlow = ai.defineFlow(
  {
    name: 'summarizeCompetitionRulesFlow',
    inputSchema: SummarizeCompetitionRulesInputSchema,
    outputSchema: SummarizeCompetitionRulesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
