import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../common/Button";

interface SubMenuTabsProps {
  tabs: string[];
  setCurrentTab: Dispatch<SetStateAction<any>>;
  currentTab: string;
}

const SubMenuTabs: FC<SubMenuTabsProps> = ({
  tabs,
  setCurrentTab,
  currentTab,
}) => {
  return (
    <div className="flex items-center justify-center fold:gap-0 gap-2 md:gap-5">
      {tabs.map((tab, index) => (
        <div key={`tab-${index}`}>
          <Button
            action={() => setCurrentTab(tabs.indexOf(tab))}
            className={
              tab === currentTab
                ? "text-black-1 transition btn-plain whitespace-nowrap"
                : "text-black-2 btn-plain whitespace-nowrap"
            }
          >
            {tab}
          </Button>
        </div>
      ))}{" "}
      <div className="bg-pink-2 text-pink-1 px-2 text-xs md:text-sm font-medium">
        Save 20%
      </div>
    </div>
  );
};

export default SubMenuTabs;
