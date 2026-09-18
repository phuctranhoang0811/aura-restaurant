import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[280px] w-full flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal" />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
