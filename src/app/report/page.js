import Image from "next/image";

export default function Report() {
  const reports = [
    {
      chapter: "01",
      title: "Digital Transformation",
      description: "Leading innovation in digital solutions across Southeast Asia"
    },
    {
      chapter: "02",
      title: "AI Integration",
      description: "Implementing cutting-edge AI solutions for business growth"
    },
    {
      chapter: "03",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services"
    },
    {
      chapter: "04",
      title: "Cybersecurity",
      description: "Advanced security measures for enterprise protection"
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-secondary mb-4 rounded" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Reports
              </h1>
              <p className="text-white text-lg md:text-xl font-medium mb-0">
                Discover our comprehensive analysis and insights into the latest technological advancements
                and digital transformation strategies that are shaping the future of Southeast Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer place-items-center">
            {reports.map((report, index) => (
              <div 
                key={index}
                className="group relative w-full max-w-md h-[220px] bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg transition-all duration-500 border border-gray-200 hover:border-transparent shadow-sm hover:shadow-xl overflow-hidden p-8 flex flex-col justify-center"
              >
                {/* Chapter number and line */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-gray-300 group-hover:text-white/80 transition-all duration-500">
                    {report.chapter}
                  </span>
                  <div className="w-16 h-0.5 bg-gray-300 group-hover:bg-white/80 transition-all duration-500"></div>
                </div>
                
                {/* Title with slide-up animation */}
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-all duration-500">
                    {report.title}
                  </h3>
                </div>
                
                {/* Description with fade-in and slide-up animation */}
                <div className="transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-gray-600 group-hover:text-white/90">
                    {report.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}