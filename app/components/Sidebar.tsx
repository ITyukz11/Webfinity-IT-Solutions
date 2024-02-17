import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface SidebarProps {
  sidebarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSideBarOpen }) => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  const menus = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#projects", label: "Projects" }
  ];

  const sidebarVariants = {
    hidden: {
        x: '100%',
        opacity: 0
    },
    visible: {
    x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    // Add overflow hidden to body when sidebar is open
    if (sidebarOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [sidebarOpen]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate={sidebarOpen ? "visible" : "hidden"}
        variants={sidebarVariants}
        className={`fixed top-0 right-0 h-full 
        ${sidebarOpen ? "w-64" : ""} 
        ${isDarkMode? ' bg-sidebar-dark':'bg-sidebar-light'}
        pt-10 bg-sidebar z-[60]`}
      >
        <div className="flex flex-col items-center gap-3">
          {menus.map((menuItem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={menuItem.href}>
                <label
                  className={`${
                    isDarkMode ? "text-alternative-white" : "text-dark"
                  } font-mono font-bold text-lg cursor-pointer hover:text-highlight pb-2 border-b-2 border-transparent hover:border-highlight transition-colors`}
                >
                  {menuItem.label}
                </label>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Blur effect for the body */}
      {sidebarOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 backdrop-filter backdrop-blur-lg z-50" onClick={()=> setSideBarOpen(false)}/>
      )}
    </>
  );
};

export default Sidebar;
