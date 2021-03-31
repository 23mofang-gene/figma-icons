## 自动化部署图标

#### 安装
`npm install 23mofang-icons --save`

#### 使用
##### Web端
```js
<template>
  <div>
    <Icon29HomeSolid :size='60' color="#DB7093"/>
  </div>
</template>

<script>
import { Icon29HomeSolid } from '23mofang-icons'
export default {
  data() {
    return {}
  }
}
</script>
```

##### APP端
```js
import MultiColorIcon from '@components/MultiColorIcon'

<MultiColorIcon name="29_home_solid" size={29} color="#DB7093" />
```



