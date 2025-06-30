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
          <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-secondary mb-4 rounded" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Vietnam Silicon
              </h1>
              <p className="text-white text-lg md:text-xl font-medium mb-0">
                At Vietnam Silicon, we’re more than just a technology
                company—we’re an innovation partner driving digital
                transformation across Southeast Asia. As Vietnam’s premier tech
                innovation center, we combine world-class technical expertise
                with local insights to deliver transformative solutions and
                shape the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="bg-[#fafafa] py-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Company Overview
          </h2>
          <p className="text-base text-[#6a6a6a] md:text-lg">
            Founded by technology veterans, Vietnam Silicon delivers enterprise
            AI, digital transformation, and cybersecurity solutions across
            Southeast Asia. We combine technical excellence with industry
            knowledge to drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Card 1 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Cô Lâm Thanh Hằng"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Giáo viên</p>
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>

            {/* Team Member Card 2 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Cô Lâm Thanh Hằng"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Giáo viên</p>
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>

            {/* Team Member Card 3 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Cô Lâm Thanh Hằng"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Giáo viên</p>
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>

            {/* Team Member Card 4 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Cô Lâm Thanh Hằng"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Giáo viên</p>
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner that work with Us
          </h2>
          <p className="text-lg md:text-xl font-medium">
            We collaborate with global technology leaders to deliver
            cutting-edge solutions:
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div></div> {/* Empty for centering */}
            {/* Card 1 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Partner 1"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Đối tác</p>
                <h3 className="text-xl font-semibold text-white">Tên đối tác 1</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="shine-effect bg-primary rounded-lg shadow-lg transition-transform hover:-translate-y-2 p-4 h-[450px] group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <Image
                  src="/images/member_image.png"
                  alt="Partner 2"
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white mb-2">Đối tác</p>
                <h3 className="text-xl font-semibold text-white">Tên đối tác 2</h3>
              </div>
            </div>
            <div></div> {/* Empty for centering */}
          </div>
        </div>
      </section>
    </>
  );
}
