"use client"
import Image from "next/image";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer (Generative AI)",
    company: "Navigos Group",
    logo: "/images/member_image.png",
    location: "Ho Chi Minh",
    salary: "Negotiable",
    time: "Today",
    tags: ["Back End Developer", "Backend", "Backend", "+3"],
    isNew: true,
  },
  {
    id: 2,
    title: "Backend Developer (Generative AI)",
    company: "Navigos Group",
    logo: "/images/member_image.png",
    location: "Ho Chi Minh",
    salary: "Negotiable",
    time: "Today",
    tags: ["Backend", "Backend", "GenAI", "+7"],
    isNew: true,
  },
  {
    id: 3,
    title: "Senior Software Engineer (Generative AI)",
    company: "Navigos Group",
    logo: "/images/member_image.png",
    location: "Ho Chi Minh",
    salary: "Negotiable",
    time: "Today",
    tags: ["Back End Developer", "Fullstack Development", "Generative AI", "+6"],
    isNew: true,
  },
];

export default function Career() {
  const [openJob, setOpenJob] = useState(null);

  const handleToggle = (id) => {
    setOpenJob(openJob === id ? null : id);
  };

  return (
    <>
      {/* Banner */}
      <section className="relative min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about-image.jpg"
            alt="Career Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-secondary mb-4 rounded" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We Have {jobs.length} Jobs For You
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Job List Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div className="border-b pb-2 mb-6 flex items-center">
            <h2 className="text-xl font-semibold text-gray-800">We Have {jobs.length} Jobs For You</h2>
          </div>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 md:p-6 relative">
                <div className="flex items-start">
                  {/* Logo */}
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center mr-4">
                    <Image src={job.logo} alt={job.company} width={64} height={64} className="object-contain rounded" />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {job.isNew && <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded mr-1">New</span>}
                      <span className="text-base md:text-lg font-semibold text-gray-900 truncate">{job.title}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{job.company}</div>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-1">
                      <span className="text-red-500 font-medium">{job.salary}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">{job.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                      <span className="text-gray-400">{job.time}</span>
                      {job.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 rounded px-2 py-0.5 font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {/* Toggle Button */}
                  <button
                    className={`absolute top-4 right-4 text-blue-400 hover:text-blue-600 transition transform ${openJob === job.id ? 'rotate-180' : ''}`}
                    onClick={() => handleToggle(job.id)}
                    aria-label="Toggle job description"
                  >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                {/* Job Description Dropdown */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${openJob === job.id ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-gray-700 text-sm bg-gray-50 rounded p-4 border border-gray-100">
                    Đây là mô tả chi tiết cho công việc <b>{job.title}</b>. Bạn có thể cập nhật nội dung này theo từng job thực tế.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
