export type ImageAndDescriptionByTimeOfDay = {
  day: {
    description: string;
    image: string;
  };
  night: {
    description: string;
    image: string;
  };
};

export type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99;

export const descriptionsAndImages: Record<
  WeatherCode,
  ImageAndDescriptionByTimeOfDay
> = {
  0: {
    day: {
      description: "Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  1: {
    day: {
      description: "Mainly Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Mainly Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02d@2x.png",
    },
    night: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02n@2x.png",
    },
  },
  3: {
    day: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03d@2x.png",
    },
    night: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03n@2x.png",
    },
  },
  45: {
    day: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  48: {
    day: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  51: {
    day: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  53: {
    day: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  61: {
    day: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  63: {
    day: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  65: {
    day: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  71: {
    day: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  73: {
    day: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  75: {
    day: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  77: {
    day: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  81: {
    day: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  82: {
    day: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  86: {
    day: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  95: {
    day: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  99: {
    day: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
};

export const weatherInterpretations: Record<WeatherCode, string> = {
  0: "Clear sky",
  1: "Mainly clear, partly cloudy, and overcast",
  2: "Mainly clear, partly cloudy, and overcast",
  3: "Mainly clear, partly cloudy, and overcast",
  45: "Fog and depositing rime fog",
  48: "Fog and depositing rime fog",
  51: "Drizzle: Light, moderate, and dense intensity",
  53: "Drizzle: Light, moderate, and dense intensity",
  55: "Drizzle: Light, moderate, and dense intensity",
  56: "Freezing Drizzle: Light and dense intensity",
  57: "Freezing Drizzle: Light and dense intensity",
  61: "Rain: Slight, moderate and heavy intensity",
  63: "Rain: Slight, moderate and heavy intensity",
  65: "Rain: Slight, moderate and heavy intensity",
  66: "Freezing Rain: Light and heavy intensity",
  67: "Freezing Rain: Light and heavy intensity",
  71: "Snow fall: Slight, moderate, and heavy intensity",
  73: "Snow fall: Slight, moderate, and heavy intensity",
  75: "Snow fall: Slight, moderate, and heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight, moderate, and violent",
  81: "Rain showers: Slight, moderate, and violent",
  82: "Rain showers: Slight, moderate, and violent",
  85: "Snow showers slight and heavy",
  86: "Snow showers slight and heavy",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight and heavy hail",
  99: "Thunderstorm with slight and heavy hail",
};
