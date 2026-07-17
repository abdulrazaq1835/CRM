import {
  Users,
  BarChart3,
  Bot,
  CalendarCheck,
  Mail,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Users,
    title: "Lead Management",
    description:
      "Capture, organize, and manage all your leads from one centralized dashboard.",
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Monitor sales performance with real-time reports and actionable insights.",
  },
  {
    id: 3,
    icon: Bot,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks like follow-ups, reminders, and email notifications.",
  },
  {
    id: 4,
    icon: CalendarCheck,
    title: "Task Management",
    description:
      "Assign tasks, schedule meetings, and never miss important deadlines.",
  },
  {
    id: 5,
    icon: Mail,
    title: "Email Integration",
    description:
      "Manage customer emails directly inside your CRM for seamless communication.",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect your customer data with enterprise-grade security and cloud backup.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
      
        <div className="mx-auto max-w-3xl mt-5 text-center ">
          <span className="rounded-full bg-blue-100 mt-3 px-4 py-2 text-sm font-semibold text-blue-600">
            FEATURES
          </span>

    <h2 className="mt-6 bg-clip-text text-4xl font-bold text-transparent gradient-emerald-teal md:text-5xl">
 Smarter Tools for Stronger Customer Relationships
</h2>

          <p className="mt-4 text-lg  font-sans  font-bold leading-8 text-black">
            Everything your sales team needs to manage leads, automate
            workflows, track deals, and build stronger customer relationships.
          </p>
        </div>

        
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200 opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150"></div>

               <div className="relative z-10 inline-flex rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4 text-white shadow-lg shadow-blue-500/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
  <Icon size={25} />
</div>

         
                <h3 className="relative z-10 mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

               
                <button className="relative z-10 mt-2 font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;