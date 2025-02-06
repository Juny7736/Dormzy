import { useState } from "react";
import "./NavigationMenu.css";

interface NavItem {
  name: string;
  href: string;
}

const App = () => {
  const [activeItem, setActiveItem] = useState("Houses");

  const navItems: NavItem[] = [
    { name: "Home", href: "#" },
    { name: "Houses", href: "#" },
    { name: "Explore", href: "#" },
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a
              href={item.href}
              className={`nav-link ${activeItem === item.name ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.name);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
