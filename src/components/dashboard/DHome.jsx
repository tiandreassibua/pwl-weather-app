import DHeader from "./DHeader";
import { axiosInstance } from "../../utils/axios.js";
import DForecast from "./DForecast";
import { useEffect, useState } from "react";
import DForecastDaysList from "./DForecastDaysList";

const DHome = () => {
    const [currentForecast, setCurrentForecast] = useState([]);
    const [forecastDays, setForecastDays] = useState([]);

    const forecast = async () => {
        try {
            const response = await axiosInstance.get("/forecast.json", {
                params: {
                    q: "Yogyakarta",
                    days: 7,
                },
            });

            const { forecast, ...others } = response.data;
            setCurrentForecast(others);
            setForecastDays(forecast.forecastday);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        forecast();
    }, []);

    return (
        <>
            <DHeader />
            <div className="container h-screen w-full mt-[-141px] mx-auto">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    <div className="mt-48">
                        <DForecast forecast={currentForecast} />
                    </div>
                    <div>
                        <DForecastDaysList data={forecastDays} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DHome;
