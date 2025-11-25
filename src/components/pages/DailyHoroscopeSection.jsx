import React, { useEffect, useState } from "react";
import {getDailyHoroscope} from "../../stores/dailyHoroscope"

const zodiacList = [
  { name: "aries", img: "land13.svg" },
  { name: "taurus", img: "land11.svg" },
  { name: "gemini", img: "land9.svg" },
  { name: "cancer", img: "land7.svg" },
  { name: "leo", img: "land4.svg" },
  { name: "virgo", img: "land8.svg" },
  { name: "libra", img: "Libra.png" },
  { name: "scorpio", img: "scorpio.png" },
  { name: "sagittarius", img: "sagittarius.png" },
  { name: "capricorn", img: "capricorn.png" },
  { name: "aquarius", img: "aquarius.png" },
  { name: "pisces", img: "pisces.png" },
];

export default function DailyHoroscopeSection() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      let results = {};
      for (const z of zodiacList) {
        const h = await getDailyHoroscope(z.name);
        results[z.name] = h;
      }
      setData(results);
    };
    fetchAll();
  }, []);

  return (
    <section className="px-6 sm:px-10 py-16 bg-[#F9F9EF]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-12">
          Daily Horoscope
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {zodiacList.slice(0, 6).map((z) => (
              <div key={z.name} className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4">
                <img src={z.img} className="h-40 w-40 object-cover" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-amber-700">
                    {z.name.charAt(0).toUpperCase() + z.name.slice(1)}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {data[z.name]?.prediction || "Loading..."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {zodiacList.slice(6).map((z) => (
              <div key={z.name} className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4">
                <img src={z.img} className="h-40 w-40 object-cover" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-amber-700">
                    {z.name.charAt(0).toUpperCase() + z.name.slice(1)}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {data[z.name]?.prediction || "Loading..."}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
