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
					<StatsCard title="Total Visits" value="2000" color="blue" />
					<StatsCard title="New Users" value="60" color="green" />
					<StatsCard title="Sales" value="5.000.000đ" color="purple" />
				</div>
				<div className="chart-container">
					<TrafficChart />
				</div>
			</main>
		</div>
	);
};

export default AdminPage;
