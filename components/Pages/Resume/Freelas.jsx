import freelas from "@/components/Utils/Freelas";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Freelas = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{freelas.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {freelas.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
          {freelas.items.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:scale-[105%] hover:shadow-xl bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <h3 className="text-2xl max-w-[300px] min-h-[90px] text-center lg:text-left text-accent">
                  {item.project}
                </h3>
                <div className="flex items-center gap-3">
                  {/* {dot} */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
export default Freelas;
