import educations from "@/components/Utils/Educations";
import { BsArrowUpRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import Section, { cardStyles } from "./Section";

const Educations = () => {
  return (
    <Section title={educations.title} description={educations.description}>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {educations.items.map((item, index) => {
          const content = (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="text-accent text-xs tabular-nums">
                  {item.duration}
                </span>
                {item.href && (
                  <BsArrowUpRight className="text-white/40 group-hover:text-accent group-hover:-rotate-12 transition-all duration-300" />
                )}
              </div>
              <h4 className="text-lg font-bold leading-snug">{item.degree}</h4>
              <p className="text-white/60 text-sm">{item.institution}</p>
            </>
          );

          return (
            <li key={index} className="flex">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver certificado"
                  className={cn(cardStyles, "group w-full hover:bg-[#2a2a31]")}
                >
                  {content}
                </a>
              ) : (
                <div className={cn(cardStyles, "w-full")}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Educations;
