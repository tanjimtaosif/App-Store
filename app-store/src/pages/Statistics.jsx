import React from "react";

const Statistics = () => {
  const stats = [
    {
      title: "Total Downloads",
      value: "29.6M",
      desc: "21% more than last month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      desc: "46% more than last month",
    },
    {
      title: "Active Apps",
      value: "132+",
      desc: "31 more launching soon",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-snug">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-3 hover:bg-white/20 transition"
            >
              <p className="text-base opacity-90">{item.title}</p>
              <h3 className="text-5xl md:text-6xl font-extrabold">
                {item.value}
              </h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
