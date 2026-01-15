<template>
  <div style="width: 100vw; height: 100vh;position: relative;">
    <el-container class="h-full w-full">
      <el-header class="w-full" height="80px">
        <div class="w-full h-full header">
          <div class="left">
            <ul>
              <li
                :class="selected == item.index ? 'li-active' : null"
                v-for="item in menuItemsLeft"
                :key="item.name">
                <div @click="goto(item.path, item.index)">
                  <el-icon>
                    <component :is="item.icon"></component>
                  </el-icon>
                  <span>{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <el-input
              :clearable="true"
              placeholder="输入搜索的内容"
              size="large"
              style="width: 250px"
              v-model="searchText"
              inputmode="search"
              prefix-icon="Search"></el-input>
            <ul>
              <li
                :class="selected == item.index ? 'li-active' : null"
                v-for="item in menuItemsRight"
                :key="item.name">
                <div @click="goto(item.path, item.index)">
                  <el-icon>
                    <component :is="item.icon"></component>
                  </el-icon>
                  <span>{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main class="w-full h-full" style="scrollbar-width: none;">
        
      
    
        <router-view></router-view>
      </el-main>
      <OneVue
       style="position: absolute;width: 100%;height: 100%;z-index: -1;"></OneVue>
    </el-container>
    

  </div>
</template>
<script setup lang="ts">
import {
  Edit,
  HomeFilled,
  EditPen,
  Document,
  Briefcase,
  More,
  Message,
  User,
} from "@element-plus/icons-vue";
import router from "../router";
import OneVue from "../animates/weather/components/OneVue.vue";





const searchText = ref("");
const menuItemsLeft = [
  { name: "首页", path: "/home", icon: markRaw(HomeFilled), index: 0 },
  { name: "博客", path: "/blog", icon: markRaw(EditPen), index: 1 },
  { name: "知识库", path: "/knowledge", icon: markRaw(Document), index: 2 },
  { name: "工具箱", path: "/tools", icon: markRaw(Briefcase), index: 3 },
  { name: "其他", path: "/other", icon: markRaw(More), index: 4 },
  { name: "关于我", path: "/about", icon: markRaw(Message), index: 5 },
];

const selected = ref(0);
const menuItemsRight = [
  { name: "写什么", path: "/edit", icon: markRaw(Edit), index: 6 },
  { name: "登录", path: "/login", icon: markRaw(User), index: 7 },
];
const goto = (path: string, index: number) => {
  selected.value = index;
  router.push(path);
};

onMounted(() => {
  menuItemsLeft.forEach((item) => {
    if (router.currentRoute.value.path == item.path) {
      selected.value = item.index;
    }
  });
  menuItemsRight.forEach((item) => {
    if (router.currentRoute.value.path == item.path) {
      selected.value = item.index;
    }
  });
});
</script>
<style scoped lang="scss">
.el-header {
  padding: 0 40px;
  // background-color: $primary;
  background: linear-gradient(to right,#6ee8e2 0%,#fff ,#6ae2eb 100%);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    width: 50%;
    height: 100%;
    ul,
    li,
    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      width: 80px;
      height: 60px;
      color: rgb(37, 58, 60);
      user-select: none;
      span{
        font-size: small;
      }

      //   border: 1px solid;

      div {
        width: 80%;
        flex-direction: column;

        &:hover {
          color: #1743c8;
          cursor: pointer;
          
        }
      }
    }

    .li-active {
      background-color: #fff;
      color: $primary;
      border-radius: 5px;
      box-shadow: inset 0 0 2px 1.5px rgba(0, 0, 0, 0.5);
      color: #0fc378;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    ul,
    li,
    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      width: 80px;
      height: 60px;
      color: rgb(37, 58, 60);
      user-select: none;
      span{
        font-size: small;
      }

      //   border: 1px solid;

      div {
        width: 80%;
        flex-direction: column;

        &:hover {
          color: #1743c8;
          cursor: pointer;
        }
      }
    }

    .li-active {
      background-color: #fff;
      color: $primary;
      border-radius: 5px;
      box-shadow: inset 0 0 2px 1.5px rgba(0, 0, 0, 0.5);
      color: #0fc378;
    }
  }
}
.el-main {
  padding: 0;
  background-color: #cbe8e9a2;
}
</style>
