import {
  User,
  MessageSquare,
  Bell,
  BookmarkIcon,
  Contact,
  HelpCircle,
  Info,
  Home,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropdownComp";
import "./DropMenu.css";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  badge,
  className,
}) => (
  <DropdownMenuItem className={`dropdown-item ${className || ""}`}>
    <span className="icon">{icon}</span>
    <span>{label}</span>
    {badge && <span className="dropdown-item-badge">{badge}</span>}
  </DropdownMenuItem>
);

const Menu: React.FC = () => {
  const menuItems: MenuItemProps[] = [
    { icon: <MessageSquare />, label: "Messages", badge: "2 Unread" },
    { icon: <Bell />, label: "Notification" },
    { icon: <BookmarkIcon />, label: "Saved Lists" },
  ];

  const secondaryMenuItems: MenuItemProps[] = [
    { icon: <Contact />, label: "Contact Us" },
    { icon: <Info />, label: "About Us" },
    { icon: <Home />, label: "Become a Host" },
    { icon: <HelpCircle />, label: "Help Centre" },
  ];

  return (
    <div className="dropdown-container">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button type="button" className="dropdown-trigger">
            <div className="hamburger">
              <div className="hamburger-lines">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
              <User className="user-icon" />
            </div>
            <span className="notification-badge">2</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dropdown-content">
          <DropdownMenuLabel className="dropdown-label">
            My Profile
          </DropdownMenuLabel>
          <DropdownMenuGroup className="dropdown-group">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="dropdown-separator" />
          <DropdownMenuGroup className="dropdown-group">
            {secondaryMenuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="dropdown-separator" />
          <MenuItem icon={<LogOut />} label="Log out" className="danger" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
