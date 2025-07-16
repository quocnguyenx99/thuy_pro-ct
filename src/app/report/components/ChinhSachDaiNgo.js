"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Import ChartDataLabels the same way as TuyenDung
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function ChinhSachDaiNgo() {
  // Data for salary framework chart - updated with actual values from table
  const salaryData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Lương cơ bản",
        data: [4472600, 4729400, 4729400],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Mức lương cao nhất",
        data: [270000000, 270000000, 283500000],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
      {
        label: "Mức lương trung bình",
        data: [39500000, 39500000, 45425000],
        backgroundColor: "#0F4C75", // darker blue
        borderColor: "#0F4C75",
        borderWidth: 0,
      },
      {
        label: "Mức lương thấp nhất",
        data: [7800000, 7800000, 8970000],
        backgroundColor: "#164E63", // darkest blue
        borderColor: "#164E63",
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
          if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + "M";
          } else if (value >= 1000) {
            return (value / 1000).toFixed(0) + "K";
          }
          return value.toLocaleString();
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 300000000,
        ticks: {
          stepSize: 50000000,
          font: {
            size: 12,
          },
          callback: function (value) {
            return value / 1000000 + "M";
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

  // Data for bonus ratio line chart - updated with actual values from table
  const bonusRatioData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Xuất sắc",
        data: [4, 2, 2],
        borderColor: "#22D3EE",
        backgroundColor: "#22D3EE",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Giỏi",
        data: [3.5, 1.75, 1.5],
        borderColor: "#0891B2",
        backgroundColor: "#0891B2",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Khá",
        data: [3, 1.5, 1.25],
        borderColor: "#0F4C75",
        backgroundColor: "#0F4C75",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Trung bình",
        data: [2.5, 1.25, 1],
        borderColor: "#164E63",
        backgroundColor: "#164E63",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const bonusRatioOptions = {
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
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        color: "#000",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => {
          return value.toFixed(1);
        },
        offset: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
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
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Chính sách đãi ngộ tại THACO
          </h1>

          {/* Chart Container */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "650px", height: "400px" }}>
              <Bar data={salaryData} options={options} />
            </div>
          </div>

          {/* Chart Description */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              Biểu đồ 4.1: Tổng hợp khung lương theo tiêu chí của THACO
            </p>
          </div>

          {/* Salary Comparison Table */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Vị trí
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Kinh nghiệm (năm)
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700 bg-blue-50">
                      Khung lương
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Thực tế tại THACO
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      Mặt bằng chung trên thị trường
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700"></th>
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700"></th>
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700 bg-blue-50">
                      Thấp nhất
                    </th>
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700 bg-blue-50">
                      Cao nhất
                    </th>
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700"></th>
                    <th className="border border-gray-400 px-4 py-2 text-center font-semibold text-gray-700"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chuyên viên Kế toán / Tài chính
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      3 - 5
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      880
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      600 - 750
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650 - 1000
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chuyên viên Nhân sự
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      3 - 5
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      900
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650 - 780
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650 - 1000
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chuyên viên Kinh doanh
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      4 - 6
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      700
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      700 - 900
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      650 - 1000
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Chuyên viên Chiến lược - Kế hoạch
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      4 - 6
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      780
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1100
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      700 - 1000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      800 - 1500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Caption */}
          <div className="text-center mb-4">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Bảng 4.2: So sánh khung lương trung bình của THACO so với mặt bằng
              chung trên thị trường (đơn vị tính: USD)
            </p>
          </div>

          {/* Source Note */}
          <div className="text-center mb-12">
            <p className="text-sm italic text-gray-600">
              Nguồn: Báo cáo Khảo sát lương của Vietnamworks, Adecco năm 2021
            </p>
          </div>

          {/* Benefits Summary Table */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Loại phụ cấp
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2021
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2022
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2023
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Ăn trưa
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      780,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      780,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      780,000
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Gửi xe
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      440,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      440,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      440,000
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Điện thoại (tùy cấp bậc)
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      200,000 - 500,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      200,000 - 500,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      200,000 - 500,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Caption 4.3 */}
          <div className="text-center mb-4">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Bảng 4.3: Tổng hợp các loại phụ cấp ở THACO
            </p>
          </div>

          {/* Source Note for Table 4.3 */}
          <div className="text-center mb-12">
            <p className="text-sm italic text-gray-600">
              Nguồn: Ban Nhân sự THACO
            </p>
          </div>

          {/* Employee Benefits Table 4.4 */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Các loại phúc lợi
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2021
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2022
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2023
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Thưởng Tết dương lịch
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1 triệu
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Thưởng 30/4 & 1/5
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Thưởng 2/9
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Mừng sinh nhật
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      500,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Du lịch
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      5 triệu / lần / năm
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Khám sức khỏe
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      2 lần / năm
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1 lần / năm
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      1 lần / năm
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Ngày hội gia đình
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      500,000
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Mừng cưới
                    </td>
                    <td
                      className="border border-gray-400 px-4 py-3 text-center text-gray-800"
                      colSpan="3"
                    >
                      Tùy cấp bậc (5 - 10 triệu)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Quốc tế Thiếu nhi
                    </td>
                    <td
                      className="border border-gray-400 px-4 py-3 text-center text-gray-800"
                      colSpan="3"
                    >
                      500,000 / bé (dưới 10 tuổi)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Caption 4.4 */}
          <div className="text-center mb-4">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Bảng 4.4: Những chế độ phúc lợi của nhân viên THACO (đơn vị tính:
              đồng)
            </p>
          </div>

          {/* Source Note for Table 4.4 */}
          <div className="text-center mb-12">
            <p className="text-sm italic text-gray-600">
              Nguồn: Ban Nhân sự THACO
            </p>
          </div>

          {/* Bonus Table 4.5 */}
          <div className="bg-white p-6 rounded-lg mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-700">
                      Các khoản thưởng
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2021
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2022
                    </th>
                    <th className="border border-gray-400 px-4 py-3 text-center font-semibold text-gray-700">
                      2023
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Thưởng Tết nguyên đán
                    </td>
                    <td
                      className="border border-gray-400 px-4 py-3 text-center text-gray-800"
                      colSpan="3"
                    >
                      Theo hệ số đánh giá
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-3 text-gray-800 font-medium">
                      Lương tháng 13
                    </td>
                    <td
                      className="border border-gray-400 px-4 py-3 text-center text-gray-800"
                      colSpan="3"
                    >
                      1 tháng lương thu nhập
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Caption 4.5 */}
          <div className="text-center mb-4">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Bảng 4.5: Những khoản thưởng không thường xuyên của THACO (đơn vị
              tính: đồng)
            </p>
          </div>

          {/* Source Note for Table 4.5 */}
          <div className="text-center mb-8">
            <p className="text-sm italic text-gray-600">
              Nguồn: Ban Nhân sự THACO
            </p>
          </div>

          {/* Bonus Ratio Line Chart */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "650px", height: "400px" }}>
              <Line data={bonusRatioData} options={bonusRatioOptions} />
            </div>
          </div>

          {/* Chart Description 4.6 */}
          <div className="text-center mb-8">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 4.6: Tỷ lệ thưởng hàng năm (đơn vị tính: tháng lương thu
              nhập)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
