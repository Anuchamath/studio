import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function RulesInfoSection() {
  return (
    <section id="rules" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-primary text-glow-primary">
          Rules & Information
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border-primary/30">
            <AccordionTrigger className="text-xl hover:text-primary data-[state=open]:text-primary font-medium">
              Competition Rules
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80">
              <ul className="list-disc pl-5 space-y-2">
                <li>All submissions must be original work created by the participant(s).</li>
                <li>Entries must adhere to the specific guidelines for each category.</li>
                <li>Deadline for submissions is [Date]. Late entries will not be accepted.</li>
                <li>Participants retain copyright of their work, but grant SwarnaVerse rights to showcase entries.</li>
                <li>Judges' decisions are final and binding.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-primary/30">
            <AccordionTrigger className="text-xl hover:text-primary data-[state=open]:text-primary font-medium">
              Eligibility Criteria
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80">
              <ul className="list-disc pl-5 space-y-2">
                <li>Open to participants worldwide, aged 18 and above.</li>
                <li>Team entries are allowed (max 5 members per team, unless specified otherwise by category).</li>
                <li>Employees of SwarnaVerse and their immediate families are not eligible to participate.</li>
                <li>One entry per participant/team per category.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-primary/30 border-b-0">
            <AccordionTrigger className="text-xl hover:text-primary data-[state=open]:text-primary font-medium">
              Prizes & Recognition
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80">
              <ul className="list-disc pl-5 space-y-2">
                <li>Grand prize winner in each category receives [Prize Details].</li>
                <li>Top 3 entries in each category will be featured on our platform and social media.</li>
                <li>Exclusive SwarnaVerse merchandise for all finalists.</li>
                <li>Certificates of participation for all valid entries.</li>
                <li>Opportunities for networking and mentorship.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
