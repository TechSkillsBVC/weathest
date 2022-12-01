import { ComponentProps } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import WeatherType from "../types/WeatherType";

type FontistoProps = ComponentProps<typeof Fontisto>;
type WeatherIconProps = { type: WeatherType } & Omit<FontistoProps, "name">;

export default function WeatherIcon(props: WeatherIconProps) {
  const { type, ...rest } = props;
  const name = getIconName(type);

  return <Fontisto {...rest} name={name} />;
}

function getIconName(type: WeatherType): FontistoProps["name"] {
  switch (type) {
    case WeatherType.SUNNY:
      return "day-sunny";
    case WeatherType.PARTLY_SUNNY:
      return "day-cloudy";
    case WeatherType.CLOUDY:
      return "cloudy";
    case WeatherType.RAINY:
      return "rain";
    case WeatherType.THUNDERSTORM:
      return "lightnings";
    case WeatherType.SNOW:
      return "snow";
    default:
      throw Error(`Unexpected argument "${type}"`);
  }
}
