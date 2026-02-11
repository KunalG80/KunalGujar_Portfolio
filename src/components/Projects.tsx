export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-16 text-center">
        Featured Projects
      </h2>

      <div className="space-y-12">

        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold">
            Microservices Hospital Management System
          </h3>
          <p className="mt-4 text-gray-400">
            Designed scalable 6-service architecture using Spring Boot,
            .NET 8 and Node.js with JWT authentication and API Gateway.
            Reduced simulated API latency by 35% during load testing.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold">
            Customer Churn Prediction Pipeline
          </h3>
          <p className="mt-4 text-gray-400">
            Built end-to-end ML pipeline using Python and Scikit-learn.
            Achieved 87% model accuracy with automated markdown reporting
            and confusion matrix evaluation.
          </p>
        </div>

      </div>
    </section>
  );
}
