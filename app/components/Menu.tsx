import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentActiveMenu } from "../menuSlice";
import { AnimatePresence, motion } from "framer-motion";

interface SideBar {
  isOpen: boolean;
  toggle: ()=> void;
}

export const Menu: React.FC<SideBar> = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  const activeMenuItem = useSelector((state: any) => state.menu.currentActiveMenu);

  const menus = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const handleMenuItemClick = (label: string) => {
    dispatch(setCurrentActiveMenu(label));
  };

  return (
    <nav
      className={`z-[90] pt-10 menu ${
        isDarkMode ? "bg-[#1F1F1F]" : "bg-[#BFDBFE]"
      } flex flex-col items-center transform translate-x-full`}
    >
      {menus.map((menuItem, index) => (
        isOpen ? (
          <ul key={index} className="flex flex-col gap-10 p-4">
            <Link href={menuItem.href} onClick={toggle}>
              <li
                className={`font-bold w-fit text-lg cursor-pointer hover:text-highlight pb-2 border-b-2 border-transparent transition-colors ${isDarkMode ? "text-alternative-white" : "text-dark"
                  } ${activeMenuItem === menuItem.label ? "border-highlight" : ""}`}
                onClick={() =>  handleMenuItemClick(menuItem.label)}
              >
                {menuItem.label}
                <AnimatePresence>
                  {activeMenuItem === menuItem.label && (
                    <motion.div
                      key={`motion-${menuItem.label}`} // Key to ensure proper animation
                      className="absolute bottom-0 left-0 w-full h-1 bg-highlight"
                      initial={{ width: 0 }} // Initial width is 0
                      animate={{ width: "100%" }} // Change width to full when active
                      exit={{ width: 0 }} // Animate width from 100% to 0 when exiting
                      transition={{
                        type: "ease",
                        duration: 0.1
                      }}
                    />
                  )}
                </AnimatePresence>
              </li>
            </Link>
          </ul>
        ) : (
          ""
        )
      ))}
    </nav>
  );
};
