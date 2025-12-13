import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
 Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! I'll get back to you soon.",
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#D4D4D4]">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to
            bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6">
              Contact Information
            </h3>
            <p className="text-neutral-400 mb-8">
              Feel free to reach out through any of these
              channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#525252] to-[#D4D4D4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">
                    Email
                  </div>
                  <div className="text-lg">
                    Abdirahmanahmed2728@email.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#525252] to-[#D4D4D4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">
                    Phone
                  </div>
                  <div className="text-lg">+254 7933 79587</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#525252] to-[#D4D4D4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">
                    Location
                  </div>
                  <div className="text-lg">
                    Kenya nairobi
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg mb-4">Follow Me on👇</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/abdirahman.012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 br hover:bg-[#D4D4D4] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://x.com/Abdirahman51024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-[#D4D4D4] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/Abdirahman-ahmed-b7841a343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-[#D4D4D4] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>
  {/* Web3Forms Access Key */}
  <input
    type="hidden"
    name="access_key"
    value="3ca5c08c-e133-4b59-8ae9-a8a6a4c4a0f8"
  />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-neutral-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white-300 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-neutral-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Abdirahmanahmed2728@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-neutral-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-neutral-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4D4D4] rounded-lg hover:bg-[#e0e0e0] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-neutral-500/50 text-neutral-900"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; 2025 Abdirahman. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}