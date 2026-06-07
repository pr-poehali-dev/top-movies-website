import { useState } from "react";
import { FILMS, SERIES, TrailerItem } from "@/components/cinema/data";
import Navbar from "@/components/cinema/Navbar";
import { FilmStrip } from "@/components/cinema/FilmCard";
import {
  HeroSection,
  RatingSections,
  TrailersSection,
  GenresSection,
  AboutSection,
  ContactsSection,
  Footer,
} from "@/components/cinema/Sections";

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
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        scrollToSection={scrollToSection}
      />

      <RatingSections
        filteredFilms={filteredFilms}
        filteredSeries={filteredSeries}
      />

      <TrailersSection
        trailerFilter={trailerFilter}
        setTrailerFilter={setTrailerFilter}
        activeTrailer={activeTrailer}
        setActiveTrailer={setActiveTrailer}
      />

      <FilmStrip />

      <GenresSection
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <AboutSection />

      <ContactsSection />

      <Footer />
    </div>
  );
}
