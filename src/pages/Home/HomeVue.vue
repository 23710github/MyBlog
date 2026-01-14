<template>
  <div class="w-full h-full " style="display: flex;scrollbar-width: none;">
    <div class="left-timeline" >
        <TimelineVue :activated="activated" :data="activities" @activated="timelineItemClick" ></TimelineVue>
    </div>
    <div class="main-content">
        <ArticleBriefVue v-for="i in 10"></ArticleBriefVue>
    </div>
    <div class="right-others"></div>
  </div>
</template>
<script setup lang="ts">


const activated=ref(-1)
const timelineItemClick = (index:number) => {
  activated.value=index
}
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
  
}

</style>
