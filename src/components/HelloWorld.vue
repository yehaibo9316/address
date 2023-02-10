<!--
 * @Author: Y_seaboy
 * @Date: 2021-05-15 16:04:48
 * @LastEditTime: 2021-05-16 00:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div v-for="item in textData" :key="item.id" class="text-box">
      <span v-if="measureInputText(item.text, '14px Microsoft YaHei', 300)">{{
        item.text
      }}</span>
      <el-tooltip
        v-else
        :content="item.text"
        placement="top"
        :enterable="false"
      >
        <span>{{ item.text }}</span>
      </el-tooltip>
      <h1>测试代码</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      textData: [
        {
          id: 1,
          text: "我是测试文本啊啊啊啊啊啊啊啊",
        },
        {
          id: 2,
          text: "我是测试文本啊啊啊啊啊啊啊啊我是测试文本啊啊啊啊啊啊啊啊",
        },
      ],
    };
  },
  methods: {
    /**
     * @description:'通过画布计算未知文本内容的宽度，判断是否超过指定的宽度'
     * @param {*} value   文本内容
     * @param {*} font    文本字号和字体(相同文本在不同字号和字体下，宽度也是不一样的)
     * @param {*} inputWidth  指定宽度范围
     * @return {*}
     */
    measureInputText(value, font, inputWidth) {
      const cans = document.createElement("canvas");
      if (cans.getContext) {
        const ctx = cans.getContext("2d");
        ctx.font = font;
        console.log(ctx.measureText(value));
        return ctx.measureText(value).width < inputWidth;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hello {
  font-size: 14px;
  font-family: Microsoft YaHei;
}
.text-box {
  margin-bottom: 80px;
  span {
    display: inline-block;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
