import skills from "@/components/Utils/Skills";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";
const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left w-full">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {skills.description}
      </p>

      <ul className="grid grid-cols-4 gap-3 w-full">
        {skills.items.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:scale-[105%] hover:shadow-xl"
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300 filter-shadow">
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Skills;
