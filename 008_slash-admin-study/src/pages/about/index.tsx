import {useRef, forwardRef, useImperativeHandle} from "react"

interface ChildMethods {
    focusHandle: () => void;
    getValue: () => string | undefined;
}

const Child = forwardRef<ChildMethods>((props, ref) => {

    console.log(props, ref)
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        console.log("进入了当前函数")
        return {
            focusHandle: () => {
                inputRef.current?.focus();
            },
            getValue: () => inputRef.current?.value,
        }
    }, [inputRef.current])

    return (<div>
        <h2>child</h2>
        <input ref={inputRef} type="text"/>
    </div>)
})


function About() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.focus()
        // 获取 child 中的 focus
        childRef.current?.focusHandle()
        console.log(childRef.current?.getValue())
    }
    const childRef = useRef<ChildMethods>(null);
    return (
        <div>
            <h1>about</h1>
            <Child ref={childRef}/>
            <input type="text" ref={inputRef}/>
            <button onClick={() => handleClick()}>btn</button>
        </div>
    )
}

export default About;