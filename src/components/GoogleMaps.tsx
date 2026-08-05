import { site } from "@/lib/site";

type GoogleMapsProps = {
  className?: string;
  heightClass?: string;
};

export default function GoogleMaps({
  className = "",
  heightClass = "h-64",
}: GoogleMapsProps) {
  return (
    <div className={`w-full overflow-hidden border border-slate-200 ${heightClass} ${className}`}>
      <iframe
        title={`Mapa — ${site.address.full}`}
        src={site.address.mapsEmbed}
        className="h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
