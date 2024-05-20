import {
  weatherInterpretations,
  descriptionsAndImages,
  WeatherCode,
} from "@/descriptions";
import Head from "next/head";

export default function WeatherPage({ weather }: any) {
  if (!weather) {
    return (
      <div className="flex justify-center my-20">No available weather data</div>
    );
  }
  const timeOfDay = !!weather.current?.is_day ? "day" : "night";
  const timeOfDayStr = !!weather.current?.is_day ? "Today's" : "Tonight's";

  const weatherCode = weather.current?.weather_code as WeatherCode;
  const imageUrl = descriptionsAndImages[weatherCode][timeOfDay].image;
  const imageAltText =
    descriptionsAndImages[weatherCode][timeOfDay].description;

  return (
    <>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div>
          <h1 className="text-2xl mb-4">{`${timeOfDayStr} weather`}</h1>
          <p className="text-l">Bryggen, Bergen </p>
          <div className="flex gap-4">
            <span className="text-2xl md:text-4xl content-center">
              {`${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`}
            </span>
            <img src={imageUrl} alt={imageAltText} />
          </div>
          <p>{weatherInterpretations[weatherCode]}</p>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current=temperature_2m,is_day,weather_code&forecast_days=1"
  );
  const data = await res.json();

  return {
    props: {
      weather: data,
    },
  };
}
