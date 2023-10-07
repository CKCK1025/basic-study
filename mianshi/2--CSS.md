1. css选择器优先级
!important> 内联>id>类(属性等)>标签  （10倍级）
可继承属性：font-size,font-family,color
!important--->内联-->id--->类/属性/伪类--->元素/伪元素--->关系选择器/通配符选择器




2. link和@import区别
link属于XHTML,网页加载立刻加载，link优先级高，document操作可更改link
@import,网页加载完成才加载，优先级低于link，document无法操作css中的@import



3. 隐藏页面元素的方式
opacity,透明度0，可交互，占据空间
visibility:hidden,不可交互，占据空间
display:none,不可交互，不占空间
overflow:hidden,隐藏超出部分，占据空间，隐藏部分不可交互
transform(0,0)，缩放为0，依然占据空间，不可交互
z-index: -9999,降低层级
(clip-path剪裁掉，absolute绝对定位隐藏)




4.  关于水平居中定位
水平居中：
    行内：text-alin:center,
    块级：margin:0 auto,
    子元素有float:left,  父元素加width: fit-content+ margin:0 auto;
    通用：display:flex + justify-content: center;
         负margin-left: -0.5*宽度 + p-a(position: aboslute) + left: -50%
         transform: translate(-50%, 0) + left: -50%
         p-a + margin: 0 auto

垂直居中
    单行文本：line-hight: 子元素高度
    vertical-align(父元素display: table+ 子元素table-cell)
    display:flex+ align-items:center (兼容不到ie9/ie8)
    transform(0, -50%) + p-a + top: -50%  (兼容不到ie8)
    负margin-top: -0.5*高度 + p-a + top: -50% (无足够空间，子元素被截断)
    p-a + margin: auto 0 (无足够空间，子元素被截断，不会有滚动条)
    .parent::after, .son{d-i + vertical-align:middle} + .parent::after{content: '' + height: 100%}






5. 关于css层叠上下文,层叠顺序
层叠顺序：
层叠上下文/background/border  >  负数z-index  >  block块状盒子  >  float浮动盒子  >  inline/inline-block水平盒子  >  z-index:auto/0  >  正z-index
谁大谁小  后来居上
层叠上下文层叠水平比普通元素高，可以嵌套，内部层叠上下文及其所有元素受制于外部的层叠上下文，每个层叠上下文和兄弟元素独立，层叠渲染只考虑后代，层叠上下文自成体系，当元素发生层叠，元素被认为是父层叠上下文的层叠顺序中

具有层叠上下文的条件：
display:flex|inline-block: 层叠上下文元素是flex子元素
opcity 小于1
transform
filter：blur(5px)  （规范滤镜）




6. 清除浮动，原理
空div: clear:both; (子div,清除子元素两边浮动)
使用BFC:overflow: hidden/auto;  （父元素开启  BFC）
伪类：  div{content: '', display: block; clear: both;}




7. 盒模型
标准content-box： width = content   元素 = width + padding + border
怪异border-box： width = padding + border + content    元素= width





8. 关于BFC
独立一块渲染区域，独立渲染规则，规定子元素如何布局，与外部元素隔离，且不受外部元素影响。
防止文字塌陷，margin重叠，两栏布局文字环绕
触发条件：根元素，position:absolute,float不为none,overflow不为visible,display:inline-block,table-cell等





9. css新属性   （css三角形）
rgba，background-image,origin,size,repeat
word-break,媒体查询等




10. 伪类和为元素区别
伪类，(:)元素选择器添加伪类属性，改变元素状态
为元素,(::)创建一些不在文档中的元素，并为其添加样式，
区别：一个是从选择器中新增类操作元素样式装填，一个新增一个元素并为新元素添加属性




11. 关于flex布局
display: flex;
为了不同设备尺寸和分辨率，需要设计响应式界面，弹性布局(不定宽度，分布对齐)
flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex
容器，它的所有子元素都会成为它的项目。

justify-content: center|flex-end|space-between;
align-item: center|flex-end;
flex-wrap:wrap
一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用flex-direction来指定主轴的方向。
我们可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还
可以使用flex-wrap来规定当一行排列不下时的换行方式。

order，flex-grow,flex-shrink
对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，
项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。




11. 动画，过渡，3d变形
过渡：复合属性，两个状态之间的平滑过渡。
transition-property属性,transition-duration持续时间,transition-time-function过度时间,transition-delay.

动画：复合属性，关键帧@keyframes来实现更为复杂的动画效果。
animation-duration,delay,direction,fill-mode等

3d变形：transform();perspective:透视距离，perspective-origin:观察者位置，位移translate,缩放scale3d,rotate3d旋转，backface-visibility背景可见，





12. CSS3的新特性
新增各种CSS选择器 （:not(.input)：所有class不是“input”的节点）
圆角  （border-radius:8px）
多列布局 （multi-column layout）
阴影和反射 （Shadow\Reflect）
文字特效  （text-shadow）
文字渲染  （Text-decoration）
线性渐变  （gradient）
旋转   （transform）
缩放，定位，倾斜，动画，多背景
例如：transform:\scale(0.85,0.90)\translate(0px,-30px)\skew(-9deg,0deg)\Animation；




13. 常见布局实现
多列等高：
负margin:大数值padding-bottom+负大数值margin-bottom;
flex: 
绝对定位；

两端对齐
flex: justify-content: space-between;
text-align: justify;+text-last-align: justify;

底部粘连：
绝对定位：父min-height:100%; content: padding-bottom:50px  子：position:absolute;bottom:0;height:50;
calc: cacl(100vh-50)+ height:50
flex: flex-flow:column wrap;+content:flex:1 + sticky:height:50px; 


两列，三列自适应布局：
两列-单列定宽+单列自适应：
    float+margin(overflow:hidden;zoom:1去浮动)   
    float+margin+calc
    inline-block+margin+calc
    absolute
    flex
两列自适应：float   flex
三列：float+margin+calc  flex   inline-block

全屏布局：
float+ calc
inline-block + calc
flex

  


14. 经常遇到的浏览器兼容性问题：
浏览器默认的margin和padding不同
解决方案：加一个全局的*{margin:0;padding:0;}来统一。






15. width:auto和width：100%区别
width:100%会使元素box的宽度等于父元素的content box的宽度。
width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。



16. 图片base64的优缺点
优点： 减少一次图片地址请求
缺点： 必原本文件大，无法缓存，兼容性差，ie8之前不行；



17. 




































