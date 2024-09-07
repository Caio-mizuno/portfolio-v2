"use client";

import CountUp from "react-countup";

const stats = [
  { number: new Date().getFullYear() - 2021, text: "Anos de experiência" },
  { number: 9, text: "Projetos completos" },
  // nest,next,laravel,vue,uipath,mysql,oracledb,postgresql,codeigniter,powerBi,python
  { number: 13, text: "Tecnologias" },
  // front-end, back-end, automação, BI, UX/UI, arquitetura
  { number: 6, text: "Diversidade de atuações" },
  // rede social, e-commerce, dashboard, app de mobilidade, app de crédito, app de saúde, app de gestão de ponto, sistema de antecipações, app de recarga de onibus
  { number: 9, text: "Tipos de aplicações" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.lenght < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
