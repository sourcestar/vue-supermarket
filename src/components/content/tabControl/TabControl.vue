<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ actived: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit("tabClick", index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.actived {
  color: var(--color-high-text);
}
.actived span {
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}
</style>