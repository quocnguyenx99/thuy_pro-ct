import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed banner image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about-image.jpg"
            alt="Contact Us Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay chỉ phủ lên ảnh */}
          <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-secondary mb-4 rounded" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-white text-lg md:text-xl font-medium mb-0">
                Have any questions or want to get in touch? <br />
                Fill out the form below or reach us via the contact information
                provided.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#f7fafd] py-14 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2 mt-4">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Any questions or remarks? Just write us a message!
        </p>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-4 md:p-4">
          {/* Contact Info Card */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[600px] flex flex-col justify-between text-white p-4"
            style={{
              background: "url(/images/bg_contact_form.png) center/cover",
            }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="mb-8 text-white/80">
                Say something to start a live chat!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <Mail className="text-white" size={20} />
                  </span>
                  <span>dieuthuy@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </span>
                  <span>
                    54 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Facebook className="text-white" size={18} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Twitter className="text-white" size={18} />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex flex-col gap-4 justify-center">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Alex"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                E-mail Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center justify-end mt-2">
              <button
                type="submit"
                className="bg-secondary hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
              >
                Send Inquiry
              </button>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/images/letter_send.png"
                alt="paper plane"
                width={180}
                height={180}
                className="opacity-80 mt-2"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
