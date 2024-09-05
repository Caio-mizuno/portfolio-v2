import experiences from "@/components/Utils/Experiences";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Experiences = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experiences.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experiences.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
          {experiences.items.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:scale-[105%] hover:shadow-xl bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-2xl max-w-[300px] min-h-[90px] text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  {/* {dot} */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.company}</p>
                </div>
                <div className="flex flex-col gap-2 w-90">
                  {" "}
                  {item.projects.map((project, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full text-left text-pretty px-2 py-1 rounded-md text-[12px] ml-3"
                      >
                        <h2 className="pt-2 ml-3 text-accent">
                          {project.title} -
                          <span className="ml-4 text-white/70">
                            {project.description}
                          </span>
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
export default Experiences;
