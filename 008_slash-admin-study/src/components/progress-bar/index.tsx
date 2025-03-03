import {useEffect} from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css"

//配置 NProgress
NProgress.configure({
    // 用于控制进度条旁边是否显示旋转的小图标（加载指示器）。将其设置为 false 表示不显示这个小图标，使进度条更加简洁
    showSpinner: false,
    // 选项指定了进度条的最小起始值，取值范围是 0 到 1 之间的小数。这里设置为 0.1 意味着进度条在开始显示时，其初始进度为 10%。这样可以避免进度条在开始阶段看起来没有反应，给用户一种已经开始加载的直观感受
    minimum: 0.1,
    // 选项控制进度条自动递增的速度，单位是毫秒。设置为 200 表示每 200 毫秒进度条会自动增加一定的进度。这个自动递增的效果可以让用户感觉到页面正在持续加载，即使实际的加载进度可能没有明显变化
    trickleSpeed: 200
})

function ProgressBar() {
    useEffect(() => {
        let lastHref = window.location.href;

        const handleRouteChange = () => {
            // NProgress.start()：开始显示进度条
            NProgress.start();
            // setTimeout(() => NProgress.done(), 100)：设置一个定时器，在 100 毫秒后结束进度条的显示
            const timer = setTimeout(() => NProgress.done(), 100)
            return () => {
                console.log("我进入了这里")
                clearTimeout(timer);
                // 返回一个清理函数，用于在组件卸载或路由变化处理函数重新执行时清除定时器并结束进度条的显示
                NProgress.done()
            }
        }

        // 监听 href 的变化
        const observer = new MutationObserver(() => {
            const currentHref = window.location.href;
            if (currentHref !== lastHref) {
                lastHref = currentHref;
                handleRouteChange();
            }
        })

        // 指定监听对象 这里其实可以指定监听某一个 DOM 节点 当前监听的是整个文档的变化
        observer.observe(document, {
            subtree: true,
            childList: true
        })

        // 监听 popstate 事件（主要是处理浏览器前进和后退的操作）
        window.addEventListener("popstate", handleRouteChange)

        // 初始化时加载触发
        handleRouteChange()

        // 组件销毁的时候  清理监听器
        return () => {
            observer.disconnect()
            window.removeEventListener("popstate", handleRouteChange)
        }
    }, [])

    // 返回 null 表明当前组件不需要渲染任何 DOM 元素，只负责处理进度条的显示逻辑
    return null;
}

export default ProgressBar