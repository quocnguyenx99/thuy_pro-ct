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
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-12 sm:w-16 h-1 bg-secondary mb-4 rounded" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
            Giới thiệu công ty
          </h1>
          {/* <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
            Reach your fullest potential
          </h2> */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mb-6 lg:mb-8 leading-relaxed">
            Công ty cổ phần Tập đoàn Trường Hải (THACO) được thành lập vào ngày
            29/04/1997. THACO đã trở thành Tập đoàn công nghiệp đa ngành gồm 6
            Tập đoàn thành viên: THACO AUTO (Ô tô), THACO INDUSTRIES (Cơ khí &
            Công nghiệp hỗ trợ), THACO AGRI (Nông nghiệp), THADICO (Đầu tư & Xây
            dựng), THISO (Thương mại & Dịch vụ) và THILOGI (Logistics), trong đó
            các ngành bổ trợ cho nhau và có tính tích hợp cao.
          </p>
          <button className="bg-secondary hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 min-w-[180px] sm:min-w-[220px] w-full max-w-xs text-sm sm:text-base transform hover:scale-105 active:scale-95">
            Join Us Now
          </button>
        </div>
      </section>

      {/* Section 2: Desktop layout with image + content, Mobile layout with cards */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        {/* Desktop & Tablet Layout (md and up) */}
        <div className="hidden md:flex max-w-6xl mx-auto flex-col lg:flex-row items-start justify-center gap-8 px-4">
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

        {/* Mobile Layout (sm and below) - Cards */}
        <div className="md:hidden max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-1 bg-secondary mx-auto mb-4 rounded" />
            <h2 className="text-xl font-bold text-primary mb-3">
              Về THACO
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Tập đoàn Trường Hải với tầm nhìn, sứ mạng và chiến lược phát triển bền vững
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-4">
            {/* Tầm nhìn Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  Tầm nhìn
                </h3>
                
                {/* Content */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Tập đoàn công nghiệp đa ngành hàng đầu khu vực ASEAN, phát triển bền vững 
                  trong bối cảnh hội nhập khu vực và thế giới.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            </div>

            {/* Sứ mạng Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  Sứ mạng
                </h3>
                
                {/* Content */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mang lại giá trị cho khách hàng, đối tác, xã hội và phát triển kinh tế 
                  đất nước với tinh thần "Tận tâm phục vụ".
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-secondary to-orange-600"></div>
            </div>

            {/* Chiến lược Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  Chiến lược
                </h3>
                
                {/* Content */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  THACO là Tập đoàn công nghiệp đa ngành có các Tập đoàn thành viên hoạt động 
                  trong các lĩnh vực: Ô tô, Nông nghiệp, Cơ khí & Công nghiệp hỗ trợ, 
                  Đầu tư & Xây dựng, Thương mại & Dịch vụ và Logistics, có tính bổ trợ và 
                  tích hợp cao, tham gia chuỗi giá trị toàn cầu và chuyển đổi số.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lối section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-secondary mx-auto mb-4 rounded" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              GIÁ TRỊ CỐT LÕI (8 chữ T)
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Sự nỗ lực vượt khó, tự tin, trí tuệ, kỷ luật và ý chí, nghị lực
              của người sáng lập cùng với đội ngũ nhân sự có thái độ làm việc
              tích cực, ý thức đóng góp cộng hiến đã hình thành nên văn hóa
              THACO thể hiện qua giá trị cốt lõi là:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Tận tâm */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">TẬN TÂM</h3>
            </div>

            {/* Trung thực */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Square className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                TRUNG THỰC
              </h3>
            </div>

            {/* Trí tuệ */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">TRÍ TUỆ</h3>
            </div>

            {/* Tự tin */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">TỰ TIN</h3>
            </div>

            {/* Tôn trọng */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                TÔN TRỌNG
              </h3>
            </div>

            {/* Trung tín */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                TRUNG TÍN
              </h3>
            </div>

            {/* Tận tình */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">TẬN TÌNH</h3>
            </div>

            {/* Thuận tiện */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                THUẬN TIỆN
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
