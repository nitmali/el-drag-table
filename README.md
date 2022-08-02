# el-drag-table


## 表格行拖拽

### stackblitz
* https://stackblitz.com/edit/el-drag-table

### 演示 
* https://el-drag-table.stackblitz.io
<iframe height="0" width="0" src="https://stackblitz.com/edit/el-drag-table?file=index.js" scrolling="no" border="0" frameborder="no"  framespacing="0" allowfullscreen="true">  </iframe>

<iframe height="400" width="100%" src="https://el-drag-table.stackblitz.io/" scrolling="no" border="0" frameborder="no"  framespacing="0" allowfullscreen="true">  </iframe>

### 使用方法
```JavaScript
// 在main.js引入
import elDragTable from '@/directive/el-drag-table/el-drag-table
Vue.use(elDragTable)
```
```JavaScript
<!-- row-key要写唯一字段， index是序号字段 -->
<el-table
  v-el-drag-table:index="tableData"
  row-key="id"
  :data="tableData"
>
  <el-table-column prop="demo" label="demo" />
</el-table>
```
