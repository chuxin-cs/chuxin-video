import {redirect, replace} from "react-router-dom";

function Page3() {
    return <>
        <h1>page3</h1>
        <button onClick={() => redirect("/page1")}>redirect</button>
        <button onClick={() => replace("/page2")}>replace</button>
    </>
}

export default Page3;