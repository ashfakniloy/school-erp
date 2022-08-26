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
import { Bar } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
import Chart from "chart.js/auto";

function BarChart() {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );

  // Chart.register(...registerables);

  const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2],
        fill: true,
        borderColor: ["transparent"],
        backgroundColor: ["#589BD2"],
        // pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        // pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2],
        fill: true,
        borderColor: ["transparent"],
        backgroundColor: ["#EC7E31"],
        // pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        // pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className=" bg-gradient-to-t from-green-400 to-green-100 p-5 shadow-lg">
      <h1 className="my-5 text-xl">Expenses</h1>
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
