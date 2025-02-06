import NavigationMenu from "@/NavigationMenu/NavigationMenu";
import DropMenu from "@/DropMenu/DropMenu";

function Header() {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="titleName">Dormzy</div>
        <NavigationMenu />
        <DropMenu />
      </div>
    </header>
  );
}

export default Header;
