import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  noir: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/0a9dabea-4e41-491e-a3bc-b70812fff605.jpg",
  fantasy: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/9b3ef848-4c4b-4407-9d43-ebc3d06c8457.jpg",
  scifi: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/9788ddaa-9de6-43f4-b0d7-6c69e72cc136.jpg",
  crime: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/48922405-756b-43e5-a1ea-04298a0f54dc.jpg",
};

const FILMS = [
  { id: 1, title: "Тень Токио", genre: "Триллер", year: 2024, rating: 9.2, votes: 14200, duration: "2ч 18м", image: IMAGES.noir, tags: ["Триллер", "Нуар"], mood: "Для размышлений", description: "Детектив распутывает цепочку загадочных исчезновений в ночном мегаполисе, балансируя между законом и совестью." },
  { id: 2, title: "Хроники Тьмы", genre: "Фэнтези", year: 2023, rating: 8.9, votes: 21500, duration: "2ч 45м", image: IMAGES.fantasy, tags: ["Фэнтези", "Эпик"], mood: "Эпическое приключение", description: "Последний страж древнего ордена отправляется в путешествие, чтобы остановить пробуждение тёмного бога." },
  { id: 3, title: "Горизонт событий", genre: "Sci-Fi", year: 2024, rating: 9.5, votes: 31000, duration: "2ч 32м", image: IMAGES.scifi, tags: ["Sci-Fi", "Драма"], mood: "Захватывает дух", description: "Экипаж межзвёздного корабля оказывается у границы чёрной дыры, где законы физики перестают работать." },
  { id: 4, title: "Пять семей", genre: "Криминал", year: 2023, rating: 8.7, votes: 9800, duration: "2ч 05м", image: IMAGES.crime, tags: ["Криминал", "Драма"], mood: "Напряжённо", description: "Война кланов в современном городе. Один молодой детектив против всей системы." },
];

const SERIES = [
  { id: 5, title: "Ночной патруль", genre: "Детектив", year: 2024, rating: 9.1, votes: 18700, duration: "45м / эп.", image: IMAGES.noir, tags: ["Детектив", "Криминал"], mood: "Держит в напряжении", seasons: 2, description: "Группа следователей работает в ночную смену, раскрывая дела, которые днём кажутся невозможными." },
  { id: 6, title: "Последний рубеж", genre: "Sci-Fi", year: 2024, rating: 8.8, votes: 24300, duration: "55м / эп.", image: IMAGES.scifi, tags: ["Sci-Fi", "Экшн"], mood: "Адреналин", seasons: 3, description: "Станция на краю галактики — последнее человеческое поселение перед бескрайней пустотой космоса." },
  { id: 7, title: "Семь грехов", genre: "Криминал", year: 2023, rating: 9.3, votes: 41200, duration: "50м / эп.", image: IMAGES.crime, tags: ["Криминал", "Психология"], mood: "Для размышлений", seasons: 4, description: "Психолог-криминалист помогает раскрывать преступления, каждое из которых — отражение человеческих пороков." },
  { id: 8, title: "Мир теней", genre: "Фэнтези", year: 2024, rating: 8.6, votes: 15600, duration: "60м / эп.", image: IMAGES.fantasy, tags: ["Фэнтези", "Мистика"], mood: "Атмосферно", seasons: 2, description: "Параллельный мир, где магия и технологии существуют бок о бок. Детектив из нашего мира попадает туда против воли." },
];

const GENRES = [
  { name: "Триллер", icon: "Eye", count: 48, color: "#c0392b" },
  { name: "Sci-Fi", icon: "Rocket", count: 35, color: "#2980b9" },
  { name: "Фэнтези", icon: "Sparkles", count: 52, color: "#8e44ad" },
  { name: "Криминал", icon: "Shield", count: 41, color: "#d35400" },
  { name: "Драма", icon: "Heart", count: 67, color: "#c0392b" },
  { name: "Комедия", icon: "Smile", count: 29, color: "#27ae60" },
  { name: "Ужасы", icon: "Ghost", count: 23, color: "#7f8c8d" },
  { name: "Документальный", icon: "Camera", count: 18, color: "#f39c12" },
];

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "films", label: "Топ фильмов" },
  { id: "series", label: "Топ сериалов" },
  { id: "trailers", label: "Трейлеры" },
  { id: "genres", label: "По жанрам" },
  { id: "about", label: "О проекте" },
  { id: "contacts", label: "Контакты" },
];

const TRAILERS = [
  {
    id: 1, title: "Тень Токио", genre: "Триллер", year: 2024,
    youtubeId: "YoHD9XEInc0",
    image: IMAGES.noir, duration: "2:34", type: "Фильм",
    description: "Официальный трейлер. Детектив против ночного мегаполиса.",
  },
  {
    id: 2, title: "Хроники Тьмы", genre: "Фэнтези", year: 2023,
    youtubeId: "sGbxmsDFVnE",
    image: IMAGES.fantasy, duration: "3:12", type: "Фильм",
    description: "Эпический трейлер. Последний страж против тёмного бога.",
  },
  {
    id: 3, title: "Горизонт событий", genre: "Sci-Fi", year: 2024,
    youtubeId: "2LqzF5WauAw",
    image: IMAGES.scifi, duration: "2:48", type: "Фильм",
    description: "Тизер-трейлер. На краю чёрной дыры.",
  },
  {
    id: 4, title: "Пять семей", genre: "Криминал", year: 2023,
    youtubeId: "ioR5np1fmEc",
    image: IMAGES.crime, duration: "2:21", type: "Фильм",
    description: "Финальный трейлер. Война кланов.",
  },
  {
    id: 5, title: "Ночной патруль", genre: "Детектив", year: 2024,
    youtubeId: "YoHD9XEInc0",
    image: IMAGES.noir, duration: "1:55", type: "Сериал",
    description: "Трейлер 2 сезона. Ночные тайны.",
  },
  {
    id: 6, title: "Последний рубеж", genre: "Sci-Fi", year: 2024,
    youtubeId: "2LqzF5WauAw",
    image: IMAGES.scifi, duration: "2:07", type: "Сериал",
    description: "Трейлер 3 сезона. Конец известной вселенной.",
  },
];

function StarRating({ rating }: { rating: number }) {
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

function UserRating({ itemId }: { itemId: number }) {
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

interface FilmItem {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  votes: number;
  duration: string;
  image: string;
  tags: string[];
  mood: string;
  description: string;
  seasons?: number;
}

function FilmCard({ item, isSeries = false }: { item: FilmItem; isSeries?: boolean }) {
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

function FilmStrip() {
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

interface TrailerItem {
  id: number;
  title: string;
  genre: string;
  year: number;
  youtubeId: string;
  image: string;
  duration: string;
  type: string;
  description: string;
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [activeTrailer, setActiveTrailer] = useState<TrailerItem | null>(null);
  const [trailerFilter, setTrailerFilter] = useState("Все");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredFilms = FILMS.filter(f =>
    f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredSeries = SERIES.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'Golos Text', sans-serif" }}>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <button onClick={() => scrollToSection("home")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ width: "32px", height: "32px", background: "#D4AF37", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Film" size={16} style={{ color: "#000" }} />
            </div>
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "22px", color: "#fff", letterSpacing: "4px" }}>КиноВечер</span>
          </button>

          <div className="hidden md:flex" style={{ gap: "4px" }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontFamily: "'Golos Text', sans-serif", cursor: "pointer", transition: "all 0.2s", border: "none",
                  background: activeSection === item.id ? "rgba(212,175,55,0.15)" : "transparent",
                  color: activeSection === item.id ? "#D4AF37" : "rgba(255,255,255,0.6)",
                  outline: activeSection === item.id ? "1px solid rgba(212,175,55,0.3)" : "none",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "rgba(0,0,0,0.97)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ padding: "12px 16px", borderRadius: "8px", textAlign: "left", fontSize: "14px", background: activeSection === item.id ? "rgba(212,175,55,0.15)" : "transparent", color: activeSection === item.id ? "#D4AF37" : "rgba(255,255,255,0.7)", border: "none", cursor: "pointer" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "64px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #000 0%, #0a0800 50%, #000 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.06) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.01'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div style={{ position: "absolute", top: "64px", left: 0, right: 0 }}>
          <FilmStrip />
        </div>

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
          <div className="animate-fade-in" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "100px", padding: "8px 18px", marginBottom: "32px" }}>
            <Icon name="Sparkles" size={14} style={{ color: "#D4AF37" }} />
            <span style={{ color: "#D4AF37", fontSize: "13px" }}>Лучшее кино на этот вечер</span>
          </div>

          <h1 className="animate-fade-in" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(56px, 10vw, 100px)", color: "#fff", lineHeight: 1, marginBottom: "20px", animationDelay: "0.1s" }}>
            Кино<span style={{ color: "#D4AF37" }}>Вечер</span>
          </h1>
          <p className="animate-fade-in" style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(15px, 2vw, 20px)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7, animationDelay: "0.2s" }}>
            Откройте лучшие фильмы и сериалы с системой оценок и рейтингов. Найдите идеальное кино под любое настроение.
          </p>

          <div className="animate-fade-in" style={{ position: "relative", maxWidth: "520px", margin: "0 auto 48px", animationDelay: "0.3s" }}>
            <Icon name="Search" size={18} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }} />
            <input
              type="text"
              placeholder="Поиск фильмов и сериалов..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", paddingLeft: "48px", paddingRight: "16px", paddingTop: "16px", paddingBottom: "16px", color: "#fff", fontSize: "15px", outline: "none", fontFamily: "'Golos Text', sans-serif", boxSizing: "border-box" }}
            />
          </div>

          <div className="animate-fade-in" style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 64px)", animationDelay: "0.4s" }}>
            {[{ n: "200+", l: "Фильмов" }, { n: "150+", l: "Сериалов" }, { n: "50K+", l: "Оценок" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#D4AF37" }}>{s.n}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{s.l}</p>
              </div>
            ))}
          </div>

          <button className="animate-fade-in" onClick={() => scrollToSection("films")} style={{ marginTop: "48px", background: "none", border: "none", cursor: "pointer", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "4px", animationDelay: "0.5s" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>Смотреть рейтинги</span>
            <Icon name="ChevronDown" size={20} style={{ color: "rgba(255,255,255,0.3)", animation: "bounce 2s infinite" }} />
          </button>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <FilmStrip />
        </div>
      </section>

      {/* TOP FILMS */}
      <section id="films" style={{ padding: "96px 16px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Рейтинг</p>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>Топ <span style={{ color: "#D4AF37" }}>Фильмов</span></h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            <Icon name="Info" size={14} />
            <span>Нажми на карточку, чтобы оценить</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px" }}>
          {filteredFilms.map((film, i) => (
            <div key={film.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "40px", color: "rgba(255,255,255,0.08)", lineHeight: 1, marginBottom: "10px" }}>0{i + 1}</div>
              <FilmCard item={film} />
            </div>
          ))}
        </div>
      </section>

      {/* FILMSTRIP DIVIDER */}
      <FilmStrip />

      {/* TOP SERIES */}
      <section id="series" style={{ padding: "96px 16px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Рейтинг</p>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>Топ <span style={{ color: "#D4AF37" }}>Сериалов</span></h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px" }}>
            <Icon name="Tv" size={14} style={{ color: "#D4AF37" }} />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Сезон 2024</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px" }}>
          {filteredSeries.map((s, i) => (
            <div key={s.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "40px", color: "rgba(255,255,255,0.08)", lineHeight: 1, marginBottom: "10px" }}>0{i + 1}</div>
              <FilmCard item={s} isSeries />
            </div>
          ))}
        </div>
      </section>

      <FilmStrip />

      {/* TRAILERS */}
      <section id="trailers" style={{ padding: "96px 16px", background: "rgba(0,0,0,0.5)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Смотреть</p>
              <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>
                <span style={{ color: "#D4AF37" }}>Трейлеры</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Все", "Фильм", "Сериал"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setTrailerFilter(filter)}
                  style={{
                    padding: "8px 18px", borderRadius: "8px", fontSize: "13px", cursor: "pointer", transition: "all 0.2s", border: "none",
                    background: trailerFilter === filter ? "#D4AF37" : "rgba(255,255,255,0.06)",
                    color: trailerFilter === filter ? "#000" : "rgba(255,255,255,0.6)",
                    fontFamily: "'Golos Text', sans-serif", fontWeight: trailerFilter === filter ? "600" : "400",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {TRAILERS.filter(t => trailerFilter === "Все" || t.type === trailerFilter).map((trailer, i) => (
              <div
                key={trailer.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s`, cursor: "pointer", borderRadius: "14px", overflow: "hidden", background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s" }}
                onClick={() => setActiveTrailer(trailer)}
              >
                {/* Thumbnail */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={trailer.image}
                    alt={trailer.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Dark overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                  {/* Play button */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: "rgba(212,175,55,0.95)", display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 0 8px rgba(212,175,55,0.15), 0 0 40px rgba(212,175,55,0.3)",
                      transition: "all 0.2s",
                    }}>
                      <Icon name="Play" size={22} style={{ color: "#000", marginLeft: "3px" }} />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(0,0,0,0.8)", borderRadius: "6px", padding: "3px 8px", backdropFilter: "blur(6px)" }}>
                    <span style={{ color: "#fff", fontSize: "12px", fontWeight: "600" }}>{trailer.duration}</span>
                  </div>
                  {/* Type badge */}
                  <div style={{ position: "absolute", top: "10px", left: "10px", background: trailer.type === "Сериал" ? "rgba(41,128,185,0.9)" : "rgba(192,57,43,0.9)", borderRadius: "6px", padding: "3px 8px" }}>
                    <span style={{ color: "#fff", fontSize: "11px", fontWeight: "600" }}>{trailer.type}</span>
                  </div>
                </div>
                {/* Info */}
                <div style={{ padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <div>
                      <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "18px", color: "#fff", marginBottom: "4px" }}>{trailer.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{trailer.genre} · {trailer.year}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "6px", padding: "4px 8px", flexShrink: 0 }}>
                      <Icon name="Play" size={10} style={{ color: "#D4AF37" }} />
                      <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "600" }}>HD</span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "8px", lineHeight: 1.5 }}>{trailer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAILER MODAL */}
      {activeTrailer && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", backdropFilter: "blur(10px)" }}
          onClick={() => setActiveTrailer(null)}
        >
          <div
            className="animate-scale-in"
            style={{ width: "100%", maxWidth: "900px", borderRadius: "18px", overflow: "hidden", background: "#0d0d0d", border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 0 80px rgba(212,175,55,0.1)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div>
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "20px", color: "#D4AF37" }}>{activeTrailer.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{activeTrailer.genre} · {activeTrailer.year} · {activeTrailer.type}</p>
              </div>
              <button
                onClick={() => setActiveTrailer(null)}
                style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.7)", transition: "all 0.2s" }}
              >
                <Icon name="X" size={18} />
              </button>
            </div>
            {/* Video embed */}
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#000" }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeTrailer.youtubeId}?autoplay=1&rel=0`}
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={activeTrailer.title}
              />
            </div>
            {/* Modal footer */}
            <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="Info" size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{activeTrailer.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* GENRES */}
      <section id="genres" style={{ padding: "96px 16px", background: "rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Каталог</p>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>По <span style={{ color: "#D4AF37" }}>жанрам</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {GENRES.map((g, i) => (
              <button
                key={g.name}
                onClick={() => setSelectedGenre(selectedGenre === g.name ? null : g.name)}
                className="animate-fade-in"
                style={{
                  padding: "24px", borderRadius: "14px", textAlign: "left", cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden",
                  background: selectedGenre === g.name ? "rgba(212,175,55,0.1)" : "rgba(255,255,255,0.03)",
                  border: selectedGenre === g.name ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  animationDelay: `${i * 0.05}s`
                }}
              >
                <Icon name={g.icon} size={28} style={{ color: g.color, marginBottom: "12px", display: "block" }} />
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "20px", color: "#fff", marginBottom: "4px" }}>{g.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>{g.count} тайтлов</p>
                {selectedGenre === g.name && (
                  <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                    <Icon name="Check" size={14} style={{ color: "#D4AF37" }} />
                  </div>
                )}
              </button>
            ))}
          </div>
          {selectedGenre && (
            <div className="animate-fade-in" style={{ marginTop: "24px", padding: "24px", borderRadius: "14px", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)", textAlign: "center" }}>
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "24px", color: "#D4AF37", marginBottom: "8px" }}>Жанр: {selectedGenre}</p>
              <p style={{ color: "rgba(255,255,255,0.4)" }}>Полный каталог жанра будет доступен после наполнения базы фильмов</p>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "96px 16px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>О нас</p>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>О <span style={{ color: "#D4AF37" }}>проекте</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="about-grid">
            {[
              { icon: "Film", title: "Что такое КиноВечер?", text: "КиноВечер — это кино-портал с тщательно отобранными фильмами и сериалами, идеальными для просмотра вечером. Мы собираем лучшее из мирового кинематографа.", gold: false },
              { icon: "Star", title: "Система оценок", text: "Рейтинг формируется из оценок критиков и зрителей по шкале от 1 до 10. Каждый пользователь может оставить свою оценку и влиять на общий рейтинг.", gold: false },
              { icon: "TrendingUp", title: "Актуальность", text: "Рейтинги обновляются еженедельно. Мы следим за новинками и добавляем фильмы сразу после их выхода в широкий прокат.", gold: false },
              { icon: "Users", title: "Сообщество", text: "Более 50 000 пользователей уже оценивают фильмы на нашем портале. Присоединяйтесь и влияйте на рейтинги!", gold: true },
            ].map(card => (
              <div key={card.title} style={{ padding: "24px", borderRadius: "14px", background: card.gold ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.03)", border: card.gold ? "1px solid rgba(212,175,55,0.25)" : "1px solid rgba(255,255,255,0.08)" }}>
                <Icon name={card.icon} size={24} style={{ color: "#D4AF37", marginBottom: "16px", display: "block" }} />
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "20px", color: card.gold ? "#D4AF37" : "#fff", marginBottom: "8px" }}>{card.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "96px 16px", background: "rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Связь</p>
          <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff", marginBottom: "16px" }}>Контакты</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "48px" }}>Есть вопросы или хотите предложить фильм для рейтинга? Напишите нам!</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {[
              { placeholder: "Ваше имя", type: "text" },
              { placeholder: "Email", type: "email" },
            ].map(f => (
              <input
                key={f.placeholder}
                type={f.type}
                placeholder={f.placeholder}
                style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "16px 20px", color: "#fff", fontSize: "15px", outline: "none", fontFamily: "'Golos Text', sans-serif", boxSizing: "border-box" }}
              />
            ))}
            <textarea
              rows={4}
              placeholder="Ваше сообщение..."
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "16px 20px", color: "#fff", fontSize: "15px", outline: "none", resize: "none", fontFamily: "'Golos Text', sans-serif", boxSizing: "border-box" }}
            />
            <button style={{ width: "100%", background: "#D4AF37", color: "#000", fontFamily: "Oswald, sans-serif", fontSize: "18px", padding: "16px", borderRadius: "12px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.2s", letterSpacing: "1px" }}>
              <Icon name="Send" size={18} />
              Отправить сообщение
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px" }}>
            {[
              { icon: "Mail", label: "info@kinovecherr.ru" },
              { icon: "MessageCircle", label: "Telegram" },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "14px" }}>
                <Icon name={c.icon} size={16} />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 16px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "24px", background: "#D4AF37", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Film" size={12} style={{ color: "#000" }} />
            </div>
            <span style={{ fontFamily: "Oswald, sans-serif", color: "rgba(255,255,255,0.4)", letterSpacing: "3px" }}>КиноВечер</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>© 2024 КиноВечер. Лучшее кино на каждый вечер.</p>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Конфиденциальность", "Правила"].map(l => (
              <span key={l} style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px", cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}