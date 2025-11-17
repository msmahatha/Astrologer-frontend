// components/KundliModal.jsx
import React, { useMemo } from "react";
import { X, Clock } from "lucide-react";

const KundliModal = ({ isOpen = true, onClose = () => {}, data , loading }) => {


  const kundli = data ;

  // nice formatted times in Asia/Kolkata
  const createdAtStr = useMemo(() => {
    try {
      return new Date(kundli.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    } catch {
      return kundli.createdAt;
    }
  }, [kundli.createdAt]);

  if (!isOpen) return null;

  // helpers
  const planetsArray = Object.values(kundli.chart.planets || {});
  const housesArray = Object.values(kundli.chart.houses || {});
  const aspects = kundli.chart.aspects || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pt-20">
      {/* overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* modal */}
      <div className="relative w-[95%] md:w-4/5 lg:w-3/5 max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-amber-50 border border-amber-100">
        {/* header */}
        <div className="flex items-center justify-between p-4 border-b border-amber-100 bg-[#FBAB26]">
          <div className="flex items-center gap-3">
            <img
              src="/astro-logo.png"
              alt="Astro AI"
              className="w-12 h-12 rounded-full border border-amber-200 object-cover"
              onError={(e) => (e.target.src = "./ailogo.png")}
            />
            
            <div>
              <p className="text-white font-bold">Raman</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right mr-2">
              <div className="text-xs text-white">Response</div>
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                {kundli.responseTime} ms
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-amber-100 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* body */}
        <div className="p-4 overflow-auto max-h-[75vh]">
          {/* Chart summary */}
          <section className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm border border-amber-50">
              <h4 className="text-sm text-gray-500 mb-2">Chart Summary</h4>
              <div className="flex flex-wrap gap-4">
                <div className="text-sm">
                  <div className="text-xs text-gray-400">Place</div>
                  <div className="text-sm text-gray-700">{kundli.chart.place} ({kundli.chart.timezone})</div>
                </div>

                <div className="text-sm">
                  <div className="text-xs text-gray-400">Ascendant</div>
                  <div className="text-sm text-gray-700">{Number(kundli.chart.ascendant).toFixed(2)}°</div>
                </div>

                <div className="text-sm">
                  <div className="text-xs text-gray-400">MC</div>
                  <div className="text-sm text-gray-700">{Number(kundli.chart.mc).toFixed(2)}°</div>
                </div>

                <div className="text-sm">
                  <div className="text-xs text-gray-400">Julian Day</div>
                  <div className="text-sm text-gray-700">{kundli.chart.julian_day}</div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-50">
              <h4 className="text-sm text-gray-500 mb-2">Meta</h4>
              <div className="text-sm text-gray-700">
                <div><span className="text-xs text-gray-400">Status</span> — <span className={`font-medium  text-green-600`}>success</span></div>
                <div className="mt-2"><span className="text-xs text-gray-400">Created</span> — <span className="text-sm text-gray-700">{createdAtStr || "today"}</span></div>
              </div>
            </div> */}

            <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-50">
  <h4 className="text-sm text-gray-500 mb-2">Meta</h4>
  <div className="text-sm text-gray-700">
    
    <div>
      <span className="text-xs text-gray-400">Status</span> — 
      <span className="font-medium text-green-600">success</span>
    </div>

    <div className="mt-2">
      <span className="text-xs text-gray-400">Created</span> — 
      <span className="text-sm text-gray-700">
        {createdAtStr && createdAtStr !== "Invalid Date" ? createdAtStr : "today"}
      </span>
    </div>

  </div>
</div>

          </section>

          {/* Planets & Houses */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Planets */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-50">
              <h4 className="text-sm text-gray-500 mb-3">Planets</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {planetsArray.map((p) => (
                  <div key={p.name} className="rounded-lg p-3 bg-amber-50 border border-amber-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.sign} • {Number(p.degree).toFixed(2)}°</div>
                      </div>
                      <div className="text-xs text-gray-400">{p.retrograde ? "R" : ""}</div>
                    </div>

                    <div className="mt-2 text-xs text-gray-600">
                      <div>House: {p.house ?? "-"}</div>
                      <div>Nakshatra: {p.nakshatra} ({p.pada})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Houses & Aspects */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-50">
                <h4 className="text-sm text-gray-500 mb-3">Houses</h4>
                <div className="grid grid-cols-3 gap-2">
                  {housesArray.map((h) => (
                    <div key={h.number} className="p-2 rounded-md bg-amber-50 text-xs border border-amber-100">
                      <div className="font-semibold text-gray-800">House {h.number}</div>
                      <div className="text-gray-600">{h.sign} • {Number(h.degree).toFixed(2)}°</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-50">
                <h4 className="text-sm text-gray-500 mb-3">Key Aspects</h4>
                <div className="space-y-2 flex flex-wrap text-sm text-gray-700">
                  {aspects.length === 0 && <div className="text-gray-400">No major aspects found.</div>}
                  {aspects.map((a, i) => (
                    <div key={i} className="p-2 rounded-md bg-amber-25 border border-amber-50">
                      <div className="font-medium">{a.between.join(" — ")}</div>
                      <div className="text-xs text-gray-500">{a.type} • {Number(a.angle).toFixed(2)}°</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* small footer */}
          {/* <div className="mt-4 text-right text-xs text-gray-400">
            Generated by Astro AI • {kundli.gender}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default KundliModal;
