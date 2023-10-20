import { Image, Heading } from "@chakra-ui/react";

const DForecast = ({ forecast }) => {
    return (
        <div className="w-[450px] bg-color-accent rounded-lg font-roboto text-[#333]">
            <div className="flex justify-between items-center mx-8 mt-8 mb-4">
                <div className="font-roboto mt-2">
                    <Heading size="md">
                        {forecast?.location?.name},{" "}
                        {forecast?.location?.country}
                    </Heading>
                    <Heading size="sm">
                        {forecast?.current?.condition?.text}
                    </Heading>
                </div>
                <Image
                    width="25%"
                    src={forecast?.current?.condition?.icon}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
            </div>
            <div className="mx-8 mb-8 flex justify-between items-start">
                <div className="w-full text-[50px] font-bold my-auto">
                    <h1>{forecast?.current?.temp_c}°C</h1>
                </div>
                {/* Feels like 26°C
                    Wind 2.59 m/s
                    Humidity 77%
                    Pressure 1012 hPa */}
                <div className="w-full">
                    <div className="flex justify-between">
                        <span>Feels like</span>
                        <span className="font-semibold">
                            {forecast?.current?.feelslike_c}°C
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Wind</span>
                        <span className="font-semibold">
                            {forecast?.current?.wind_mph} m/h
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Humidity</span>
                        <span className="font-semibold">
                            {forecast?.current?.humidity}%
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Pressure</span>
                        <span className="font-semibold">
                            {forecast?.current?.pressure_in}hPa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DForecast;
