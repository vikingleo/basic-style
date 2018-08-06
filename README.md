![npm:versuib](https://img.shields.io/npm/v/basic-style.svg?style=flat)
![lang:scss](https://img.shields.io/badge/lang-scss-red.svg)
![license:MIT](https://img.shields.io/npm/l/express.svg)

## 使用
### Step 1
```
npm install basic-style
```
### Step 2
```
import 'basic-style/scss/basic-style.scss'
```

## 概述
为了方便调用一些常用的样式而写，应用场景如：

flex实现移动端中`文本`和`图标` `居中对齐`并 `两端对齐`，需要在css中写上：
``` css
.cell{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
```
而为此封装一个组件，又少了灵活性，万一内边距有其他要求呢？
所以我把每一个flex的常用样式定义为独立样式名，调用起来的时候就像这样：
```html
<div class="d-flex align-items-center justify-content-between">
    <div>这里是文本</div>
    <div> > </div><!-- 假设下面这个是图标 -->
</div>
```
这样就能实现需要另外定义的`cell`了。假如这一部分要是手写，有可能只适用于一处。

### 先看目录
```
├─basic-style.scss      //集成文件
├─ui                    //存放一些通用UI
| ├─control             //比如按钮、文本框，单个表单组件这些都是算一个控件
| |    ├─btn.scss       //按钮
| |    └input.scss      //文本框
| ├─components          //组件，多个控件、控件定制
| |     ├─badge.scss    //徽章
| |     └navbar.scss    //导航
├─text                  //文字处理
|  ├─font-weight.scss   //文字加粗
|  ├─text-align.scss    //文字排版，左中右
|  ├─text-overflow.scss //文字超出显示省略号
|  ├─text-size.scss     //文字大小
|  └text-type.scss      //
├─layout                //布局类
|   ├─flex.scss         //flex盒模型布局
|   ├─float.scss        //浮动类
|   └layout.scss        //全局布局类，可快速解决一些特定的布局
├─color                 //颜色处理
|   ├─bg-colors.scss    //背景颜色
|   ├─gradient.scss     //渐变背景颜色
|   └text-colors.scss   //文字颜色
├─basic                 //基础文件，存放一些比较基础的样式，例如初始化等此类不可过分定制但又经常需要的东西
|   ├─border.scss       //边框，默认就是1px的灰色边框
|   ├─clearfix.scss     //清除浮动
|   ├─display.scss      //块的模式，常用就那三个flex,block,inline-block
|   ├─init.scss         // 标签初始化
|   ├─margin.scss       // 外边距
|   ├─overflow.scss     //超出内容框的处理
|   ├─padding.scss      //内边距
|   ├─position.scss     //绝对定位
|   ├─tag-size.scss     //标签大小，经常用来设置头像大小等
|   ├─_color.config.scss    //颜色配置，包含颜色变量、颜色map等
|   ├─_global.config.scss   //全局配置，包含各个部件的变量设置
|   ├─_inputConfig.scss     //配置传入，用于
|   └_mixins.config.scss    //mixin方法
```
