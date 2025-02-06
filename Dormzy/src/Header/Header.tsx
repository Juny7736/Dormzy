import DropMenu from "@/DropMenu/DropMenu";
function Header() {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="titleName">Dormzy</div>
        <nav>
          <ul>
            <li>
              <a href="#home">Main</a>
            </li>
            <li>
              <a href="#about">Houses</a>
            </li>
            <li>
              <a href="#services">Explore</a>
            </li>
          </ul>
        </nav>
        <DropMenu />
      </div>
    </header>
  );
}

export default Header;
