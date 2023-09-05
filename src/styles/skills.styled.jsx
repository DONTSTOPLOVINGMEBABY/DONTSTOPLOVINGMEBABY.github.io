import styled from "styled-components"

const SkillsSectionStyled = styled.section`
    width: 100%;
    height: fit-content;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
`

const Skills = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
`

const SkillCategory = styled.div`
    width: 300px;
    height: 450px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`

const CategoryTitle = styled.h2`
    font-family: 'Poppins';
    height: fit-content;
    margin-bottom: 12px;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-size: 1.4rem;
    padding: 0;
`

const CategorySkills = styled.div`
    flex: 1;
    border: 2px white solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const SkillRow = styled.div`
    display: flex;
    justify-content: ${props => props.$justifyContent ? props.$justifyContent : 'space-around' } ;
    padding: ${ props => props.$padding? props.$padding : null };
    height: ${ props => props.$height ? props.$height : 'fit-content' };
`

const SkillEntry = styled.div`
    height: fit-content;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`

const SkillIcon = styled.img`
    height: 50px;
    width: 50px ; 

    &:hover {
        transform: scale(1.05);
    }

`

const SkillTitle = styled.span`
    height: fit-content;
    width: 100%;
    font-size: 1rem;
    text-align: center;
`



export {
    SkillsSectionStyled, 
    SkillCategory, 
    Skills, 
    CategoryTitle, 
    CategorySkills, 
    SkillRow, 
    SkillEntry, 
    SkillIcon, 
    SkillTitle, 
}