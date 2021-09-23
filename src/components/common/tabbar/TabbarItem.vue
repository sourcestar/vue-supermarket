<template>
  <div class="tab-bar-item" v-bind:style="activedStyle" @click="itemClick">
    <div>
      <slot name="item-icon"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    "path": String,
    "activedColor": {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActived: false,
    }
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activedStyle() {
      return this.isActived ? { color: this.activedColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
@import "~@assets/css/font-awesome.min.css";
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 9px;
  line-height: 20px;
}
.actived {
  color: red;
}
</style>