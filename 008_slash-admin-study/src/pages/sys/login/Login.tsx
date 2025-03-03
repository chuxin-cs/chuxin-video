function Login() {

    const a = 20;

    function get() {
        throw new Error("222")
        return JSON.parse(a).a
    }


    return <>
        login {get()}
    </>
}

export default Login