import React from "react"

interface Props {
    children: React.ReactNode;
}

function ProtectedRoute({children}: Props) {
    return <>{children}</>
}

export default ProtectedRoute