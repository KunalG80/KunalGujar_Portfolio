export default function Expertise() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-semibold mb-6">Full Stack Engineering</h2>
          <ul className="space-y-4 text-gray-400">
            <li>Spring Boot, .NET 8, Node.js Microservices</li>
            <li>JWT Authentication & API Gateway</li>
            <li>RESTful APIs & Database Design</li>
            <li>React + TypeScript Frontend</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">Data Science & ML</h2>
          <ul className="space-y-4 text-gray-400">
            <li>Data Cleaning & Feature Engineering</li>
            <li>Pandas, NumPy, Scikit-learn</li>
            <li>Confusion Matrix & Model Evaluation</li>
            <li>Automated Report Generation</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
