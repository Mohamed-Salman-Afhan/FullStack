import EnergyProductionCards from "./EnergyProductionCards";
import React, { useState } from "react";
import Tab from "./Tab";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Tue", date: "Aug 19", production: 29.5, hasAnomaly: false },
    { day: "Wed", date: "Aug 20", production: 1.2, hasAnomaly: true },
    { day: "Thu", date: "Aug 21", production: 28.4, hasAnomaly: false },
    { day: "Fri", date: "Aug 22", production: 3.0, hasAnomaly: true },
    { day: "Sat", date: "Aug 23", production: 33.8, hasAnomaly: false },
    { day: "Sun", date: "Aug 24", production: 30.6, hasAnomaly: false },
    { day: "Mon", date: "Aug 18", production: 34.1, hasAnomaly: false },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];

  const handleTabClick = (value) => {
    setSelectedTab(value);
  };

  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const filteredEnergyProductionData = energyProductionData.filter((el) => {
    if (selectedTab === "all") {
      return true;
    } else if (selectedTab === "anomaly") {
      return el.hasAnomaly;
    }
  });

  return (
    <section className="px-6 py-6 font[Inter]">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Solar Energy Production
        </h2>
        <p className="text-gray-600 text-base">
          Daily energy output for the past 7 days
        </p>
      </div>
      <div className="mt-4 flex items-center gap-x-4">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.value}
              tab={tab}
              selectedTab={selectedTab}
              onClick={handleTabClick}
            >
              {tab.label}
            </Tab>
          );
        })}
      </div>
     
       <EnergyProductionCards energyProductionData={filteredEnergyProductionData}/>
    
    </section>
  );
};

export default SolarEnergyProduction;
