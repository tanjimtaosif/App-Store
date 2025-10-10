import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import TrendingApps from "./TrendingApps.jsx";
import Statistics from "./Statistics.jsx";


const Home = () => {
    const appsData = useLoaderData();

    return (
        <main className="w-full bg-white">
            <Banner />
            <Statistics />
            <TrendingApps data={appsData} />
        </main>
    );
};

export default Home;
