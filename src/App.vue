<template>
  <div class="container">
    <ul class="wrapper">
      <li
        class="item"
        v-for="iconComponentName in iconNames"
        :key="iconComponentName"
        title="点击复制"
        @click="copyName(iconComponentName)"
      >
        <component
          :is="iconComponentName"
          :size="36"
        />
        <span class="component-name">{{ iconComponentName }}</span>
      </li>
      <Icon29Leaf color="#000"></Icon29Leaf>
    </ul>
  </div>
</template>

<script>
  import 'normalize.css'
  export default {
    name: "App",
    data () {
      return {
        iconNames: this.ICON_NAMES,
      }
    },
    methods: {
      copyName(name) {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', name)
        document.body.appendChild(input)
        input.setSelectionRange(0, 9999)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
        this.$message.success('复制成功')
      }
    }
  };
</script>

<style lang="css">
  body{
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
  .container {
    max-width: 1200px;
    margin: 60px auto;
  }
  .wrapper {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    margin: 0;
    padding: 15px 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    width: 120px;
    text-align: center;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    color: #486491;
    transition: background-color 0.2s;
  }
  .item:hover{
    background-color: #e7ecf3;
  }
  .component-name {
    display: block;
    text-align: center;
    font-size: 11px;
    letter-spacing: 1px;
    margin-top: 20px;
  }
</style>
