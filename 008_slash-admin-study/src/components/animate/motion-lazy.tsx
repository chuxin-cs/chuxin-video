import React from "react"
import {LazyMotion, domMax, m} from "framer-motion"

interface Props {
    children?: React.ReactNode
}

export function MotionLazy({children}: Props) {
    return (
        <LazyMotion strict features={domMax}>
            <m.div style={{height: "100%"}}>{children}</m.div>
        </LazyMotion>
    )
}