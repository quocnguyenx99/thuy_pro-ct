"use client";
import Image from "next/image";
import { useState } from "react";

const jobs = [
	{
		id: 1,
		title: "Kế Toán - Tài Chính",
		logo: "/images/thaco_logo.png",
		location: "Ho Chi Minh",
		salary: "Negotiable",
		isNew: true,
		description:
			"- Nhận, kiểm tra hợp đồng và ghi nhận hoạch toán\n- Kiểm tra chi tiết công nợ của từng khách hàng\n- Xuất hóa đơn VAT cho tất cả khách hàng, đại lý\n- Báo cáo thuế VAT đầu ra",
	},
	{
		id: 2,
		title: "Kho vận",
		logo: "/images/thaco_logo.png",
		location: "Ho Chi Minh",
		salary: "Negotiable",
		isNew: true,
		description:
			"- Tổ chức việc nhận/xuất hàng, kiểm kê hàng hóa, bảo quản hàng hóa trong kho\n- Tổ chức việc kiểm soát chất lượng hàng nhập theo yêu cầu của Ban Giám Đốc hoặc khách hàng\n- Tổ chức thực hiện việc chuẩn bị đóng gói hàng hóa và bàn giao cho đối tác vận chuyển theo yêu cầu của khách hàng. Điều phối nhân lực của Kho thực hiện các công việc trên đạt hiệu quả cao nhất\n- Tiếp nhận và làm việc với khách hàng hoặc các bộ phận liên quan để giải quyết các phản ánh về số lượng, chất lượng và các công việc hành chính văn phòng liên quan\n- Thực hiện các báo cáo về số lượng hàng xuất, nhập, tồn cho Ban Giám đốc theo định kỳ hoặc đột xuất.",
	},
	{
		id: 3,
		title: "Chăm Sóc Khách Hàng",
		logo: "/images/thaco_logo.png",
		location: "Ho Chi Minh",
		salary: "Negotiable",
		isNew: true,
		description:
			"- Tiếp nhận và theo dõi các đơn hàng được chỉ định từ các bộ phận có liên quan\n- Cập nhật thông tin hàng hóa, giải đáp thắc mắc của khách hàng\n- Kiểm soát chi phí và thông báo cho bộ phận liên quan khi có phát sinh\n- Quản lý dữ liệu thông tin của khách hàng\n- Cập nhật hệ thống chi tiết đơn hàng và các chứng từ liên quan\n- Đảm bảo hoàn thành các nhiệm vụ được cấp trên giao",
	},
	{
		id: 4,
		title: "Hiện Trường",
		logo: "/images/thaco_logo.png",
		location: "Ho Chi Minh",
		salary: "Negotiable",
		isNew: true,
		description:
			"- Tiếp nhận chứng từ và các yêu cầu xử lý hàng hóa cho các đơn hàng xuất/nhập tại các kho bãi và cảng chính\n- Liên hệ với khách hàng để hoàn thành các thủ tục hải quan theo tình chất mỗi lô hàng\n- Thực hiện cân, đo, đếm và kiểm soát hàng hóa sau khi nhà máy vận chuyển đến sân bay/cảng\n- Báo cáo các số liệu chính xác về cho bộ phận văn phòng và cập nhật các tình huống hàng hóa bất thường, hư hỏng nếu có",
	},
	{
		id: 5,
		title: "Kinh Doanh",
		logo: "/images/thaco_logo.png",
		location: "Ho Chi Minh",
		salary: "Negotiable",
		isNew: true,
		description:
			"- Phát triển mạng lưới đại lý & các đối tác ăn mới với các đại lý\n- Phát triển khách hàng bao gồm khách hàng mới và đại lý mới\n- Đạt mục tiêu\n- Hỗ trợ các đối tác để có các dịch vụ trọn trú nhất\n- Tiếp tục chăm sóc hậu mãi, phối hợp với các bộ phận khác của công ty để giải quyết thắc mắc, khiếu nại, và đề xuất của khách hàng nếu có",
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
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 w-full h-full z-0">
					<Image
						src="/images/career.jpg"
						alt="Career Banner"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-primary/70 pointer-events-none" />
				</div>
				<div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-5xl mx-auto">
						<div className="flex flex-col items-center">
							<div className="w-12 sm:w-16 h-1 bg-secondary mb-3 sm:mb-4 rounded" />
							<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
								Why working with us
							</h1>
							<p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-0 leading-relaxed max-w-4xl">
								THACO xác định NHÂN SỰ PHÙ HỢP là 1 trong 5 trụ cột chính yếu,
								là nguồn lực quan trọng tạo nên Nền tảng quản trị tối ưu và sự
								pát triển bền vững của THACO & các Tập đoàn thành viên. THACO
								kông ngừng nỗ lực tạo nên môi trường làm việc kỷ luật, văn hóa
								và đề cao tính Nhân văn. Tại đây mỗi nhân viên được quan tâm tạo
								điều kiện để rèn luyện, phát triển bản thân, thăng tiến trong sự
								nghiệp; thông qua THACO đóng góp, cống hiến cho sự phát triển
								của đất nước. Văn hóa THACO thể hiện tính đại diện của một doanh
								nghiệp không chỉ ở sản phẩm hay thương hiệu, mà còn thể hiện ở
								mỗi nhân sự thông qua cách ứng xử trong công việc và đời sống
								hàng ngày, với phương châm "Mỗi nhân sự là một đại sứ của thương
								hiệu".
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Job List Section */}
			<section className="py-8 sm:py-10 md:py-12 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
					<div className="border-b pb-2 mb-4 sm:mb-6 flex items-center">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
							We Have {jobs.length} Jobs For You
						</h2>
					</div>
					<div className="space-y-4 sm:space-y-6">
						{jobs.map((job) => (
							<div
								key={job.id}
								className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 sm:p-6 relative"
							>
								<div className="flex items-start">
									{/* Logo */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4">
										<Image
											src={job.logo}
											alt={job.id}
											width={64}
											height={64}
											className="object-contain rounded"
										/>
									</div>
									{/* Info */}
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											{job.isNew && (
												<span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded mr-1">
													New
												</span>
											)}
											<span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
												{job.title}
											</span>
										</div>
										<div className="text-xs sm:text-sm text-gray-500 mb-1">
											{job.company}
										</div>
										<div className="flex flex-wrap items-center gap-2 text-xs mb-1">
											<span className="text-red-500 font-medium">
												{job.salary}
											</span>
											<span className="text-gray-400">|</span>
											<span className="text-gray-600">
												{job.location}
											</span>
										</div>
									</div>
									{/* Toggle Button */}
									<button
										className={`absolute top-3 sm:top-4 right-3 sm:right-4 text-blue-400 hover:text-blue-600 transition transform ${
											openJob === job.id ? "rotate-180" : ""
										}`}
										onClick={() => handleToggle(job.id)}
										aria-label="Toggle job description"
									>
										<svg
											width="24"
											height="24"
											className="sm:w-7 sm:h-7"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<path
												d="M6 9l6 6 6-6"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
								{/* Job Description Dropdown */}
								<div
									className={`transition-all duration-300 overflow-hidden ${
										openJob === job.id
											? "max-h-screen mt-3 sm:mt-4 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="text-gray-700 text-xs sm:text-sm bg-gray-50 rounded p-3 sm:p-4 border border-gray-100">
										<div className="whitespace-pre-line leading-relaxed">
											{job.description}
										</div>
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
