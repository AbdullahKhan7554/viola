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
    <div className="group relative border-b border-line">
      {/* Gold edge accent that grows in as the item opens. */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 w-px bg-gradient-to-b from-accent to-secondary transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      />
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
          className={`flex w-full items-center justify-between gap-4 py-5 pl-4 text-left font-sans text-[1.02rem] font-medium transition-colors duration-300 hover:text-primary ${
            open ? "text-primary" : "text-text"
          }`}
        >
          <span>{question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? "bg-accent/15 text-accent" : "text-accent group-hover:bg-soft"
            }`}
          >
            <Icon
              name="chevronDown"
              size={20}
              className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 pl-4 pr-8 text-muted transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 blur-0" : "-translate-y-2 blur-[2px]"
            }`}
          >
            {answer}
          </p>
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
