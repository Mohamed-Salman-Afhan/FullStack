import EnergyCardProduction from "./EnergyCardProduction";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Tue", date: "Aug 19", production: 29.5, hasAnomally: false },
    { day: "Wed", date: "Aug 20", production: 1.2, hasAnomally: true },
    { day: "Thu", date: "Aug 21", production: 28.4, hasAnomally: false },
    { day: "Fri", date: "Aug 22", production: 35.0, hasAnomally: false },
    { day: "Sat", date: "Aug 23", production: 33.8, hasAnomally: false },
    { day: "Sun", date: "Aug 24", production: 30.6, hasAnomally: false },
    { day: "Mon", date: "Aug 18", production: 34.1, hasAnomally: false },
  ];

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
      <div className="grid grid-cols-7 gap-4">
        {energyProductionData.map((el) => {
          return (
            <EnergyCardProduction
              key={el.date}
              day={el.day}
              date={el.date}
              production={el.production}
              hasAnomally={el.hasAnomally}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SolarEnergyProduction;
