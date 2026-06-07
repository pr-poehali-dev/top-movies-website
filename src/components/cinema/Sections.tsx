import Icon from "@/components/ui/icon";
import { FilmCard, FilmStrip } from "./FilmCard";
import { FILMS, SERIES, GENRES, TRAILERS, FilmItem, TrailerItem } from "./data";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  scrollToSection: (id: string) => void;
}

export function HeroSection({ searchQuery, setSearchQuery, scrollToSection }: HeroSectionProps) {
  return (
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
  );
}

interface RatingSectionsProps {
  filteredFilms: FilmItem[];
  filteredSeries: FilmItem[];
}

export function RatingSections({ filteredFilms, filteredSeries }: RatingSectionsProps) {
  return (
    <>
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
    </>
  );
}

interface TrailersSectionProps {
  trailerFilter: string;
  setTrailerFilter: (f: string) => void;
  activeTrailer: TrailerItem | null;
  setActiveTrailer: (t: TrailerItem | null) => void;
}

export function TrailersSection({ trailerFilter, setTrailerFilter, activeTrailer, setActiveTrailer }: TrailersSectionProps) {
  const filters = ["2025–2026", "Все", "Фильм", "Сериал"];

  const filtered = TRAILERS.filter(t => {
    if (trailerFilter === "Все") return true;
    if (trailerFilter === "2025–2026") return t.year >= 2025;
    return t.type === trailerFilter;
  });

  return (
    <>
      <FilmStrip />

      <section id="trailers" style={{ padding: "96px 16px", background: "rgba(0,0,0,0.5)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>Смотреть</p>
              <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 5vw, 52px)", color: "#fff" }}>
                <span style={{ color: "#D4AF37" }}>Трейлеры</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setTrailerFilter(filter)}
                  style={{
                    padding: "8px 18px", borderRadius: "8px", fontSize: "13px", cursor: "pointer", transition: "all 0.2s", border: "none",
                    background: trailerFilter === filter
                      ? (filter === "2025–2026" ? "#D4AF37" : "#D4AF37")
                      : (filter === "2025–2026" ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.06)"),
                    color: trailerFilter === filter ? "#000" : (filter === "2025–2026" ? "#D4AF37" : "rgba(255,255,255,0.6)"),
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: trailerFilter === filter ? "600" : "400",
                    outline: filter === "2025–2026" && trailerFilter !== filter ? "1px solid rgba(212,175,55,0.3)" : "none",
                  }}
                >
                  {filter === "2025–2026" ? "🆕 2025–2026" : filter}
                </button>
              ))}
            </div>
          </div>

          {trailerFilter === "2025–2026" && (
            <div className="animate-fade-in" style={{ marginBottom: "32px", padding: "16px 20px", borderRadius: "12px", background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", gap: "12px" }}>
              <Icon name="Sparkles" size={16} style={{ color: "#D4AF37", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.5 }}>
                Официальные трейлеры самых ожидаемых фильмов 2025–2026 года с YouTube
              </p>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {filtered.map((trailer, i) => (
              <div
                key={trailer.id}
                className="animate-fade-in"
                style={{
                  animationDelay: `${i * 0.08}s`, cursor: "pointer", borderRadius: "14px", overflow: "hidden",
                  background: "#0f0f0f",
                  border: trailer.isNew ? "1px solid rgba(212,175,55,0.25)" : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.3s",
                  boxShadow: trailer.isNew ? "0 0 20px rgba(212,175,55,0.05)" : "none",
                }}
                onClick={() => setActiveTrailer(trailer)}
              >
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={trailer.image}
                    alt={trailer.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(212,175,55,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(212,175,55,0.15), 0 0 40px rgba(212,175,55,0.3)", transition: "all 0.2s" }}>
                      <Icon name="Play" size={22} style={{ color: "#000", marginLeft: "3px" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(0,0,0,0.8)", borderRadius: "6px", padding: "3px 8px", backdropFilter: "blur(6px)" }}>
                    <span style={{ color: "#fff", fontSize: "12px", fontWeight: "600" }}>{trailer.duration}</span>
                  </div>
                  <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "6px" }}>
                    <div style={{ background: trailer.type === "Сериал" ? "rgba(41,128,185,0.9)" : "rgba(192,57,43,0.9)", borderRadius: "6px", padding: "3px 8px" }}>
                      <span style={{ color: "#fff", fontSize: "11px", fontWeight: "600" }}>{trailer.type}</span>
                    </div>
                    {trailer.isNew && (
                      <div style={{ background: "#D4AF37", borderRadius: "6px", padding: "3px 8px" }}>
                        <span style={{ color: "#000", fontSize: "11px", fontWeight: "700" }}>НОВИНКА</span>
                      </div>
                    )}
                  </div>
                </div>
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
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#000" }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeTrailer.youtubeId}?autoplay=1&rel=0`}
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={activeTrailer.title}
              />
            </div>
            <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="Info" size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{activeTrailer.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface GenresSectionProps {
  selectedGenre: string | null;
  setSelectedGenre: (g: string | null) => void;
}

export function GenresSection({ selectedGenre, setSelectedGenre }: GenresSectionProps) {
  return (
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
  );
}

export function AboutSection() {
  return (
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
  );
}

export function ContactsSection() {
  return (
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
  );
}

export function Footer() {
  return (
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
  );
}