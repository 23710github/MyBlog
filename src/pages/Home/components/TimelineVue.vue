<template>
  <div class="timeline">
    <el-timeline>
      <el-timeline-item
        :class="activated == index ? 'timeline-item-activate' : 'timeline-item-normal'"
        v-for="(activity, index) in data"
        :key="index"
        :timestamp="activity.timestamp"
        :color="activated == index ? 'yellow' : ''"
        :size="activated == index ? 'large' : 'normal'"
        type="success"
        :hollow="true"
        @click="emit('activated', index)"
        >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
    activated: number;
    data: any[];
  }>();

  const emit=defineEmits(['activated'])


</script>
<style scoped lang="scss">
.timeline {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-top: 40px;

  .timeline-item-activate {
    font-size: medium;
    font-weight: 500;
  }
  .timeline-item-normal {
    font-size: small;
    font-weight: 300;
    cursor: pointer;
    &:hover {
      font-size: medium;
      font-weight: 500;
    }
  }

}
 
</style>
