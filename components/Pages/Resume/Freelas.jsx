import freelas from "@/components/Utils/Freelas";
import Section, { cardStyles } from "./Section";

const Freelas = () => {
  return (
    <Section title={freelas.title} description={freelas.description}>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {freelas.items.map((item, index) => {
          return (
            <li key={index} className={cardStyles}>
              <span className="text-accent text-xs tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-xl font-bold leading-tight">
                {item.project}
              </h4>
              <p className="text-white/60 text-sm">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Freelas;
