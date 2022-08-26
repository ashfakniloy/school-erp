// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function DoughnutChart({ male, female }) {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [male, female],
        // data: [200, 48],
        fill: true,
        borderColor: ["transparent"],
        backgroundColor: ["#36A2EB", "#FF6384"],
        // pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        // pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-gradient-to-t from-emerald-400 to-emerald-100 p-5 shadow-lg">
      <h1 className="my-5 text-xl">Students</h1>
      <div className="h-[350px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DoughnutChart;
