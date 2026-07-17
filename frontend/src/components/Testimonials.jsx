import { Star, Quote } from "lucide-react";
import founderImage from "../assets/founder.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Sales Manager",
    company: "TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "HelloCRM completely transformed our sales process. Lead tracking is effortless, and our team closes deals much faster than before.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Founder",
    company: "GrowthHub",
    image: founderImage,
    review:
      "The automation features save us hours every week. It's one of the best CRM platforms we've ever used for managing customer relationships.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Head",
    company: "Bright Solutions",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Excellent UI, powerful analytics, and outstanding customer support. HelloCRM has become an essential part of our daily workflow.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Thousands of businesses trust HelloCRM to manage leads, automate
            workflows, and grow their revenue.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200 opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150"></div>

              {/* User - ab sabse upar */}
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-4 border-blue-100 object-cover"
                />

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <p className="text-sm font-medium text-blue-600">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Stars + Quote Icon */}
              <div className="relative z-10 mb-6 mt-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote size={35} className="text-blue-600 opacity-20" />
              </div>

              {/* Review */}
              <p className="relative z-10 leading-8 text-gray-600">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;