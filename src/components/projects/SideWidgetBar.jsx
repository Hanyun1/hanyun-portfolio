import { useState, useRef, useEffect } from "react";

const SideWidgetBar = ({ onSelect }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const submenuRefs = useRef({});

  const handleSubmenuToggle = (menuId) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const handleSubmenuSelect = (submenuId) => {
    setSelectedSubmenu(submenuId);
    onSelect(submenuId);
  };

  useEffect(() => {
    Object.keys(submenuRefs.current).forEach((menuId) => {
      const submenu = submenuRefs.current[menuId];
      if (openSubmenus[menuId]) {
        submenu.style.maxHeight = `${submenu.scrollHeight}px`;
      } else {
        submenu.style.maxHeight = "0px";
      }
    });
  }, [openSubmenus]);

  return (
    <aside className="w-64 h-full">
      <nav className="p-4">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => handleSubmenuToggle(menu.id)}
                className="w-full text-left py-2 px-4 flex justify-between items-center"
              >
                <span>{menu.title}</span>
                <span>{openSubmenus[menu.id] ? "-" : "+"}</span>
              </button>
              <ul
                ref={(el) => (submenuRefs.current[menu.id] = el)}
                className="pl-4 overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{ maxHeight: "0px" }}
              >
                {menu.submenus.map((submenu) => (
                  <li key={submenu.id} className="relative group">
                    <button
                      onClick={() => handleSubmenuSelect(submenu.id)}
                      className={`text-left py-2 px-4 hover:bg-gray-200 duration-300 ${
                        selectedSubmenu === submenu.id ? "text-bright border-l-4 border-bright" : ""
                      }`}
                    >
                      {submenu.title}
                      {/* <span
                        className={`underline-animation ${
                          selectedSubmenu === submenu.id
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span> */}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideWidgetBar;

const menuItems = [
  {
    id: "menu1",
    title: "Work",
    submenus: [
      { id: "content1", title: "Submenu 1-1" },
      { id: "content2", title: "Submenu 1-2" },
    ],
  },
  {
    id: "menu2",
    title: "Others",
    submenus: [
      { id: "content3", title: "Submenu 2-1" },
      { id: "content4", title: "Submenu 2-2" },
    ],
  },
];
