import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "./data";

interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, menuOpen, setMenuOpen, scrollToSection }: NavbarProps) {
  return (
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
  );
}
