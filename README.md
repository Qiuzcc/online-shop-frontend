# online-shop-frontend

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Vue-online-shop上手实践

### 一、后端API

该部分由Express框架完成搭建，经过Postman测试，没有问题。

#### 1、地址

**数据交互地址前缀**：http://localhost:3000/api/v1

**生产商数据交互地址**：

| 地址               | 访问类型 | 功能               | 处理函数 |
| ------------------ | -------- | ------------------ | -------- |
| /manufacturers     | get      | 获取所有厂商数据   | all      |
| /manufacturers/:id | get      | 获取指定id厂商数据 | byId     |
| /manufacturers     | post     | 创建新的厂商数据   | create   |
| /manufacturers/:id | put      | 修改指定id厂商数据 | update   |
| /manufacturers/:id | delete   | 删除指定id厂商     | remove   |

**产品数据交互地址**：

| 地址          | 访问类型 | 功能                   | 处理函数 |
| ------------- | -------- | ---------------------- | -------- |
| /products     | get      | 获取所有商品信息数据   | all      |
| /products     | post     | 增加新的商品数据       | create   |
| /products/:id | get      | 获取指定id商品信息数据 | byId     |
| /products/:id | put      | 修改指定id商品信息数据 | update   |
| /products/:id | delete   | 删除指定id商品信息     | remove   |



#### 2、数据Model

**生产厂商Model：Manufacturer**

| 变量名 | 类型                           | 说明 |
| ------ | ------------------------------ | ---- |
| id     | mongoose.Schema.Types.ObjectId | ID   |
| name   | String                         | 名称 |

**产品Model：Product**

| 变量名       | 类型                           | 说明         |
| ------------ | ------------------------------ | ------------ |
| id           | mongoose.Schema.Types.ObjectId | ID           |
| name         | String                         | 名称         |
| image        | String                         | 图片Url      |
| price        | Number                         | 价格         |
| description  | String                         | 描述         |
| manufacturer | mongoose.Schema.Types.ObjectId | 对应厂商的ID |



### 二、页面框架

#### 1、框架文件解读

| src/main.js             | Vue应用的入口<br />导入Vue类、App组件、router路由、el<br />生成Vue实例 |
| ----------------------- | ------------------------------------------------------------ |
| **index.html**          | 根据main.js里面的el属性，找到index.html中id为app的DOM节点<br />把视图模板编译挂载到这个DOM节点<br />浏览器直接访问的页面 |
| **src/App.vue**         | 主组件文件，其它Vue组件挂载到这个文件上<br />< router-view/> 是预留的位置，通过Router路由将Vue组件挂载到这个位置<br />.vue文件包含了三部分：`template`、`script`、`style`，分别对应Web三剑客的HTML、JavaScript、CSS |
| **src/router/index.js** | Vue组件的路由文件<br />导入Vue类、Router类、和需要用到的Vue组件<br />注册页面跳转路由（指定地址跳转到指定的组件），每个页面是一个{path,name,component}对象<br />path是地址、name是页面在vue-router中的标识符、component是页面渲染用到的组件 |



#### 2、页面路由

- 商品列表页

|          | 涉及文件            | 描述                          |
| -------- | ------------------- | ----------------------------- |
| 链接入口 | App.vue             | "/"                           |
| 路由规则 | src/router/index.js | path:"/"<br />component: Home |
| 页面     | src/pages/Home.vue  |                               |

- 购物车页

|          | 涉及文件            | 描述                              |
| -------- | ------------------- | --------------------------------- |
| 链接入口 | App.vue             | "/cart"                           |
| 路由规则 | src/router/index.js | path:"/cart"<br />component: Cart |
| 页面     | src/pages/Cart.vue  |                                   |

- 后台管理页

|          | 涉及文件                                                     | 描述                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 链接入口 | App.vue                                                      | "/admin"                                                     |
| 路由规则 | src/router/index.js                                          | {path:'/admin' component: Index}<br />以下是children数组<br />{path:'' component: Products}<br />{path:'new/product' component:NewProduct}<br />{path:'new/manufacturer' component:NewManufacturer}<br />{path:'edit/product/:id' component: EditProduct}<br />{path:'edit/manufacturer/:id' component: EditManufacturer} |
| 页面     | src/pages/admin/Index.vue<br />src/pages/Products.vue<br />src/pages/admin/NewProduct.vue<br />src/pages/admin/NewManufacturer.vue<br />src/pages/admin/EditProduct.vue<br />src/pages/admin/EditManufacturer.vue |                                                              |



#### 3、升级嵌套路由

注意：

- children属性里面的path开头不要再加`/`
- 在Index.vue文件中要预留一个`<router-view>`，用来挂载子children里面的子组件



### 三、页面内容（语法基础）

#### 1、props

父组件向嵌套子组件传递数据的参数

**使用方式：**

在父组件中，其中`:manufacturers`为子组件中的变量名，`"manufacturers"`双引号内部的是父组件中的变量

```ABAP
import ProductForm from '@/components/ProductForm.vue';

<ProductForm :manufacturers="manufacturers" />
```

在子组件中，在`script`部分声明`props`参数

```vue
<template>
<!-- 模板部分 -->
</template>

<script>
export default {
  props: ['manufacturers'],
}
</script>
```



#### 2、methods

视图层触发事件

```vue
<template>
    <form @submit.prevent="saveProduct">
        <div class="form-group new-button">
          <button class="button">Add Product</button>
        </div>
    </form>
</template>

<script>
export default {
    ...
    methods: {
        saveProduct() {
            ...
        }
    }
}
</script>
```



#### 3、v-on

视图层绑定响应事件的语法，通过 `v-on` 的方式接管了之前在 HTML 中 `onEvent`

HTML的写法

```html
<div onclick="alert('I love tuture')">
Hello Tuture
</div>
```

v-on的写法

```html
<div v-on:click="alert('I love tuture')">
Hello Tuture
</div>
```

v-on的简化写法，使用`@`替代`v-on:`

```html
<div @click="alert('I love tuture')">
Hello Tuture
</div>
```

**禁用浏览器默认行为，自定义处理逻辑**

传统的写法，在函数逻辑里面e.preventDefault()禁用

```vue
<div onclick="saveProduct()">
Hello Tuture

<script>
var saveProduct = function (e) {
  e.preventDefault();

  // do something you like
}
</script>
```

Vue简化的写法，作为绑定事件的属性 .prevent来处理

```vue
<template>
  <div @click.prevent="saveProduct">
  Hello Tuture
  </div>
</template>
```



#### 4、v-bind

动态绑定属性值的语法

```vue
<template>
<option v-bind:id="_id"  v-bind:value="value" />
</template>

<script>
export default {
  data: { _id: '1', value: "Xiaomi" },
}
</script>
```

简化写法，去掉`v-bind`，只保留`:`

```vue
<template>
<option :id="_id"  :value="value" />
</template>
```



#### 5、v-model

双向绑定数据的语法

```vue
<template>
<input
  type="text" placeholder="Name"  v-model="name"/>
</template>

<script>
export default {
  data: { name: 'ProductForm' },
}
</script>
```

通过申明 `v-mode` 将此 input 的值和我们在 Vue 实例中的 `model` 的 `name` 属性进行了双向绑定。即当 data 中的 `name` 发生变化，input 的值也会跟着变化，当 input 的值发生变化，我们 data 中的 `name` 的值也会被修改，这一切都是自动发生的



#### 6、v-for

视图中循环的语法

```vue
<template v-for="manufacturer in manufacturers">
  <option :value="manufacturer._id" :selected="manufacturer._id == model._id">{{manufacturer.name}}</option>
</template>
```

其中`manufacturers`是.vue文件中的变量



#### 7、v-if

- v-if
- v-else
- v-else-if

```vue
<span v-if="isEditing">Update Product</span>
<span v-else>Add Product</span>

<script>
export default {
  data: { isEditing: false },
}
</script>
```



### 四、页面内容（实现）

#### 1、商品和厂商的Form组件

首先分别编写新建“厂商”和新建”产品“的页面，`NewManufacturer.vue`和`NewProduct.vue`。

这两个页面可以分别复用一个`ManufacturerForm.vue`和`ProductForm.vue`组件，【新建】和【更新】可以复用同一个组件

|                      | ManufacturerForm                         | ProductForm                                                  |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **props**            | model，manufacturer对象<br />isEditing， | model，product对象<br />manufacturers，厂商数据、用于下拉选项<br />isEditing， |
| **调用父组件函数名** | save-manufacturer                        | save-product                                                 |
| **子组件返回值**     | model，manufacturer对象                  | model，product对象                                           |

props接收来自父组件的三个参数：`model`、`manufacturers`、`isEditing`

在 `saveProduct` 内部，我们调用了父组件的 `save-product` 方法，并把修改后的 `this.model` 变量内容传给父组件



#### 2、商品和厂商的New页面

- NewProduct.vue
- NewManufacturer.vue



#### 3、Cart页面

- Cart.vue



### 五、子组件

#### 1、商品和厂商的Form组件

|                      | ManufacturerForm                         | ProductForm                                                  |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **props**            | model，manufacturer对象<br />isEditing， | model，product对象<br />manufacturers，厂商数据、用于下拉选项<br />isEditing， |
| **调用父组件函数名** | save-manufacturer                        | save-product                                                 |
| **子组件返回值**     | model，manufacturer对象                  | model，product对象                                           |

#### 2、ProductList

| props                      | 无          |
| -------------------------- | ----------- |
| 调用父组件的函数名（emit） | 无          |
| 调用Mutation（commit）     | ADD_TO_CART |
| 子组件返回值               | product     |

#### 3、ProductButton

| props                      | product                                                      |
| -------------------------- | ------------------------------------------------------------ |
| 调用父组件的函数名（emit） | 无                                                           |
| 调用Mutation（commit）     | ADD_TO_CART，返回product<br />REMOVE_FROM_CART，返回productId |

#### 4、ProductItem

商品信息组件

| props                      | product |
| -------------------------- | ------- |
| 调用父组件的函数名（emit） | 无      |
| 调用Mutation（commit）     | 无      |

#### 5、ProductDetail

商品详情页组件

| props | product |
| ----- | ------- |



### 六、全局对象Store

前置工作：需要安装状态管理容器 Vuex

第二步，创建`src/store/index.js` **Store容器**

第三步，整合Vue和Vuex，具体来说就是在main.js文件中import新建的Vuex实例

- **state变量：**

| 变量          | 类型    | 描述                               |
| ------------- | ------- | ---------------------------------- |
| cart          | []      | 保存购物车商品                     |
| showLoader    | boolean | 标记，是否在加载中，在Action中使用 |
| product       | {}      | 临时保存单个商品                   |
| products      | []      | 保存所有商品                       |
| manufacturer  | {}      | 临时保存单个厂商                   |
| manufacturers | []      | 保存所有厂商                       |

- **mutation修改方法**

Mutation 是定义在 Vuex Store 的 `mutation` 属性中的一系列形如 `(state, payload) => newState` 的函数，用于响应从 Vue 视图层发出来的事件或动作。`state` 就是我们 Vuex Store 中保存的 `state`，`payload` 是被响应的那个事件或动作携带的参数，然后我们通过 `payload` 的参数来操作现有的 `state`，返回新的 `state`，通过这样的方式，我们就可以响应修改 Vuex Store 中保存的全局状态。

**CartMutations**

| 函数             | 描述         |
| ---------------- | ------------ |
| ADD_TO_CART      | 加入购物车   |
| REMOVE_FROM_CART | 从购物车移除 |

**ProductMutations**

| 函数                  | 描述                                                        |
| --------------------- | ----------------------------------------------------------- |
| ALL_PRODUCTS_SUCCESS  | 将后端API获取的所有商品信息保存到store对象的products数组中  |
| PRODUCT_BY_ID_SUCCESS | 将后端API获取的指定id商品信息保存到store对象的product对象中 |

**ManufacturerMutations**

| 函数 | 描述 |
| ---- | ---- |
|      |      |



### 七、Action远程数据

Action 是定义在 Vuex Store 的 `action` 属性中的一系列方法，用于响应从 Vue 视图层分发出来的事件或动作，一个 Action 是形如 `(context, payload) => response.data` 的函数

```javascript
productById(context, payload) {
  return response.data;	// 进行异步操作，从后端获取远程数据并返回
}
```

- 函数名 `productById` 用于对应从视图层里面分发出的事件或动作的名称

- `context` 指的是 `action` 的上下文，与 `store` 实例具有相同的方法和属性，因此我们可以调用 `context.commit` 提交一个 `mutation`，或者通过 `context.state` 和 `context.getters` 来获取 `state` 和 `getters`，但是 `context` 对象又不是 `store` 实例本身
- `payload` 是分发时携带的参数，然后我们通过 `payload` 中的参数来进行异步操作，从而获取后端响应数据并返回。这样我们就可以根据用户的操作同步更新后端数据，并将后端响应的数据提交给 `mutation`，然后利用 `mutation` 进行本地数据更新。



### 八、Getters

就像计算属性一样，`getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

`Getter` 也是定义在 Vuex Store 的 `getter` 属性中的一系列方法，用于获取本地状态中的数据。我们可以通过两种方式访问 `getter`，一个是通过属性访问，另一个是通过方法访问：

- **属性访问**的方式为 `this.$store.getter.allProducts`，对应的 `getter` 如下：

```javascript
allProducts(state) {
    // 返回本地中的数据
    return state.products;
}
```

- **方法访问**的方式为 `this.$store.getter.productById(id)`，对应的 `getter` 如下：

```javascript
productById: (state, getters) => id => {
      //通过传入的id参数进行一系列操作并返回本地数据
      return state.product;
  }
```

我们可以看到 `Getter` 可以接受两个参数：`state` 和 `getters`，`state` 就表示本地数据源；我们可以通过第二个参数 `getters` 获取到不同的 `getter` 属性。





### 九、遇见问题

父组件给子组件传参，传不进去。EditManufacturer给ManufacturerForm传参数传不过去

- 原因：不是没有传过去，而是在script标签内部没有正确地使用props里面的变量。
- **在script内部引用props里的变量需要在前面加上this.**



另外，**在实践中获取到一条有用的经验是**，在需要用到数据的组件里面都可以使用created初始化函数先判断Store里面是否有数据，如果没有及时向后端请求数据，以免造成因为数据为null引发的bug



利用父组件给子组件传递参数的方式有一个缺点：如果是在子组件页面点击”刷新“的话，从父组件传入的参数会被刷新掉，因此页面将会因为没有数据来源而产生错误，导致无法正常显示。解决办法：改为借助Store全局对象来传递参数，即父组件将参数保存到Store，子组件再从Store读取



重构UI代码过程中，`ProductForm`因为接受来自`EditProducrt`中`computed`属性的`product`参数，在表单中无法直接编辑。教程给的解决办法是在`ProductForm`中的data属性里面建立一个`modelData`空对象，然后在`created()`状态初始化函数中将父组件传入的`product`浅拷贝给`modelData`。

而`manufacturers`因为我自己将其修改为直接在`ProductForm`里面获取，所以并没有出现教程中提到的`name`和`id`属性缺失的问题（教程将`manufacturers`也作为组件参数传递）。

因此，我想到另外一种解决方案，就是`EditProducrt`（包括`NewProducrt`也要修改）传递`ID`参数给`ProductForm`，在`ProductForm`中根据`ID`向`Store`请求`Product`对象（不能使用`id`参数，因为这会和html便签的id属性冲突）

**经过实践测试，发现行不通，表单无法编辑**



“商品”列表和“厂商”列表经常会出现排版bug，即切换了几次页面之后或者刷新之后，排版会前后不一致。经过检查，发现**组件之间的`style`属性之间是相通的，不同组件之间会串用同名选择器**。所以一定要注意这点，以免造成不必要且隐藏的bug



### 十、保持数据一致

- 如何保持本地数据和数据库数据一致

答：增、删、改的操作，在向后端API提交请求并成功返回之后，同步修改本地数据



- 如果不从首页开始进入，而是从某个具体的页面直接“刷新”，如何保证页面有数据可用？

1. 首先，修改页面直接点击“刷新”无法保证有数据可用，因为修改页面的数据是从父组件来的，没有经过父组件就无法传入相应的参数，也无法直接从后端或本地Store请求数据，因为数据根据父组件的内容决定的
2. 如果不是由父组件决定的数据，那么可以在`created()`初始化函数中判断本地数据是否为空，是否存在需要的数据，然后据此决定是否从后端请求数据。如果从后端请求了数据，流程是先将后端数据——本地Store对象——组件所需数据



- **浏览器触发“刷新”事件后，会发生什么**



### 十一、组件嵌套结构

<img src="https://qiuzcc-typora-images.oss-cn-shenzhen.aliyuncs.com/images/2022/202206231117466.png" alt="online-shop组件嵌套图" style="zoom: 80%;" />



### 十二、容器化应用

#### 1、安装Docker

[Windows Docker 安装 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/windows-docker-install.html)

上面的教程有一个问题，它使用的虚拟机是Hyper-V，而Hyper-V是window专业版、教育版、企业版才有的功能，偏偏我的电脑是家庭版



#### 2、安装WSL

[旧版 WSL 的手动安装步骤 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

