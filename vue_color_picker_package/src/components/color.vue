<template>
  <div>
    <div class="rgb">
      <label for="red">r</label>
      <input type="number" v-model="rgb.r " id="red" min="0" max="255" />

      

      <label for="red"> g</label>
      <input type="number" v-model="rgb.g" id="red" min="0" max="255" />

      <label for="red">b</label>
      <input type="number" id="red" v-model="rgb.b" min="0" max="255" />

    </div>
    <div class="rgb-box" :style="{background:rgb_value}">
      {{rgb_value}}
    </div>
  </div>
</template>

<script>
export default {
  name: "colorPick",
  data() {
    return {
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
      rgb_value: "rgba(0,0,0)",
    };
  },
  methods: {},

  filters:{
  
  },
  watch: {
    rgb: {
      handler(val) {
        this.rgb_value = `rgb(${val.r},${val.g},${val.b})`;

        // Object.keys(val).map((item) => {
        //   if (val[item] < 0) {
        //     console.log("hh");
        //   }
        // });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* chrome */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 火狐浏览器 */
input[type="number"] {
  -moz-appearance: textfield;
}

.rgb {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  
}

.rgb-box{
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: 5vh;
  color: #fff;
  text-align: center;
  line-height: 200px;
}
</style>
>
