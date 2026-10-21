// Base visual comum às abas do currículo: mesmo cabeçalho e mesmo card,
// sempre alinhados ao topo, na ordem meta → título → subtítulo → corpo.
export const cardStyles =
  "spotlight bg-[#232329] rounded-xl p-6 flex flex-col gap-3 text-left transition-colors duration-300";

const Section = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <div className="flex flex-col gap-4 text-center xl:text-left">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Section;
