// TrafficChart.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const TrafficChart = () => {
	// State for dataset visibility
	// const [visible, setVisible] = useState({
	// 	direct: true,
	// 	referral: true,
	// 	search: true,
	// 	social: true,
	// 	paid: true,
	// });

	// State for selected time range
	const [timeRange, setTimeRange] = useState("6M");

	// Full dataset (representing all-time data)
	const fullData = {
		labels: ["Oct 19", "Nov 19", "Dec 19", "Jan 20", "Feb 20", "Mar 20"],
		datasets: [
			{
				label: "Direct",
				data: [20000, 22000, 25000, 30000, 40000, 45000],
				borderColor: "blue",
				backgroundColor: "rgba(0, 0, 255, 0.1)",
				fill: true,
				// hidden: !visible.direct,
			},
			{
				label: "Referral",
				data: [10000, 15000, 18000, 21000, 25000, 28000],
				borderColor: "green",
				backgroundColor: "rgba(0, 255, 0, 0.1)",
				fill: true,
				// hidden: !visible.referral,
			},
			{
				label: "Search",
				data: [5000, 7000, 10000, 12000, 14000, 16000],
				borderColor: "purple",
				backgroundColor: "rgba(128, 0, 128, 0.1)",
				fill: true,
				// hidden: !visible.search,
			},
			{
				label: "Social",
				data: [8000, 9000, 11000, 13000, 15000, 17000],
				borderColor: "red",
				backgroundColor: "rgba(255, 0, 0, 0.1)",
				fill: true,
				// hidden: !visible.social,
			},
			{
				label: "Paid",
				data: [2000, 3000, 4000, 5000, 6000, 7000],
				borderColor: "gray",
				backgroundColor: "rgba(128, 128, 128, 0.1)",
				fill: true,
				// hidden: !visible.paid,
			},
		],
	};

	// Filtered data based on selected time range
	const getFilteredData = () => {
		let labels, datasets;

		switch (timeRange) {
			case "6M":
				labels = fullData.labels.slice(-3);
				datasets = fullData.datasets.map((dataset) => ({
					...dataset,
					data: dataset.data.slice(-3),
				}));
				break;
			case "12M":
				labels = fullData.labels.slice(-6);
				datasets = fullData.datasets.map((dataset) => ({
					...dataset,
					data: dataset.data.slice(-6),
				}));
				break;
			case "All":
				labels = fullData.labels;
				datasets = fullData.datasets;
				break;
			default:
				labels = fullData.labels.slice(-3);
				datasets = fullData.datasets.map((dataset) => ({
					...dataset,
					data: dataset.data.slice(-3),
				}));
				break;
		}

		return { labels, datasets };
	};

	// Chart options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Visits",
				},
			},
			x: {
				title: {
					display: true,
					text: "Time Period",
				},
			},
		},
	};

	// // Handle checkbox change
	// const handleCheckboxChange = (dataset) => {
	// 	setVisible((prev) => ({
	// 		...prev,
	// 		[dataset]: !prev[dataset],
	// 	}));
	// };

	// Handle time range change
	const handleTimeRangeChange = (range) => {
		setTimeRange(range);
	};

	return (
		<div style={{ width: "80%", margin: "auto", textAlign: "end" }}>
			{/* Time Range Buttons */}
			<div className="time-range-buttons">
				<button
					onClick={() => handleTimeRangeChange("6M")}
					className={timeRange === "6M" ? "active" : ""}
				>
					6M
				</button>
				<button
					onClick={() => handleTimeRangeChange("12M")}
					className={timeRange === "12M" ? "active" : ""}
				>
					12M
				</button>
				<button
					onClick={() => handleTimeRangeChange("All")}
					className={timeRange === "All" ? "active" : ""}
				>
					All Time
				</button>
			</div>

			{/* Visibility Checkboxes */}
			{/* <div className="checkboxes">
				<label>
					<input
						type="checkbox"
						checked={visible.direct}
						onChange={() => handleCheckboxChange("direct")}
					/>
					Direct
				</label>
				<label>
					<input
						type="checkbox"
						checked={visible.referral}
						onChange={() => handleCheckboxChange("referral")}
					/>
					Referral
				</label>
				<label>
					<input
						type="checkbox"
						checked={visible.search}
						onChange={() => handleCheckboxChange("search")}
					/>
					Search
				</label>
				<label>
					<input
						type="checkbox"
						checked={visible.social}
						onChange={() => handleCheckboxChange("social")}
					/>
					Social
				</label>
				<label>
					<input
						type="checkbox"
						checked={visible.paid}
						onChange={() => handleCheckboxChange("paid")}
					/>
					Paid
				</label>
			</div> */}

			{/* Line Chart */}
			<Line data={getFilteredData()} options={options} />
		</div>
	);
};

export default TrafficChart;
