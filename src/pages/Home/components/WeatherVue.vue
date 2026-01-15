<template>
  <div class="weather-view">
    <div class="city">
      <img src="../../../assets/weather/location.svg" :width=iconSize />
      <span class="name">{{ weather.city }}</span>
    </div>
    <div class="weather">
      <img src="../../../assets/weather/temperature.svg" :width=iconSize />
      <span>{{ weather.temperature }}°</span>
      <span>{{ weather.weather }}</span>
    </div>
    <div class="wind">
      <img src="../../../assets/weather/windpower.svg" :width=iconSize />
      <span>{{ weather.windpower }}</span>
      <span>{{ weather.winddirection }}</span>
    </div>
    <div class="humidity">
      <img src="../../../assets/weather/humidity.svg" :width=iconSize />
      <span>{{ weather.humidity }}</span>
    </div>
    <div class="reporttime">
      <img src="../../../assets/weather/time.svg" :width=iconSize />
      <span>{{ weather.reporttime }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { WeatherLive } from "../../../types/weather";

const iconSize="15px"
const props = defineProps({
  weather: {
    type: Object as PropType<WeatherLive>,
    default: () => ({}),
  },
});
</script>
<style scoped lang="scss">
.weather-view {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #3170a6;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.167);
  background: linear-gradient(
    rgb(154, 238, 227),
    rgb(47, 217, 226),
    rgb(77, 170, 216)
  );
  backdrop-filter: blur(10px);
  opacity: 0.7;
  padding: 10px 5px;
  color: rgb(248, 249, 249);
  user-select: none;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }

  .city,
  .weather,
  .wind,
  .humidity,
  .reporttime {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .city {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;

    font-size: large;
    font-weight: 600;
  }

  .weather,
  .wind,
  .humidity,
  .reporttime {
    span {
      margin: 0 10%;
    }
  }

  .weather {
    font-size: x-large;
    margin: 10px 5px;
    // justify-content: center;
  }
  .wind,
  .humidity,
  .reporttime {
    margin: 5px;
    font-size: medium;
  }

  .reporttime {
    font-size: xx-small;
    position: relative;
    margin-top: 5%;
  }
}
</style>
