import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, logic to send email goes here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-[#1a237e] serif-font mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              To schedule a consultation or inquire about legal representation
              at the District and Sessions Court, Buldhana, please use the form
              or reach out directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <MapPin className="text-[#1a237e] h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333]">Office Location</h4>
                  <p className="text-gray-600">
                    District & Sessions Court Premises, Buldhana, Maharashtra -
                    443001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <Phone className="text-[#1a237e] h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333]">Phone Number</h4>
                  <p className="text-gray-600">+91 87664 45854</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <Mail className="text-[#1a237e] h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333]">Email Address</h4>
                  <p className="text-gray-600">shitaldeshmukh2905@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[#1a237e] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. Adv. Shital Deshmukh's office will
                  contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your case..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a237e] hover:bg-[#283593] text-white font-bold py-4 rounded transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
