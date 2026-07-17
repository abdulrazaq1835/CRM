import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is CRM?",
    answer:
      "CRM is a cloud-based CRM platform that helps businesses manage leads, customers, sales pipelines, and automate workflows from one place.",
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial so you can explore all premium features without any commitment.",
  },
  {
    id: 3,
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your subscription anytime as your business grows.",
  },
  {
    id: 4,
    question: "Is my customer data secure?",
    answer:
      "Yes. We use enterprise-grade encryption, secure cloud infrastructure, and regular backups to keep your data safe.",
  },
  {
    id: 5,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no long-term contracts. You can cancel your subscription whenever you want.",
  },
  {
    id: 6,
    question: "Do you provide customer support?",
    answer:
      "Of course! Our support team is available via email and live chat to assist you whenever you need help.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-6 py-2 text-sm font-bold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Find answers to the most common questions about HelloCRM,
            pricing, security, and customer support.
          </p>
        </div>

      
        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                openId === faq.id
                  ? "border-blue-600 shadow-xl"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {openId === faq.id ? (
                  <Minus
                    size={22}
                    className="text-blue-600"
                  />
                ) : (
                  <Plus
                    size={22}
                    className="text-gray-500"
                  />
                )}
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openId === faq.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 px-8 py-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Still have questions?
          </h3>

          <p className="mt-4 text-lg text-blue-100">
            Our experts are ready to help you choose the right CRM solution
            for your business.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;