<template>
  <div class="w-full h-full" style="display: flex; scrollbar-width: none">
    <div class="left-timeline">
      <TimelineVue
        :activated="activated"
        :data="activities"
        @activated="timelineItemClick"></TimelineVue>
    </div>
    <div class="main-content">
      <ArticleBriefVue v-for="i in 10"></ArticleBriefVue>
    </div>
    <div class="right-others">
      <WeatherVue :weather="weather"></WeatherVue>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getWeather } from "../../api/weather";
import type { WeatherLive } from "../../types/weather";
import { getCurrentLoc } from "../../utils/getCurrentLoc";
import WeatherVue from "./components/WeatherVue.vue";

const weather = ref<WeatherLive>();
const getWeatherData = async () => {
  const data: { lat: number; lon: number } = (await getCurrentLoc()) as any;
  try{
    const weatherData = (await (
    await getWeather(
      parseFloat(data?.lat.toFixed(6)),
      parseFloat(data.lon.toFixed(6))
    )
  ).data) as WeatherLive;
  weather.value = weatherData;
  }
  catch(err){
    weather.value = WeatherVue.default;
  }
  
};
getWeatherData();

const activated = ref(-1);
const timelineItemClick = (index: number) => {
  activated.value = index;
};
const activities = [
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success 的花火大会后代号活动i和我活动爱活动",
    timestamp: "2018-04-11",
  },
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
];
</script>
<style scoped lang="scss">
.left-timeline {
  width: 15%;
  height: 100%;
  margin-bottom: 20px;
}

.main-content {
  width: 65%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: none;
  // border-right: $primary 1px solid;
  // border-left: $primary 1px solid;
}

.right-others {
  width: 20%;
  height: 100%;
  padding-top: 5%;
}
</style>
