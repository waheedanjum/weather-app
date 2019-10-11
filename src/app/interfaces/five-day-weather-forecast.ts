export interface FiveDayWeatherForecast {
    cod?: number;
    message?: string;
    cnt?: number;
    list?: Collections[];
    city?: City[];
}

export interface Collections {
    dt: Destination;
    main?: Temprature[];
    weather?: Weather[];
    clouds?: Cloud[];
    wind?: Wind[];
    rain?: Rain[];
    snow?: Snow[];
    sys?: Sys[];
    dt_txt: Date;
}

export interface Destination {
    dt: number;
}

export interface Temprature {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface Weather {
    details: WeatherDetails[];
}

export interface WeatherDetails {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Cloud {
    all: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Rain {
    details: any;
}

export interface Snow {
    details: any;
}

export interface Sys {
    pod: string;
}

export interface City {
    id: number;
    name: string;
    coord: Coordinate[];
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface Coordinate {
    lat: number;
    lon: number;
}



