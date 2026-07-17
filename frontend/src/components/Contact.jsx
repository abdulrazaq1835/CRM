import { useState } from "react";
import { Mail, Phone, Check, Clock, ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";
import api from "../api/api.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    companySize: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting Inquiry...");

    try {
      const { data } = await api.post("/inquiry", formData);

      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        country: "",
        industry: "",
        companySize: "",
        message: "",
      });
    } catch (error) {
      toast.update(toastId, {
        render:
          error.response?.data?.message || "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">
            CONTACT US
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-center">
              <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Let's grow your
                <span className="block text-blue-600">business together.</span>
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Whether you're a startup ready to scale or an enterprise seeking
              a smarter CRM, our team is here to listen, strategize, and help
              you close more deals.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-gray-700">
              <span className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Free consultation
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" /> 24h response time
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" /> Data secure
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email our team</p>
                  <p className="text-sm text-blue-600">hello@hellocrm.com</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Typically replies within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call or WhatsApp</p>
                  <p className="text-sm text-blue-600">+91 98765 43210</p>
                  <p className="mt-1 text-xs text-gray-500">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>
            </div>

        
            <div className="relative mt-14 hidden h-72 lg:block">
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200 bg-blue-100/40"></div>

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                <span className="text-2xl font-bold">50+</span>
              </div>

              <div className="absolute left-0 top-0 w-64 rounded-2xl bg-white p-4 shadow-lg">
                <p className="text-sm font-semibold text-gray-900">Vinay Gupta</p>
                <p className="text-xs text-gray-500">CEO, TechFlow</p>
                <p className="mt-2 text-sm text-gray-600">
                  "HelloCRM helped us close deals ahead of schedule."
                </p>
                <p className="mt-1 text-amber-400">★★★★★</p>
              </div>

              <div className="absolute right-0 top-20 w-64 rounded-2xl bg-blue-600 p-4 text-white shadow-lg">
                <p className="text-sm font-semibold">Vikram Mehta</p>
                <p className="text-xs text-blue-200">Founder, EcoStart</p>
                <p className="mt-2 text-sm text-blue-100">
                  "Their team understood our vision perfectly."
                </p>
                <p className="mt-1 text-amber-300">★★★★★</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">Product Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="ABC Pvt Ltd"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
                    required
                  >
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">Company Size</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
                  required
                >
                  <option value="">Select Company Size</option>
                  <option>1-10 Employees</option>
                  <option>11-50 Employees</option>
                  <option>51-200 Employees</option>
                  <option>200+ Employees</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;