import experiences from "@/components/Utils/Experiences";
import { cn } from "@/lib/utils";
import Section, { cardStyles } from "./Section";

const Experiences = () => {
  return (
    <Section title={experiences.title} description={experiences.description}>
      <ol className="relative flex flex-col gap-6 border-l border-white/10 ml-1.5">
        {experiences.items.map((item, index) => {
          return (
            <li key={index} className="relative pl-6 xl:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-[38px] xl:top-[44px] w-3 h-3 rounded-full bg-accent ring-4 ring-primary"
              ></span>
              <article className={cn(cardStyles, "gap-5 xl:p-8")}>
                <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl xl:text-2xl font-bold leading-tight">
                      {item.position}
                    </h4>
                    <p className="text-secondary-light">{item.company}</p>
                  </div>
                  <span className="self-start shrink-0 px-3 py-1 rounded-full bg-primary text-accent text-xs tabular-nums">
                    {item.duration}
                  </span>
                </header>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.projects.map((project, projectIndex) => {
                    return (
                      <li
                        key={projectIndex}
                        className="bg-primary rounded-lg px-4 py-3 flex flex-col gap-1"
                      >
                        <span className="text-sm font-semibold text-white">
                          {project.title}
                        </span>
                        <span className="text-sm text-white/60 leading-snug">
                          {project.description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
export default Experiences;
