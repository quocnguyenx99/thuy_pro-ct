"use client";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

let ChartDataLabels;
try {
  ChartDataLabels = require("chartjs-plugin-datalabels");
} catch (e) {
  console.warn("ChartDataLabels plugin not found");
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ...(ChartDataLabels ? [ChartDataLabels] : [])
);

export default function DaoTaoVaPhatTrien() {
  const [expandedLevel, setExpandedLevel] = useState(null);

  const careerLevels = [
    {
      id: 1,
      title: "Nhân viên",
      subtitle: "1-2 năm kinh nghiệm",
      color: "from-red-400 to-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      content:
        "• Thực thi các công việc được cấp trên giao phó;\n• Phối hợp với các nhân viên khác để hoàn thành nhiệm vụ.",
    },
    {
      id: 2,
      title: "Trưởng nhóm",
      subtitle:
        "Có kinh nghiệm ít nhất 3 năm và quản lý nhóm nhỏ (< 6n người) trong vòng 1 năm",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      content:
        "• Đảm nhận một nhóm hàng, 1 nhóm khách hàng hoặc 1 công việc mang tính chuyên môn cao;\n• Ra quyết định trong phạm vi được ủy quyền;\n• Tạo tinh thần làm việc nhóm.",
    },
    {
      id: 3,
      title: "Giám sát",
      subtitle:
        "Có kinh nghiệm ít nhất 5 năm và quản lý nhóm nhỏ (< 15 người) trong vòng 3 năm",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      content:
        "• Hoạch định, tổ chức, giám sát 1 lĩnh vực hoạt động của phòng ban; Quản lý ngân sách được giao; Kèm cặp và đánh giá nhân viên trực thuộc.",
    },
    {
      id: 4,
      title: "Trưởng phòng",
      subtitle:
        "Có kinh nghiệm ít nhất 8 năm và quản lý nhóm (>15 người) trong vòng 5 năm",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      content:
        "• Lập kế hoạch cho phòng ban mình; Quản lý ngân sách, kết hợp với các phòng ban để hoàn thành nhiệm vụ;\n• Phân công, giao việc và kiểm soát tiến độ; Đánh giá hiệu quả từng nhóm thành viên; Đào tạo, kèm cặp, huấn luyện để phát triển đội ngũ.",
    },
    {
      id: 5,
      title: "Giám đốc",
      subtitle:
        "Có kinh nghiệm ít nhất 10 năm và 5 năm điều hành ở vị trí tương đương",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content:
        "• Lập chiến lược ngắn hạn và trung hạn cho các bộ phận phụ trách; Quản lý ngân sách; Phân bố nguồn lực; Thiết lập sơ đồ tổ chức và các mối quan hệ trong phòng ban;\n• Đánh giá hiệu quả và mục tiêu cần đạt; Đào tạo và nâng tầm đội ngũ kế thừa.",
    },
  ];

  const toggleExpanded = (levelId) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const chartData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Số lượng ứng viên được tuyển dụng sau chương trình TTS",
        data: [50, 35, 20],
        backgroundColor: "#22D3EE",
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Số lượng ứng viên còn lại mỗi năm",
        data: [10, 5, 3],
        backgroundColor: "#0891B2",
        borderColor: "#0891B2",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: false,
      },
      ...(ChartDataLabels && {
        datalabels: {
          display: true,
          align: "end",
          anchor: "end",
          color: "#000",
          font: {
            weight: "bold",
            size: 12,
          },
          formatter: (value) => {
            return value.toLocaleString();
          },
          offset: 4,
        },
      }),
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 60,
        ticks: {
          stepSize: 10,
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E5E5E5",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 0,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Đào tạo và phát triển tại THACO
          </h1>

          {/* First Table Container - Chương trình nội bộ */}
          <div className="bg-white p-6 rounded-lg mb-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <tbody>
                  {/* Header Row */}
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Chương trình nội bộ
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số đề tài
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số bài viết
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số học viên đăng ký tham gia
                    </th>
                  </tr>
                  {/* Data Row */}
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chương trình nội bộ
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      25
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      250
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      2407
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Second Table Container - Chương trình liên kết với website khác */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <tbody>
                  {/* Header Row */}
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Chương trình liên kết với website khác
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số chương trình đăng ký
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số học viên đăng ký tham gia
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số chương trình hoàn tất
                    </th>
                  </tr>
                  {/* Data Row */}
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chương trình liên kết với website khác
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      20
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1200
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      12
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart Container */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div className="w-full max-w-[650px]" style={{ height: "400px" }}>
              <Bar data={chartData} options={options} />
            </div>
          </div>

          {/* Chart Description */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 3.1. Biểu đồ thống kê số lượng học viên tham gia chương
              trình đào tạo MTP 2021 - 2023
            </p>
          </div>

          {/* Career Progression Staircase */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Lộ trình phát triển nghề nghiệp tại THACO
            </h2>

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 rounded-xl shadow-inner">
              {/* Staircase */}
              <div className="flex items-end justify-center space-x-1 md:space-x-2 pb-20 overflow-x-auto">
                {careerLevels.map((level, index) => (
                  <div
                    key={level.id}
                    className="flex flex-col items-center relative flex-shrink-0"
                  >
                    {/* Step */}
                    <div
                      className={`bg-gradient-to-br ${level.color} relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 rounded-t-lg shadow-md`}
                      style={{
                        width: "120px",
                        height: `${100 + index * 30}px`,
                        marginBottom: `${index * 15}px`,
                      }}
                      onClick={() => toggleExpanded(level.id)}
                    >
                      {/* Level Number - Fixed positioning */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 z-10">
                        <span className="text-sm font-bold text-gray-700">
                          {level.id}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4 pt-8 h-full flex flex-col justify-center items-center text-center">
                        <h3 className="text-sm font-bold text-white leading-tight mb-2">
                          {level.title}
                        </h3>
                        {level.subtitle && (
                          <p className="text-xs text-white/90 mb-4">
                            {level.subtitle}
                          </p>
                        )}

                        {/* Expand/Collapse Button */}
                        <div className="mt-auto">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                            <svg
                              className={`w-5 h-5 text-white transition-transform duration-300 ${
                                expandedLevel === level.id ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content - Fixed positioning */}
                    {expandedLevel === level.id && (
                      <div
                        className={`absolute ${level.bgColor} ${level.borderColor} border-2 rounded-xl shadow-lg p-4 md:p-6 w-72 md:w-80 z-20 animate-slideDown`}
                        style={{
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          marginTop: "1rem",
                        }}
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3 text-center">
                              {level.title}
                            </h4>
                            <div className="text-gray-600 text-sm leading-relaxed">
                              {level.content.split("\n").map((line, index) => (
                                <p key={index} className="mb-2">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Close button */}
                        <button
                          onClick={() => setExpandedLevel(null)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
