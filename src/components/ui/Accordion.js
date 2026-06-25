"use client";

import { useId, useState } from "react";
import Icon from "./Icon";
import { track } from "@/lib/analytics";

/**
 * Accessible FAQ accordion (PRD F10). Uses native <button> with
 * aria-expanded / aria-controls, full keyboard support, and a
 * grid-rows transition for smooth, CLS-free expand/collapse.
 */
function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-line">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => {
            const next = !open;
            setOpen(next);
            if (next) track.faqExpand(question);
          }}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-[1.02rem] font-medium text-text transition-colors hover:text-primary"
        >
          <span>{question}</span>
          <Icon
            name="chevronDown"
            size={22}
            className={`shrink-0 text-accent transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, className }) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <AccordionItem key={i} {...item} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
