"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Heart,
  Square,
  Lightbulb,
  ThumbsUp,
  Users,
  Clock,
  HandHeart,
  RefreshCw,
} from "lucide-react";

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
                  src="/images/banner_1.jpg"
                  alt="Banner 1"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay phủ lên ảnh */}
                <div className="absolute inset-0 bg-black/70 pointer-events-none" />
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
            Giới thiệu công ty
          </h1>
          {/* <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
            Reach your fullest potential
          </h2> */}
          <p className="text-white text-base md:text-lg max-w-4xl mb-6">
            Công ty cổ phần Tập đoàn Trường Hải (THACO) được thành lập vào ngày
            29/04/1997. THACO đã trở thành Tập đoàn công nghiệp đa ngành gồm 6
            Tập đoàn thành viên: THACO AUTO (Ô tô), THACO INDUSTRIES (Cơ khí &
            Công nghiệp hỗ trợ), THACO AGRI (Nông nghiệp), THADICO (Đầu tư & Xây
            dựng), THISO (Thương mại & Dịch vụ) và THILOGI (Logistics), trong đó
            các ngành bổ trợ cho nhau và có tính tích hợp cao.
          </p>
          <button className="bg-secondary hover:bg-orange-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 min-w-[220px] w-full max-w-xs">
            Join Us Now
          </button>
        </div>
      </section>

      <section className="w-full py-10 bg-white flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start justify-center gap-8 px-4">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/home_content_img.png"
              alt="Digital Transformation"
              className="max-w-[450px] w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-16 lg:mt-24">
            {/* Items */}
            <div className="flex flex-col gap-8 lg:gap-16">
              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
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
                    Tầm nhìn
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 md:ml-[160px]">
                  Tập đoàn công nghiệp đa ngành hàng đầu khu vực ASEAN, phát
                  triển bền vững trong bối cảnh hội nhập khu vực và thế giới.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
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
                    Sứ mạng
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 md:ml-[160px]">
                  Mang lại giá trị cho khách hàng, đối tác, xã hội và phát triển
                  kinh tế đất nước với tinh thần "Tận tâm phục vụ " .
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
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
                    Chiến lược
                  </h3>
                </div>
                <p className="text-gray-700 text-base mt-2 md:ml-[160px]">
                  THACO là Tập đoàn công nghiệp đa ngành có các Tập đoàn thành
                  viên hoạt động trong các lĩnh vực: Ô tô, Nông nghiệp, Cơ khí &
                  Công nghiệp hỗ trợ, Đầu tư & Xây dựng, Thương mại & Dịch vụ và
                  Logistics, có tính bổ trợ và tích hợp cao trong từng Tập đoàn,
                  giữa các Tập đoàn thành viên và THACO; tổ chức hoạt động SXKD
                  theo chuỗi giá trị và quản trị theo phương pháp công nghiệp;
                  tham gia chuỗi giá trị toàn cầu và chuyển đổi số với lộ trình
                  phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lối section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              GIÁ TRỊ CỐT LỖI (8 chữ T)
            </h2>
            <p className="text-gray-600 text-lg max-w-5xl mx-auto">
              Sự nỗ lực vượt khó, tự tin, trí tuệ, kỷ luật và ý chí, nghị lực
              của người sáng lập cùng với đội ngũ nhân sự có thái độ làm việc
              tích cực, ý thức đóng góp cộng hiến đã hình thành nên văn hóa
              THACO thể hiện qua giá trị cốt lõi là:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Tận tâm */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TẬN TÂM</h3>
            </div>

            {/* Trung thực */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Square className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                TRUNG THỰC
              </h3>
            </div>

            {/* Trí tuệ */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TRÍ TUỆ</h3>
            </div>

            {/* Tự tin */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TỰ TIN</h3>
            </div>

            {/* Tôn trọng */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                TÔN TRỌNG
              </h3>
            </div>

            {/* Trung tín */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                TRUNG TÍN
              </h3>
            </div>

            {/* Tận tình */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TẬN TÌNH</h3>
            </div>

            {/* Thuận tiện */}
            <div className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                THUẬN TIỆN
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
