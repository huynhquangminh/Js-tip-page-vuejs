<template>
  <div class="nav">
    <nav class="nav_content">
        <a class="nav_content__pagelink">Javascrip</a>
        <a class="nav_content__pagelink">React</a>
        <a class="nav_content__pagelink">Angular</a>
        <a class="nav_content__pagelink">VueJs</a>
        <a class="nav_content__pagelink">More</a>
    </nav>
</div>
</template>
<script>

export default {
  name: 'Nav'
}
</script>
<style lang="scss">
.nav {
  background-color: #242424;
  width: 100%;
  height: 60px;
  &_content {
    margin: 0 auto;
    padding-top: 20px;
    width: 330px;
    float: none;
    font-weight: 500;
    font-size: 14px;
    &__pagelink {
      margin-right: 43px;
      line-height: 1.5;
      color: #f8f8f4;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color: #f9d732;
      }
    }
  }
}
</style>