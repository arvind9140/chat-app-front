import { FC, ReactNode, createContext, useContext, useState } from "react";
import { MoreVertical } from "lucide-react";
import photo from "./logo.png";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded] = useState(true);

  return (
    <aside
      className={`h-screen  ${
        expanded ? "w-full" : "w-0"
      } ml-2 mt-1 rounded-md`}
    >
      <nav
        className="h-full  flex flex-col bg-white border-r shadow-sm rounded-md ]"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex">
            <img src={photo} className="w-[40px]" alt="" />
            <span>
              <h1 className=" font-bold text-red-600 border-b-2 w-28 text-lg border-red-200">
                COLONELZ
              </h1>
              <p className=" text-xs font-semibold">BUILDING RELATIONSHIPS</p>
            </span>
          </div>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  alert,
}) => {
  const { expanded } = useContext(SidebarContext) || { expanded: true };

  return (
    <li
      className={`
        relative flex items-center py-3 px-3 my-2
     text-base rounded-md cursor-pointer
        transition-colors group font-semibold
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <span className=" font-semibold"> {icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};
export default Sidebar;
