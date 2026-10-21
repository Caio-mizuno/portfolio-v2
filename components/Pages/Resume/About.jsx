import about from "@/components/Utils/About";
import { cn } from "@/lib/utils";
import Section, { cardStyles } from "./Section";

const About = () => {
  return (
    <Section title={about.title} description={about.description}>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className={cn(cardStyles, "flex-row items-center gap-4")}
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-primary flex justify-center items-center text-accent text-xl">
                {item.icon ?? item.fieldName}
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-white/60 text-xs">{item.fieldName}</span>
                <span className="truncate">{item.fieldValue}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default About;
