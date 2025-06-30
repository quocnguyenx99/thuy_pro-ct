"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Swiper background images */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000 }}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/banner_1.webp"
                  alt="Banner 1"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay phủ lên ảnh */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/banner_2.webp"
                  alt="Banner 2"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay phủ lên ảnh */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-16 h-1 bg-secondary mb-4 rounded" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            With Us, You Can
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
            Reach your fullest potential
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mb-6">
            Discover a workplace where your ideas matter, your growth is
            priority, and your impact drives Vietnam&apos;s tech evolution. Join
            our team of 500+ innovators shaping the future of technology.
          </p>
          <button className="bg-secondary hover:bg-orange-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 min-w-[220px] w-full max-w-xs">
            Join Us Now
          </button>
        </div>
      </section>

      <section className="w-full py-10 bg-white flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-center gap-8 px-4">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/home_content_img.png"
              alt="Digital Transformation"
              className="max-w-[450px] w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-16 mt-24">
            {/* Items */}
            <div className="flex flex-col gap-16">
              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  {/* Title */}
                  <h3 className="text-primary font-bold text-xl mb-0">
                    AI Insights
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 ml-[160px]">
                  Transform business intelligence through advanced analytics,
                  machine learning, and AI-powered solutions that turn data into
                  actionable insights.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-0">
                    Emerging Technology
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 ml-[160px]">
                  Pioneer breakthrough solutions using cutting-edge
                  technologies, guiding organizations from exploration to
                  implementation while creating sustainable competitive
                  advantages in rapidly evolving markets.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-0">
                    Cybersecurity
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 ml-[160px]">
                  Protect digital assets with robust security solutions,
                  implementing industry-leading practices to safeguard your
                  organization&apos;s future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
