// Page3 的 loader 函数
import {redirect} from "react-router-dom";

export const page3Loader = () => {

    // 模拟一个条件，当满足条件时进行重定向
    const shouldRedirect = true;
    if (shouldRedirect) {
        return redirect('/page1');
    }
    return null;
};