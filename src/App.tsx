import Column from "./components/Column";

function App() {
  const data = [
    {
      title: "SEDANS",
      body: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      icon: "icon-sedans",
      color: "orange",
    },
    {
      title: "SUVS",
      body: "Take and SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      icon: "icon-suvs",
      color: "cyan",
    },
    {
      title: "LUXURY",
      body: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      icon: "icon-luxury",
      color: "dark-cyan",
    },
  ];
  return (
    <>
      <div className="bg-[--light-gray] w-full min-h-screen place-items-center grid  ">
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-[920px] min-h-[500px] rounded-[10px] overflow-hidden">
          {data.map((column) => (
            <Column key={column.title} column={column} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
