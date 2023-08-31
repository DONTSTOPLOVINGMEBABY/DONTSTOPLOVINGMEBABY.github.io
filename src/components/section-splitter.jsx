import { 
    SectionSplitterStyled, 
    BlankFiller, 
    NameSection, 
    Name, 
    Line, 
} from "../styles/section-splitter.styled"


function SectionSplitter ({ name }) {
    return (
        <SectionSplitterStyled>
            <BlankFiller/>
            <NameSection>
                <Name>{name}</Name>
                <Line />
            </NameSection>
        </SectionSplitterStyled>
    )
}

export default SectionSplitter