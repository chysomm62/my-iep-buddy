"use client";

import { useState } from "react";
import { BillingSubMenuTabs, BillingTabEnum } from "./tabs";
import SubMenuTabs from "./SubMenuTabs";
import Billings from "./Billings";
import { billings } from "@/lib/variables/billings";

const GetStarted = () => {
  const [currentTab, setCurrentTab] = useState<BillingTabEnum>(
    BillingTabEnum.MONTHLYBILLING
  );

  const getTabs = () => {
    switch (currentTab) {
      case BillingTabEnum.MONTHLYBILLING:
        return <Billings billingInfo={new Array(billings[0])} />;
      case BillingTabEnum.YEARBILLING:
        return <Billings billingInfo={new Array(billings[1])} />;
      default:
        break;
    }
  };

  return (
    <section className="px-5 py-8 md:py-20 text-black-1 max-w-screen-xl mx-auto  bg-grey-1">
      <div className="header-border"></div>
      <h2 className="uppercase text-center">
        Ready To Get <span className="text-blue-1">Started?</span>
      </h2>
      <SubMenuTabs
        tabs={BillingSubMenuTabs}
        currentTab={BillingSubMenuTabs[currentTab]}
        setCurrentTab={setCurrentTab}
      />
      {getTabs()}
    </section>
  );
};

export default GetStarted;
