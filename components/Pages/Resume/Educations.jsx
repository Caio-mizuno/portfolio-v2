import educations from "@/components/Utils/Educations";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { HiOutlineDownload } from "react-icons/hi";

const Educations = () => {
  const handleDownload = (item) => {
    const link = document.createElement('a');
    link.href = item.href; // URL do arquivo
    link.download = item.name || ''; // Nome do arquivo (opcional)
    link.click();
  };

  return (
    <div className="flex flex-col gap-[30px] text-left">
      <h3 className="text-4xl font-bold">{educations.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {educations.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
          {educations.items.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:scale-[105%] hover:shadow-xl bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="w-full inline-flex justify-between">
                <div className="text-accent w-full">{item.duration}</div>
                  <div
                  onClick={() => handleDownload(item)}
                  className="-rotate-90 hover:rotate-0 hover:text-accent hover:transition-all transition-transform w-[40px] h-[40px] text-4xl">
                    {item.href!=""?<HiOutlineDownload />:''}
                  </div>
                </span>
                
                <div className="flex items-center text-left gap-3 w-full">
                  {/* {dot} */}
                  <div className="w-[6px] h-[6px] rounded-full bg-accent"></div>
                  <div className="text-white/60">{item.institution}</div>
                </div>
                <h3 className="text-2xl min-h-[90px] w-full">
                  {item.degree}
                </h3>
                
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
export default Educations;
