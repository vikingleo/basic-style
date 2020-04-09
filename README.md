![lang:scss](https://img.shields.io/badge/lang-scss-red.svg)
![license:MIT](https://img.shields.io/npm/l/express.svg)

## 使用
### Step 1

下载scss文件，放入的项目中

### Step 2
web：
```
    // vuejs, main.js or uni-app, main.js
    import 'path/_basic-style.scss'
```

小程序：

    1. 创建app.scss
    
    2. @import "path/_basic-style.scss";

uni-app公共变量：

    1. 根目录创建uni.scss
    
    2. 在`uni.scss`引入`import "path/basic/_mixins.config.scss`

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
├── _basic-style.scss   导入文件，全局集成
├── animation           动画
│   └── _spinner.scss   转动样式
├── basic               基础
│   ├── _border.scss    边框
│   ├── _clearfix.scss  清除浮动
│   ├── _color.config.scss  颜色配置
│   ├── _direction.scss     position定位top,right,bottom,left
│   ├── _display.scss       display设置
│   ├── _global.config.scss 全局变量值控制
│   ├── _init.scss          浏览器初始化
│   ├── _margin.scss        外边距
│   ├── _mixins.config.scss 公共方法
│   ├── _overflow.scss      盒子截断方式
│   ├── _padding.scss       内边距
│   ├── _position.scss      定位方式
│   └── _tag-size.scss      标签宽度
├── color                   颜色配置
│   ├── _bg-colors.scss     背景颜色，和_color.config.scss一致
│   ├── _gradient.scss      渐变背景颜色
│   └── _text-colors.scss   文本颜色
├── components              组件
│   ├── _avg.scss           平分
│   ├── _badge.scss         徽章
│   ├── _btn.scss           按钮
│   ├── _cell.scss          条目（待定）
│   ├── _image.scss         图片
│   ├── _input-group.scss   输入框组
│   ├── _step.scss          步骤条
│   └── _table.scss         表格
├── icon                    图标
│   ├── _iconfont.scss      iconfont图标
│   ├── iconfont.eot
│   ├── iconfont.js
│   ├── iconfont.json
│   ├── iconfont.svg
│   ├── iconfont.ttf
│   ├── iconfont.woff
│   └── iconfont.woff2
├── layout                  布局相关
│   ├── _flex.scss          弹性盒布局
│   └── _float.scss         浮动方向
└── text
    ├── _font-weight.scss   文本粗细
    ├── _text-align.scss    文本对齐方式
    ├── _text-overflow.scss 文本截断方式
    ├── _text-size.scss     文本字号
    └── _text-type.scss     文本现实类型
```
