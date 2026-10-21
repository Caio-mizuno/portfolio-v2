// Cada degrau nasce cobrindo a tela e desce até sair dela (classe
// .transition-stair em globals.css); o atraso cria o efeito de escada.
const totalSteps = 6;

const reverseIndex = (index) => {
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => {
        return (
          <div
            key={index}
            style={{ animationDelay: `${reverseIndex(index) * 0.06}s` }}
            className="h-full w-full gradient-1 relative transition-stair"
          ></div>
        );
      })}
    </>
  );
};
export default Stairs;
