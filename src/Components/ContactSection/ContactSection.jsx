import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Users } from "lucide-react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");

  // Update input values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update phone input
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    if (value && !isValidPhoneNumber(value)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid phone number");
      toast.error("Invalid phone number!");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_mueckcc", // Service ID
        "template_tbcwfcw", // Template ID
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "TGDmFFmHXrcss9HFb" // Public Key
      )
      .then((response) => {
        console.log("EmailJS response:", response); // Full response for debugging
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error); // Full error details
        toast.error(
          "Failed to send message! Check console for details."
        );
      });
  };

  return (
    <section className="bg-[#f5f6f7] py-20 px-6 relative">
      {/* Remove black outline from phone input */}
      <style>{`
        .react-phone-number-input input:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      {/* Toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">
        {/* FORM */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-outfit mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 font-inter">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@gmail.com"
                  className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Company name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone number</label>
                <div className="w-full mt-1 border rounded-md px-2 py-2 focus-within:ring-2 focus-within:ring-orange-400">
                  <PhoneInput
                    international
                    defaultCountry="BD"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full !outline-none !ring-0 !shadow-none !border-none"
                  />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your requirements..."
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold font-outfit transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-between gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 font-inter">
            <h3 className="text-xl font-bold font-outfit mb-5">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-500 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold font-outfit">Phone</p>
                  <p className="text-gray-500">+8801680 329598</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-orange-500 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold font-outfit">Email</p>
                  <p className="text-gray-500">maxibobd@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-500 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold font-outfit">Location</p>
                  <p className="text-gray-500">
                    House# 17 (5th Floor), Road# 05, Sector# 12, Uttara, Dhaka-1230
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-500 w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold font-outfit">Business Hours</p>
                  <p className="text-gray-500">Sunday - Thursday <br /> 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1f4f8a] text-white rounded-xl p-6 font-inter">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-orange-400" />
              <h3 className="text-xl font-bold font-outfit">Direct Contacts</h3>
            </div>

            <p className="font-semibold font-outfit">Istiak Ahmed</p>
            <p className="text-orange-400 mb-4">CEO</p>

            <div className="space-y-2 text-sm">
              <p>📞 +8801680 329598</p>
              <p>✉️ maxibobd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;