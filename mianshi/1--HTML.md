1. doctype作用
html5标准网页声明，规定浏览器使用html5标准解析文本
怪异模式，标准模式，doctype则为标准模式。


2. 关于html语义化
良好的语义html标签,具有良好的结构和含义，p就是段落，article代表正文内容
增强可读性，良好网页结构，语义类支持读屏软件自动生成目录，便于爬虫获取信息


3. 关于前端seo   搜索引擎优化
合理的title,description,keywords
非装饰性图片加alt,
语义化标签，重要内容靠前，且不要js输出，爬虫无法执行js获取内容


4. 关于meta标签
描述html网页文档的元信息，
charset：文档编码形式,
http-equiv：http缓存,
view-port： 移动端控制视口大小相关;

5. src和href的区别
src 指向外部资源并嵌入到标签内，会下载并应用到文档内，下载是同步会阻塞，浏览器解析到指向资源，会暂停运行直到资源被下载，编译，执行完毕。
href是建立外部网络资源和网页的链接，下载是异步进行，不阻塞当前程序


6. img的srcset作用，以及title和alt的区别
srcset 提供了根据浏览器屏幕条件选取合适图片的能力。（不同图片地址）
sizes  定义一组条件，指明某些媒体条件为真时，什么图片尺寸为最佳选择。（图片不同尺寸）

类似的还有picture中的source,img
<picture>
    <source srcset="/media/examples/surfer-240-200.jpg"
            media="(min-width: 800px)">
    <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
不同设备匹配不同图像资源source，都匹配不上，选择img中src的图片资源

title： 鼠标移入显示，alt，图片资源加载不出来显示（图片描述，读屏器）


7. script中defer和async的区别
script:立即 加载，执行。
script + defer: 并行加载，在元素解析完DOMContentLoaded执行。
script + aysnc: 并行加载并立即执行。
async 和 defer 网络读取都是异步，区别在于加载完是否立即执行。


8. DOM事件流，事件委托
事件冒泡（里到外）
事件捕获（外到里）
addeventlistener,第三个参数代表采用 冒泡还是捕获

利用事件冒泡，指定一个事件处理程序，管理yi一类型所有事件，
比如：动态添加 带同类型事件的子节点
focus和blur无事件冒泡，mouseover,mouseout位置定位消耗性能高，不适合委托

9. cookie和localStorage、sessionStorage、indexDB 的区别
cookie: 4kb, http请求的请求头带cookie。可设置过期时间，主要用在判断是否登录。
        http-only限制客户端通过js访问cookie；
        secure:只能在协议为https请求中携带；
        same-site:浏览器不能在跨域请求携带，减少cerf攻击
localStorage: 5m，一直存在，除非手动清除缓存，不参与服务端通信；
localStorage：5m，本网页存在，关闭网页失效，也可手动清除缓存，不参与服务端通信；
indexDB：noSQL数据库，内存大，除非清理否则存在。


10. 







