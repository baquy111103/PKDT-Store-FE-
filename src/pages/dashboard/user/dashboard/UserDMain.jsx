import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserStatsQuery } from '../../../../redux/features/stats/statsApi';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import UserStats from './UserStats';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserDMain = () => {
    const { user } = useSelector((state) => state.auth);
    const { data: stats, error, isLoading } = useGetUserStatsQuery(user?.email);

    if (isLoading) {
        return <p className="text-center text-gray-500">Loading user stats...</p>;
    }

    if (!stats) {
        return <p className="text-center text-gray-500">No stats available.</p>;
    }

    // Prepare data for the bar chart
    const data = {
        labels: ['Total Payments', 'Total Reviews', 'Total Purchased Products'],
        datasets: [
            {
                label: 'User Stats',
                data: [stats.totalPayments, stats.totalReviews, stats.totalPurchasedProducts],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        if (tooltipItem.label === 'Total Payments') {
                            return `Total Payments: $${tooltipItem.raw.toFixed(2)}`;
                        }
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
                <p className="text-gray-500">Hi, {user?.username}! Welcome to your user dashboard.</p>
            </div>
            <UserStats stats={stats} />
            <div className="mb-6">
                <Bar data={data} options={options} />
            </div>

        </div>
    );
};

export default UserDMain;
