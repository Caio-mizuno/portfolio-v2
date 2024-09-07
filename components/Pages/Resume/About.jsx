import about from "@/components/Utils/About";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const About = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {about.info.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-center items-center xl:justify-start gap-4"
              >
                <span className="text-accent text-3xl">
                  {item.icon??item.fieldName}
                </span>
                  <span className="text-xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
export default About;
