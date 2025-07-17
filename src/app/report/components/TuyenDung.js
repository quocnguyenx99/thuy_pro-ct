"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function TuyenDung() {
  // Dữ liệu cho biểu đồ 2.1 - tổng quan về công tác tuyển dụng
  const recruitmentData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Nhu cầu tuyển dụng",
        data: [2150, 2300, 4600],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Số lượng ứng tuyển",
        data: [3440, 3450, 5980],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
      {
        label: "Số lượng trúng tuyển",
        data: [1376, 1380, 2392],
        backgroundColor: "#0F4C75", // darker blue
        borderColor: "#0F4C75",
        borderWidth: 0,
      },
      {
        label: "Số lượng ký HĐLĐ",
        data: [1238, 1104, 1674],
        backgroundColor: "#164E63", // darkest blue
        borderColor: "#164E63",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 2.2 - hiệu quả của công tác tuyển dụng
  const efficiencyData = {
    labels: [
      "Ứng tuyển/Nhu cầu tuyển",
      "Ký HĐLĐ/Số ứng tuyển",
      "Ký HĐLĐ/ Nhu cầu tuyển",
    ],
    datasets: [
      {
        label: "2021",
        data: [160, 36, 64],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "2022",
        data: [150, 32, 60],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
      {
        label: "2023",
        data: [130, 28, 52],
        backgroundColor: "#0F4C75", // darker blue
        borderColor: "#0F4C75",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 2.3 - tổng hợp chi phí tuyển dụng
  const costData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Vietnamwork, Careerbuilder...",
        data: [28, 47, 56],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "THACO, Facebook, Linkedin...",
        data: [138, 145, 153],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 2.4 - tổng hợp hoạt động tuyển dụng
  const activityData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Tỷ lệ tăng chi phí tuyển dụng (%)",
        data: [100, 116, 109],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Tỷ lệ ứng viên biết đến THACO thông qua kênh khác (%)",
        data: [10, 11, 11],
        backgroundColor: "#0891B2", // medium blue
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
        maxWidth: 900,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 13,
          },
          boxWidth: 12,
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
          return value.toLocaleString(); // Format số với dấu phẩy
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 7000,
        ticks: {
          stepSize: 1000,
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

  // Options cho biểu đồ hiệu quả
  const efficiencyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        maxWidth: 900,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 13,
          },
          boxWidth: 12,
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
          return value.toLocaleString(); // Format số với dấu phẩy
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 50,
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

  // Options cho biểu đồ chi phí
  const costOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        maxWidth: 900,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 13,
          },
          boxWidth: 12,
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
          return value.toLocaleString();
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 250,
        ticks: {
          stepSize: 50,
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

  // Options cho biểu đồ hoạt động
  const activityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        maxWidth: 900,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 13,
          },
          boxWidth: 12,
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
          return value.toLocaleString();
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          stepSize: 20,
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Tuyển dụng tại THACO
          </h1>

          {/* Chart Container */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "900px", height: "400px" }}>
              <Bar data={recruitmentData} options={options} />
            </div>
          </div>

          {/* Chart Description */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 2.1. Tổng quan về công tác tuyển dụng
            </p>
          </div>

          {/* Chart Container 2 - Efficiency */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "900px", height: "400px" }}>
              <Bar data={efficiencyData} options={efficiencyOptions} />
            </div>
          </div>

          {/* Chart Description 2 */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 2.2. Hiệu quả của công tác tuyển dụng
            </p>
          </div>

          {/* Chart Container 3 - Cost */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "900px", height: "400px" }}>
              <Bar data={costData} options={costOptions} />
            </div>
          </div>

          {/* Chart Description 3 */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 2.3. Tổng hợp chi phí tuyển dụng của THACO
            </p>
          </div>

          {/* Chart Container 4 - Activity */}
          <div className="bg-white p-6 rounded-lg flex justify-center">
            <div style={{ width: "900px", height: "400px" }}>
              <Bar data={activityData} options={activityOptions} />
            </div>
          </div>

          {/* Chart Description 4 */}
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-gray-700 flex items-center justify-center">
              Biểu đồ 2.4. Tổng hợp hoạt động tuyển dụng của THACO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
