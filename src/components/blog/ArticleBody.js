import Icon from "@/components/ui/Icon";

/**
 * Renders a post's structured `sections` into semantic, accessible HTML.
 * Each section is an H2 followed by paragraphs, an optional list, and an
 * optional comparison table. Keeps articles consistent and CMS-portable.
 */
export default function ArticleBody({ lead, sections }) {
  return (
    <div className="article">
      {lead ? (
        <p className="mb-10 border-l-2 border-accent pl-5 text-[1.2rem] leading-relaxed text-text">
          {lead}
        </p>
      ) : null}

      {sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)]">{section.heading}</h2>
          <span className="gold-rule mt-3" aria-hidden="true" />

          {section.paras?.map((p, i) => (
            <p key={i} className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              {p}
            </p>
          ))}

          {section.bullets?.length ? (
            section.ordered ? (
              <ol className="mt-5 space-y-3">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <Icon
                      name="check"
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )
          ) : null}

          {section.table ? (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line">
                    {section.table.headers.map((h, i) => (
                      <th
                        key={i}
                        scope="col"
                        className={`px-4 py-3 font-semibold ${
                          i === 0 ? "text-muted" : "text-primary"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-line/60">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 ${
                            ci === 0
                              ? "font-medium text-text"
                              : "text-muted"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
