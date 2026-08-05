import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ_ITEMS } from "../config/seo";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <HelpCircle size={16} className="text-green-600" />
            <span className="font-semibold">Common Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Questions
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Ayurvedic care at Harsha Vedic
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-green-100 rounded-2xl px-5 bg-green-50/30 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-700 hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
