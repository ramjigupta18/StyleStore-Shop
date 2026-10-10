import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "support@stylestore.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "+91 98765 43210",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      detail: "India",
    },
  ];

  return (
    <main className="min-h-screen mt-20 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <SharedNavbar />

      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Get In Touch
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Have a question about your shopping experience? Send us a message
            and we'll be happy to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact Information */}
          <section className="rounded-3xl bg-gray-900 p-6 text-white sm:p-8 lg:col-span-2 lg:p-10">
            <h2 className="text-2xl font-bold">Let's Talk</h2>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Reach out to us for questions, feedback, or help with your
              shopping experience.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 break-words text-sm text-gray-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">We're here to help!</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Fill out the form with your query and include the details
                needed to understand your request.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fields marked with * are required.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
              >
                Your message form was submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject *
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your query about?"
                  required
                  className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full min-w-0 resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
              >
                Send Message <FaPaperPlane />
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Demo form: messages are not sent to an email server. Connect a
                backend or form service to receive real messages.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
