import { Check } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    duration: "/month",
    description: "Perfect for freelancers and small businesses.",
    button: "Get Started",
    accent: "bg-slate-400",
    features: [
      "Up to 500 Contacts",
      "Lead Management",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "₹999",
    duration: "/month",
    description: "Best for growing businesses and sales teams.",
    button: "Start Free Trial",
    accent: "bg-gradient-to-r from-blue-600 to-purple-600",
    features: [
      "Unlimited Contacts",
      "Sales Pipeline",
      "Workflow Automation",
      "Team Collaboration",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    duration: "",
    description: "Advanced solution for large organizations.",
    button: "Contact Sales",
    accent: "bg-slate-900",
    features: [
      "Everything in Professional",
      "Dedicated Manager",
      "API Access",
      "24/7 Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            PRICING
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-7 sm:text-lg sm:leading-8">
            Choose the perfect CRM plan for your business and upgrade anytime as
            your team grows.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`h-1.5 w-full ${plan.accent}`}></div>

              <div className="p-5">
              <h2 className="bg-clip-text text-2xl font-bold text-transparent animate-gradient">
  {plan.name}
</h2>

                <p className="mt-5 text-xl font-semibold text-black">
                  {plan.description}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-semibold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-xs font-semibold text-gray-800">
                    {plan.duration}
                  </span>
                </div>

                <button
                  className={`mt-4 w-full rounded-xl py-2 text-sm font-semibold transition duration-300
                  ${
                    plan.id === 2
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {plan.button}
                </button>

                <div className="mt-5 space-y-2.5">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <Check size={15} className="shrink-0 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;