"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto overflow-hidden bg-brand-cream mt-10">
      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col lg:flex-row mx-10">
        {/* Bloc logo + carte */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center w-full lg:max-w-[45%]">
          {/* Logo */}
          <div className="flex-shrink-0 md:mb-0">
            <div
              className="relative shadow-lg overflow-hidden rounded-full"
              style={{
                width: "224px",
                height: "224px",
                borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
              }}
            >
              <Image
                src="/images/Logo.webp"
                alt="Logo de la marque Nopheïa"
                width={224}
                height={224}
                priority
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Carte info */}
          <div
            className="bg-brand-primary w-[300px] md:w-[400px] lg:w-[600px] h-[200px] mx-2 flex items-center justify-center px-6"
            style={{
              borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
            }}
          >
            <h1 className="text-brand-cream font-afrah text-lg md:text-2xl lg:text-4xl text-center">
              Découvrez le massage révolutionnaire, drainant, amincissant et
              anticellulite : Le GAD®
            </h1>
          </div>
        </div>

        {/* Vidéo massage */}
        <div
          className="lg:w-[70%] lg:max-w-2xl mx-auto mt-4 overflow-hidden shadow-lg bg-brand-dark h-[250px] md:h-[500px]"
          style={{
            borderRadius: "23% 77% 37% 63% / 40% 44% 56% 60%",
          }}
        >
          <video
            src="/video/massage.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
