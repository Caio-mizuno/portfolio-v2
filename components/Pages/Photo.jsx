import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="page-enter [--enter-delay:0.5s]">
        {/* image */}
        <div className="page-enter [--enter-delay:0.6s] w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/profile2.png"
            alt="Foto de Caio Mizuno"
            sizes="(max-width: 1200px) 298px, 498px"
            quality={90}
            priority
            fill
            className="object-contain"
          />
        </div>
        {/* circle */}
        <svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="253"
            cy="253"
            r="250"
            stroke="#da9d00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="photo-ring"
          />
          <circle
            cx="253"
            cy="253"
            r="240"
            stroke="#da9d00"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="photo-ring"
          />
          <circle
            cx="253"
            cy="253"
            r="240"
            stroke="#da9d00"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="photo-ring photo-ring-alt"
          />
        </svg>
      </div>
    </div>
  );
};

export default Photo;
