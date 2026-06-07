import { useState } from "react";
import Icon from "@/components/ui/icon";
import { FilmItem } from "./data";

export function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  const half = rating / 2 - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < full ? "#D4AF37" : i === full && half ? "#D4AF3799" : "#ffffff22", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

export function UserRating({ itemId }: { itemId: number }) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1 mt-2 flex-wrap">
      <span className="text-xs w-full mb-1" style={{ color: "#ffffff66" }}>Ваша оценка:</span>
      {Array.from({ length: 10 }).map((_, i) => (
        <button
          key={i}
          onClick={(e) => { e.stopPropagation(); setSelected(i + 1); }}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(0)}
          style={{
            width: "22px", height: "22px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold",
            background: i < (hovered || selected) ? "#D4AF37" : "rgba(255,255,255,0.08)",
            color: i < (hovered || selected) ? "#000" : "rgba(255,255,255,0.4)",
            border: "none", cursor: "pointer", transition: "all 0.15s"
          }}
        >
          {i + 1}
        </button>
      ))}
      {selected > 0 && <span style={{ color: "#D4AF37", fontSize: "12px", fontWeight: "bold", marginLeft: "4px" }}>{selected}/10</span>}
    </div>
  );
}

export function FilmCard({ item, isSeries = false }: { item: FilmItem; isSeries?: boolean }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-all duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="relative rounded-xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div style={{ aspectRatio: "2/3", position: "relative" }}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" style={{ display: "block" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }} />
            <div className="absolute top-3 right-3" style={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "8px", padding: "4px 8px", display: "flex", alignItems: "center", gap: "4px", backdropFilter: "blur(8px)" }}>
              <span style={{ color: "#D4AF37", fontSize: "14px" }}>★</span>
              <span style={{ color: "#fff", fontWeight: "bold", fontSize: "14px", fontFamily: "Oswald, sans-serif" }}>{item.rating}</span>
            </div>
            {isSeries && item.seasons && (
              <div className="absolute top-3 left-3" style={{ background: "#D4AF37", borderRadius: "6px", padding: "3px 8px" }}>
                <span style={{ color: "#000", fontWeight: "bold", fontSize: "11px" }}>{item.seasons} сезона</span>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-1 mb-2">
              {item.tags.map(t => (
                <span key={t} style={{ fontSize: "11px", background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "2px 8px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>{t}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "20px", color: "#fff", lineHeight: 1.2 }}>{item.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{item.year}</span>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{item.duration}</span>
            </div>
            <StarRating rating={item.rating} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "2px" }}>{item.votes.toLocaleString("ru-RU")} оценок</p>
            <p style={{ color: "rgba(212,175,55,0.7)", fontSize: "11px", marginTop: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
              <Icon name="MousePointerClick" size={10} /> нажми — узнать больше
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col justify-between p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#0f0f0f", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          <div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "22px", color: "#D4AF37", marginBottom: "4px" }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "16px" }}>{item.genre} · {item.year}</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", lineHeight: 1.6 }}>{item.description}</p>
            <div style={{ marginTop: "16px", padding: "12px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>Настроение вечера</p>
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "18px", color: "#D4AF37" }}>{item.mood}</p>
            </div>
          </div>
          <div>
            <UserRating itemId={item.id} />
            <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Рейтинг критиков</p>
                <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "26px", color: "#fff" }}>{item.rating}<span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>/10</span></p>
              </div>
              <div className="text-right">
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Голосов</p>
                <p style={{ fontFamily: "Oswald, sans-serif", color: "#fff" }}>{item.votes.toLocaleString("ru-RU")}</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", textAlign: "center", marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
              <Icon name="RotateCcw" size={10} /> нажми снова, чтобы вернуться
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilmStrip() {
  const items = ["★", "◆", "▶", "★", "◆", "▶", "★", "◆", "▶", "★", "◆", "▶", "★", "◆", "▶", "★", "◆", "▶"];
  return (
    <div style={{ overflow: "hidden", padding: "4px 0", background: "#050505" }}>
      <div style={{ display: "flex", animation: "filmroll 20s linear infinite" }}>
        {[...items, ...items].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div style={{ width: "32px", height: "48px", background: "rgba(255,255,255,0.03)", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>{s}</span>
            </div>
            <div style={{ width: "4px", height: "48px", background: "#000" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
