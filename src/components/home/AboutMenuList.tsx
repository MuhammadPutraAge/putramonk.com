import { ABOUT_MENU_LIST, AboutMenuListType, MenuTitle } from "@/constant";

interface AboutMenuListProps {
  activeTitle: MenuTitle;
  onClick: (menuData: AboutMenuListType) => void;
}

export default function AboutMenuList({ activeTitle, onClick }: AboutMenuListProps) {
  return (
    <div className="grid grid-cols-3 xxs:grid-cols-2 gap-20 xxs:gap-16 mb-24">
      {ABOUT_MENU_LIST.map((menuItem) => (
        <div
          key={menuItem.title}
          className={`${
            activeTitle === menuItem.title ? "gradient-bg" : "bg-light"
          } py-12 rounded-4 flex justify-center items-center cursor-pointer`}
          onClick={() => onClick(menuItem)}
        >
          <p
            className={`${
              activeTitle === menuItem.title ? "text-white" : "text-purple"
            } text-16 xs:text-12 font-semibold`}
          >
            {menuItem.title}
          </p>
        </div>
      ))}
    </div>
  );
}
