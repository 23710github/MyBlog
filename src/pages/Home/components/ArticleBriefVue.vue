<template>
  <div class="article-brief">
    <div class="brief-top">
      <div class="left-main">
        <span class="article-title"
          >这是文章标题啦啦啦啦啦啦啦啦dadawdwdwadwadwa</span
        >
        <span class="article-content"
          >这是文章内容嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎还带回到武汉动物i和欧萨活动爱活动奥委会到达好我i回到武汉oh到我的好玩的后
          回到i我回到武汉到位i活动哇活动i哦耦合到我回到武汉打我等哈我i大哈我的和大达瓦达瓦达瓦达瓦达瓦达瓦达瓦大屋顶
          大大我的娃大碗大碗大碗的大大伟大伟大放大达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦达瓦
        </span>
      </div>
      <div class="right-image">
        <img
          src="https://kirigaya.cn/api/storage/image/fd44543b-1988-44c1-b292-c0e938197032.jpg" />
      </div>
    </div>
    <div class="brief-foot">
      <span class="article-date">Jan 01,2026 23:00</span>
      <span
        ><span class="article-label" v-for="i in 3"
          ><el-tag size="small">Python</el-tag></span
        ></span
      >
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.article-brief {
  width: 600px;
  height: 180px;
  border: 1px solid #0599e346;
  border-bottom: 3px solid #4189ef;
  border-radius: 10px;
  margin: 20px 0;
  user-select: none;
  background: linear-gradient(135deg ,#7edddd25 0%,#69d7cb2a 100%) ;
  

  &:hover {
    position: relative;
    box-shadow: 0px 0px 10px 5px rgba(24, 37, 37, 0.275);
    // bottom: 5px;
    translate: 0 -5px;
    transition: all 0.5s;
    cursor: pointer;
  }
  .brief-top,
  .brief-foot {
    display: flex;
  }

  .brief-top {
    height: 80%;
    .left-main {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px 5px;
      color: #418ff5;

      .article-title {
        font-size: x-large;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-indent: 1em;
        font-weight: 500;
        
      }
      .article-content {
        width: 100%;
        font-size: medium;
        text-indent: 2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        padding: 0 10px;
        color: rgb(44, 44, 48);
      }
    }

    .right-image {
      width: 30%;
      height: 100%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100%;
        width: fit-content;
        object-fit: cover;
        border-radius: 5px;
        position: relative;
        border: 1px solid rgba(19, 182, 215, 0.5);
        top: 10%;
      }
    }
  }

  .brief-foot {
    width: 70%;
    height: 20%;
    display: flex;
    padding: 0 10px 5px;
    align-items: end;
    justify-content: space-between;

    .article-date {
      font-style: italic;
      font-weight: 400;
      color: #035956;
    }

    .article-label {
      margin: 0 5px;
    }
  }
}
</style>
