import ScrollingTextStyled from "../styles/scrolling-text.styled"


function ScrollingText({ text, direction }) {
    return (
        <ScrollingTextStyled direction={direction}>
            <span>
                {Array(8).fill(text).join(' ')}
            </span>
        </ScrollingTextStyled>
    )
}


export default ScrollingText