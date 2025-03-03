import React from "react"

interface Props {
    children: React.ReactNode;
}

// 未来这里是处理权限的 当用户未进行登录时 直接跳转到登录页面去
function ProtectedRoute({children}: Props) {
    return <>{children}</>
}

export default ProtectedRoute