import DHeader from "./DHeader";
import { axiosInstance } from "../../utils/axios.js";
import DForecast from "./DForecast";
import { useEffect, useState } from "react";
import DForecastDays from "./DForecastDays";

const DHome = () => {
    const [currentForecast, setCurrentForecast] = useState([]);
    const [forecastDays, setForecastDays] = useState([]);
    const forecast = async () => {
        await axiosInstance
            .get("/forecast.json", {
                params: {
                    q: "Yogyakarta",
                    days: 7,
                },
            })
            .then((response) => {
                const { forecast, ...others } = response.data;
                setCurrentForecast(others);
                setForecastDays(forecast.forecastday);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        forecast();
    }, []);

    return (
        <>
            <DHeader />
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 justify-center items-center mt-10">
                    <DForecast forecast={currentForecast} />
                    <DForecastDays data={forecastDays} />
                </div>
            </div>
        </>
    );
};

export default DHome;
