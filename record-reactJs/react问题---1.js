/*===========================================================================
1.React和Vue中 keys 的作用是什么？
    1) Keys是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识
        保证某个元素的 key 在其同级元素中具有唯一性, react中diff算法会借助元素的key值来判断该
        元素是新近创建的还是移动而来的，以减少重新渲染，React还需要借助Key值来判断元素与本地状态的关联关系。
    2）key的作用就是更新组件时判断两个节点是否相同。相同就复用，不相同就删除旧的创建新的。
    3）简单列表不带key,可能更高效，但稍微复杂，带状态的列表，最好带上唯一key。
    4）(Vue)key的作用是为了在数据变化时强制更新组件，以避免“原地复用”带来的副作用（带状态的元素）
    5）react是采用自顶而下的更新策略，每次小的改动都会生成一个全新的vdom。从而进行diff，如果不
        写key，可能就会发生本来应该更新却没有更新的bug。



2.关于setState          https://www.kancloud.cn/freya001/haoke/1692029
    1）由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。 React控制之外的事件
        中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等。
    2）当需要拿到更新状态后的值，组件类中可通过this.setState的第二参数、componentDidMount、
        componentDidUpdate等手段来取得更新后的值，而在函数式组件中，则可以通过useEffect来获取更新后
        的状态，

    可能异步和同步的原因：
    1)判断是否处于batchUpdate,是则异步，否则同步。
    2）能命中batchUpdate机制的：生命周期（和它调用的函数），eract中注册的事件，react可以管理的入口。
    3）不能命中batchUpdate机制：setTimeOut(),setInteval(),自定义的DOM函数，react管不到的入口。
    
    两种情况：类组件，函数组件。
    类组件：在legacy模式中:更新可能为同步，也可能为异步；在concurrent模式中，一定是异步.
            1>legacy模式:即通过ReactDOM.render(<App />, rootNode)方式创建应用。
            2>当直接调用时this.setState时，为异步更新；
            3>当在异步函数的回调中调用this.setState，则为同步更新；
            4>当放在自定义 DOM 事件的处理函数中时，也是同步更新。  
    函数组件：const [count, setCount] = useState(0)
        1）当我们无论在同步函数还是在异步回调中调用 setCount 时，打印出来的 count 都是旧值，
            这时候我们会说：setCount 是异步的。
        2)调用 setCount 时，会做合并处理，异步更新该函数式组件对应的 hooks 链表里面的值，
            然后触发重渲染(re-renders)
            const [count, setCount] = useState(0);
            // 直接调用
            const handleStrightUpdate = () => {
                setCount(1);
                console.log(count); // 0
            };

            // 放在setTimeout回调中
            const handleSetTimeoutUpdate = () => {
                setTimeout(() => {
                setCount(1);
                console.log(count); // 0
                });
            };


3.Vue 和 React 之间的区别
    Vue 的表单可以使用 v-model 支持双向绑定，相比于 React 来说开发上更加方便，当然了 v-model 
    其实就是个语法糖，本质上和 React 写表单的方式没什么区别

    改变数据方式不同，Vue 修改状态相比来说要简单许多，React 需要使用 setState 来改变状态，并且使用这个
     API 也有一些坑点。并且 Vue 的底层使用了依赖追踪，页面更新渲染已经是最优的了，但是 React 还是需要用
     户手动去优化这方面的问题。

    React 16以后，有些钩子函数会执行多次，这是因为引入 Fiber 的原因

    React 需要使用 JSX，有一定的上手成本，并且需要一整套的工具链支持，但是完全可以通过 JS 来控制页面，
    更加的灵活。Vue 使用了模板语法，相比于 JSX 来说没有那么灵活，但是完全可以脱离工具链，通过直接编写
    render 函数就能在浏览器中运行。

    在生态上来说，两者其实没多大的差距，当然 React的用户是远远高于Vue 的









    
*/