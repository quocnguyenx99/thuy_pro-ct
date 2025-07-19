import Image from "next/image";
import Link from "next/link";

export default function Report() {
  const reports = [
    {
      chapter: "01",
      title: "Tổng quan cơ cấu lao động tại THACO",
      link: "tong-quan-co-cau-lao-dong-thaco",
    },
    {
      chapter: "02",
      title: "Tuyển dụng",
      link: "tuyen-dung",
    },
    {
      chapter: "03",
      title: "Đào tạo và phát triển",
      link: "dao-tao-va-phat-trien",
    },
    {
      chapter: "04",
      title: "Chính sách đãi ngộ",
      link: "chinh-sach-dai-ngo",
    },
  ];

  return (
    <>
      <section className="relative h-80 sm:h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Fixed banner image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/report_image.jpg"
            alt="Vietnam Silicon Report"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-16 h-1 bg-secondary mb-3 sm:mb-4 rounded" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Our Reports
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-0 leading-relaxed max-w-2xl">
                Dữ liệu về nguồn nhân lực THACO giai đoạn 2021–2023 cung cấp cái
                nhìn toàn diện về cơ cấu nhân sự, tuyển dụng, đào tạo và chế độ
                đãi ngộ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 cursor-pointer place-items-center">
            {reports.map((report, index) => (
              <Link
                key={index}
                href={`/report/${report.link}`}
                className="group relative w-full max-w-md h-[180px] sm:h-[200px] md:h-[220px] bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg transition-all duration-500 border border-gray-200 hover:border-transparent shadow-sm hover:shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-center"
              >
                {/* Chapter number and line */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 group-hover:text-white/80 transition-all duration-500">
                    {report.chapter}
                  </span>
                  <div className="w-12 sm:w-16 h-0.5 bg-gray-300 group-hover:bg-white/80 transition-all duration-500"></div>
                </div>

                {/* Title with slide-up animation */}
                <div className="transform transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-white mb-3 sm:mb-4 transition-all duration-500 leading-tight">
                    {report.title}
                  </h3>
                </div>

                {/* Description with fade-in and slide-up animation */}
                <div className="transform transition-all duration-500 translate-y-6 sm:translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90">
                    {report.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
