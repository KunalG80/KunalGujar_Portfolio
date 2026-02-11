const stats = [
  { label: "Microservices Designed", value: "5+" },
  { label: "Records Processed", value: "10K+" },
  { label: "SQL Certifications", value: "4" },
  { label: "ML Models Built", value: "6+" },
];

export default function Impact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl text-center hover:bg-white/10 transition"
          >
            <h3 className="text-3xl font-semibold">{stat.value}</h3>
            <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
