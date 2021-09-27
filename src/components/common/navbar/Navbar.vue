<template>
  <div class="navbar">
    <div class="navleft">
      <slot name="navleft"></slot>
    </div>
    <div class="navcenter">
      <slot name="navcenter"></slot>
    </div>
    <div class="navright">
      <slot name="navright"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 2px 1px rgba(100, 100, 100, 0.2);
  position: fixed;
  top: 0;
  z-index: 9;
}
.navleft,
.navright {
  width: 60px;
  /* background-color: blue; */
}

.navcenter {
  flex: 1;
}
</style>