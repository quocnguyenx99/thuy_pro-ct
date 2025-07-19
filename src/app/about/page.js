import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed banner image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about-image.jpg"
            alt="Vietnam Silicon Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay chỉ phủ lên ảnh */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-16 h-1 bg-secondary mb-4 rounded" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                About Us
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-0 leading-relaxed max-w-4xl">
                Với mục tiêu trở thành Tập đoàn công nghiệp đa ngành hàng đầu
                ASEAN, phát triển bền vững trong bối cảnh hội nhập khu vực và
                thế giới, mang lại giá trị cho khách hàng, đối tác, xã hội và
                phát triển kinh tế đất nước với tinh thần "Tận tâm phục vụ",
                THACO không ngừng đầu tư phát triển sức mạnh nội sinh, đổi mới
                tư duy và hành động, nâng chất, nâng tầm của đội ngũ nhân sự.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-6 sm:mb-8 md:mb-12">
            Our Team Members
          </h2>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Team Member Card 1 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/thuy.jpg"
                    alt="Trần Diệu Thuỳ - HR Leader"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2 text-sm sm:text-base">HR Leader</p>
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>

            {/* Team Member Card 2 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/kim.jpg"
                    alt="Nguyễn Quế Kim - HR Executive"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2 text-sm sm:text-base">HR Executive</p>
                <h3 className="text-xl font-semibold text-white">
                  Nguyễn Quế Kim
                </h3>
              </div>
            </div>

            {/* Team Member Card 3 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/han.jpg"
                    alt="Nguyễn Bảo Hân - L&D Executive"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2 text-sm sm:text-base">L&D Executive</p>
                <h3 className="text-xl font-semibold text-white">
                  Nguyễn Bảo Hân
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
            Partner that work with Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
            V.Y Consulting tự hào là đối tác chiến lược của THACO trong việc xây
            dựng và phát triển văn hóa doanh nghiệp, góp phần nâng cao hiệu quả
            hoạt động và phát triển bền vững của tập đoàn. Chúng tôi cam kết
            mang đến những giải pháp nhân sự tối ưu, phù hợp với chiến lược phát
            triển của THACO, từ việc tuyển dụng, đào tạo đến phát triển nguồn
            nhân lực chất lượng cao.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Team Member Card 1 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/anh.jpg"
                    alt="Phan Ngọc Ánh - HR Consultant"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">HR Consultant</p>
                <h3 className="text-xl font-semibold text-white">
                  Phan Ngọc Ánh
                </h3>
              </div>
            </div>

            {/* Team Member Card 2 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/phung.jpg"
                    alt="Võ Thị Kim Phụng - HR Consultant"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">HR Consultant</p>
                <h3 className="text-xl font-semibold text-white">
                  Võ Thị Kim Phụng
                </h3>
              </div>
            </div>

            {/* Team Member Card 3 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group w-full max-w-[256px]"
              style={{ height: "418px" }}
            >
              <div
                className="relative overflow-hidden p-3"
                style={{ height: "320px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/vy.jpg"
                    alt="Trương Thị Khánh Vy - HR Consultant"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">HR Consultant</p>
                <h3 className="text-xl font-semibold text-white">
                  Trương Thị Khánh Vy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
