
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
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          Rules & Information
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border-border/50">
            <AccordionTrigger className="text-lg hover:text-primary data-[state=open]:text-primary font-medium">
              General Rules & Information
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80 text-sm">
              <p className="mb-3"><strong>Event:</strong> “Swarna Panhida”, the All Island Interschool Trilingual Media Competition.</p>
              <p className="mb-3"><strong>Date & Time:</strong> Sunday, 15th June 2025, from 7.00 a.m. to 5.00 p.m.</p>
              <p className="mb-3"><strong>Venue:</strong> St Sylvesters College.</p>
              <p className="mb-3"><strong>Registration:</strong> On the day of the competition, from 7.00 a.m. to 8.00 a.m., at the college premises.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>All submissions must be original work created by the participant(s).</li>
                <li>Entries must adhere to the specific guidelines for each category.</li>
                <li>Deadline for submissions is generally on the competition day, but specific categories like Graphic Design, Photography, and Short Film require online submission via Google Drive link through the coordinator before the deadline. Please check individual category details.</li>
                <li>Participants retain copyright of their work, but grant Swarna Panhida rights to showcase entries.</li>
                <li>Judges' decisions are final and binding.</li>
                <li>It is mandatory to complete the official application form and submit it to the organizing committee on the day of the competition.</li>
                <li>Lunch and refreshments should be provided by the participants. Food can be purchased within the school premises if needed.</li>
                <li>All food wrappers and parcels must be disposed of in designated waste areas or taken home.</li>
                <li>Contestants must adhere to their school’s code of conduct and the competition’s rules to uphold the dignity of their Alma Mater.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-border/50">
            <AccordionTrigger className="text-lg hover:text-primary data-[state=open]:text-primary font-medium">
              Eligibility Criteria
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80 text-sm">
              <p className="mb-2"><strong>Age Categories:</strong></p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Junior Category: Grades 6, 7, and 8</li>
                <li>Intermediate Category: Grades 9, 10, and 11</li>
                <li>Senior Category: Grades 12 and 13 (Students who sat for G.C.E. O/L Exam in 2025 fall under Senior)</li>
                <li>Open Category: Grades 6 to 13</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>All contestants must be born after 31st January 2006.</li>
                <li>Those competing in the Senior Category must present their National Identity Card (NIC) for identification.</li>
                <li>All contestants must be dressed in their official school uniform.</li>
                <li>Each contestant is permitted to participate in only one individual event. This restriction does not apply to the group event or short film event.</li>
                <li>Each school may enter a maximum of two contestants in each individual event.</li>
                <li>Employees of Swarna Panhida organizers and their immediate families are not eligible to participate.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-border/50 border-b-0">
            <AccordionTrigger className="text-lg hover:text-primary data-[state=open]:text-primary font-medium">
              Prizes & Recognition
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>Grand prize winner in each category receives [Prize Details - To be updated by organizers].</li>
                <li>Top 3 entries in each category will be featured on our platform and social media.</li>
                <li>Exclusive Swarna Panhida merchandise for all finalists.</li>
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
