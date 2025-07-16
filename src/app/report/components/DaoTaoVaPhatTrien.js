"use client";
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Try importing ChartDataLabels differently
let ChartDataLabels;
try {
  ChartDataLabels = require('chartjs-plugin-datalabels');
} catch (e) {
  console.warn('ChartDataLabels plugin not found');
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
      title: "Nhân viên hỗ trợ kinh doanh",
      color: "from-red-400 to-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      content: "Hỗ trợ các hoạt động kinh doanh cơ bản, thực hiện các công việc theo hướng dẫn, học hỏi và phát triển kỹ năng chuyên môn.",
      skills: ["Kỹ năng cơ bản", "Theo dõi hướng dẫn", "Học hỏi chuyên môn"]
    },
    {
      id: 2,
      title: "Nhân viên kinh doanh",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      content: "Thực hiện các hoạt động kinh doanh, tiếp xúc khách hàng, xử lý đơn hàng và báo cáo kết quả công việc.",
      skills: ["Tiếp xúc khách hàng", "Xử lý đơn hàng", "Báo cáo kết quả"]
    },
    {
      id: 3,
      title: "Trưởng nhóm kinh doanh",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      content: "Quản lý nhóm nhân viên kinh doanh, phân công công việc, theo dõi kết quả và hỗ trợ phát triển đội ngũ.",
      skills: ["Quản lý nhóm", "Phân công công việc", "Phát triển đội ngũ"]
    },
    {
      id: 4,
      title: "Trưởng phòng kinh doanh",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      content: "Quản lý toàn bộ hoạt động kinh doanh của phòng, xây dựng chiến lược và định hướng phát triển.",
      skills: ["Quản lý phòng ban", "Xây dựng chiến lược", "Định hướng phát triển"]
    },
    {
      id: 5,
      title: "Giám đốc kinh doanh",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content: "Điều hành toàn bộ hoạt động kinh doanh của công ty, xây dựng chiến lược dài hạn và chịu trách nhiệm về kết quả kinh doanh.",
      skills: ["Điều hành toàn bộ", "Chiến lược dài hạn", "Trách nhiệm kết quả"]
    }
  ];

  const toggleExpanded = (levelId) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const chartData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Số lượng ứng viên được tuyển dụng sau chương trình TTS',
        data: [50, 35, 20],
        backgroundColor: '#22D3EE',
        borderColor: '#22D3EE',
        borderWidth: 0,
      },
      {
        label: 'Số lượng ứng viên còn lại mỗi năm',
        data: [10, 5, 3],
        backgroundColor: '#0891B2',
        borderColor: '#0891B2',
        borderWidth: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
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
          align: 'end',
          anchor: 'end',
          color: '#000',
          font: {
            weight: 'bold',
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
          color: '#E5E5E5',
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Đào tạo và phát triển tại THACO
          </h1>

          {/* Single Table Container */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <tbody>
                  {/* Header Row */}
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Loại chương trình
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số đề tài/chương trình
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số bài viết/học viên
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Tổng số học viên/chương trình hoàn tất
                    </th>
                  </tr>
                  {/* First Data Row */}
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
                  {/* Second Data Row */}
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

          {/* Centered Table Caption */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Bảng 3.1. Số lượng chương trình đào tạo trực tuyến của THACO năm 2022
            </p>
          </div>

          {/* Chart Container */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "650px", height: "400px" }}>
              <Bar data={chartData} options={options} />
            </div>
          </div>

          {/* Chart Description */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 3.2: Biểu đồ thống kê số lượng học viên tham gia chương trình đào tạo MTP 2021 - 2023
            </p>
          </div>

          {/* Career Progression Staircase */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Lộ trình phát triển nghề nghiệp tại THACO
            </h2>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-inner">
              {/* Staircase */}
              <div className="flex items-end justify-center space-x-2 pb-20">
                {careerLevels.map((level, index) => (
                  <div key={level.id} className="flex flex-col items-center relative">
                    {/* Step */}
                    <div 
                      className={`bg-gradient-to-br ${level.color} relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 rounded-t-lg shadow-md`}
                      style={{
                        width: '160px',
                        height: `${120 + (index * 40)}px`,
                        marginBottom: `${index * 20}px`
                      }}
                      onClick={() => toggleExpanded(level.id)}
                    >
                      {/* Level Number - Fixed positioning */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 z-10">
                        <span className="text-sm font-bold text-gray-700">{level.id}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 pt-8 h-full flex flex-col justify-center items-center text-center">
                        <h3 className="text-sm font-bold text-white leading-tight mb-4 flex-1 flex items-center">
                          {level.title}
                        </h3>
                        
                        {/* Expand/Collapse Button */}
                        <div className="mt-auto">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                            <svg 
                              className={`w-5 h-5 text-white transition-transform duration-300 ${
                                expandedLevel === level.id ? 'rotate-180' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content - Fixed positioning */}
                    {expandedLevel === level.id && (
                      <div 
                        className={`absolute ${level.bgColor} ${level.borderColor} border-2 rounded-xl shadow-lg p-6 w-80 z-20 animate-slideDown`}
                        style={{
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          marginTop: '1rem'
                        }}
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">Mô tả công việc:</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {level.content}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">Kỹ năng cần có:</h4>
                            <div className="flex flex-wrap gap-2">
                              {level.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                          onClick={() => setExpandedLevel(null)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section Description */}
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                Hình 3.3: Lộ trình phát triển nghề nghiệp tại THACO
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
