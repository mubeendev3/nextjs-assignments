import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accord = () => {
  return (
    <div className="text-white flex justify-center items-center h-5/6 p-20">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is JavaScript?</AccordionTrigger>
          <AccordionContent>
            JavaScript is a programming language that enables you to create
            dynamically updating content, control multimedia, animate images,
            and much more. It is widely used for developing interactive and
            dynamic websites.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the benefits of using React?
          </AccordionTrigger>
          <AccordionContent>
            React is a popular JavaScript library for building user interfaces.
            Some of the benefits of using React include:
            <ul>
              <li>
                Component-based architecture for reusability and
                maintainability.
              </li>
              <li>Virtual DOM for improved performance.</li>
              <li>One-way data flow for predictable behavior.</li>
              <li>Rich ecosystem with a vast array of libraries and tools.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do you handle state in React?</AccordionTrigger>
          <AccordionContent>
            In React, state is managed by using the useState hook or by creating
            class components with state. You can update state using setState
            method or useState hook. State should be used for data that can
            change over time and affects the rendering of components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accord;
