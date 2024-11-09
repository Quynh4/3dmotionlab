// AdminPage.js
import React from "react";
import Sidebar from "../components/admin-cpn/Sidebar";
import Header from "../components/admin-cpn/Header";
import StatsCard from "../components/admin-cpn/StatsCard";
import TrafficChart from "../components/admin-cpn/TrafficChart";

const AdminPage = () => {
	return (
		<div className="admin-page">
			<Sidebar />
			<main className="main-content">
				<Header />
				<div className="stats-cards">
					<StatsCard title="Total Visits" value="120K" color="blue" />
					<StatsCard title="New Users" value="1.5K" color="green" />
					<StatsCard title="Sales" value="$50K" color="purple" />
					<StatsCard title="Bounce Rate" value="25%" color="red" />
				</div>
				<div className="chart-container">
					<TrafficChart />
				</div>
			</main>
		</div>
	);
};

export default AdminPage;
