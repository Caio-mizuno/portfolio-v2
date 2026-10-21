import skills from "@/components/Utils/Skills";
import Section from "./Section";

const Skills = () => {
  return (
    <Section title={skills.title} description={skills.description}>
      <ul className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
        {skills.items.map((item, index) => {
          return (
            <li
              key={index}
              className="group bg-[#232329] rounded-xl py-6 px-3 flex flex-col items-center justify-center gap-3 hover:bg-[#2a2a31] transition-colors duration-300"
            >
              <span className="text-4xl xl:text-5xl group-hover:text-accent transition-colors duration-300 filter-shadow">
                {item.icon}
              </span>
              <span className="text-xs text-white/60 text-center">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Skills;
