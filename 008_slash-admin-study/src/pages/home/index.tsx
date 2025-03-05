import styled from "styled-components";


interface StyleButtonProps {
    bg?: boolean;
}

const StyleButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !['bg'].includes(prop) // 过滤 bg 属性
})<StyleButtonProps>`
    color: #fff;
    border: 0;
    background: ${(props) => (props.bg ? "#000" : "#666")};
`

function Home() {
    return <>
        <h1>home</h1>
        <StyleButton bg>111</StyleButton>
    </>
}

export default Home