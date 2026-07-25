import { useState } from "react";
import {
  ChartNoAxesColumnIncreasing,
  Clock3,
  Search,
} from "lucide-react";

const ImageSearch = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <section className="relative min-h-105 overflow-hidden bg-amber-50 px-5 py-12 text-black dark:bg-gray-900 dark:text-white sm:px-8 lg:min-h-100 lg:px-10 lg:py-15">
      <div className="relative z-10 max-w-xl lg:w-1/2">
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-[55px]">
          Cook something worth remembering.
        </h1>

        <p className="mt-4 max-w-md font-sans font-light text-gray-700 dark:text-gray-300">
          Discover delicious recipes, plan your meals and create moments around
          food that matter.
        </p>

        <form onSubmit={handleSearch} className="mt-7 w-full max-w-lg">
          <div className="relative">
            <Search
              strokeWidth={1.5}
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black dark:text-white"
            />
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Find recipes by dish, ingredient or cuisine"
              className="w-full rounded-lg border border-gray-400 bg-white py-3 pl-11 pr-4 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400 dark:border-white/20 dark:bg-gray-800 dark:text-white sm:text-base"
            />
          </div>
        </form>
      </div>

      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src="https://i.pinimg.com/736x/25/c3/64/25c364439392fb24171838b84c1958e1.jpg"
          alt="Delicious food"
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, black 35%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, black 35%)",
          }}
        />

        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-4 xl:right-10">
          <InfoCard
            icon={<Clock3 className="h-6 w-6 text-white" strokeWidth={1.8} />}
            iconColor="bg-orange-400"
            title="30 min"
            text="Total time"
          />
          <InfoCard
            icon={
              <ChartNoAxesColumnIncreasing
                className="h-6 w-6 text-white"
                strokeWidth={1.8}
              />
            }
            iconColor="bg-black"
            title="Easy"
            text="Difficulty"
          />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, iconColor, title, text }) => {
  return (
    <div className="flex w-40 items-center gap-3 rounded-xl bg-white px-4 py-3 text-black shadow-lg dark:bg-gray-800 dark:text-white">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconColor}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default ImageSearch;
