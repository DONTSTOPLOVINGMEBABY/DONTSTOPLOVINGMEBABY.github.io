import { 
    CategorySkills, 
    CategoryTitle, 
    SkillCategory, 
    SkillRow, 
} from "../../styles/skills.styled";
import SingleSkill from "./singleSkill";
import mongoDB_svg from '../../assets/mongodb.svg'
import node_svg from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'
import mysql_svg from '../../assets/my-sql.svg'
import jest_svg from '../../assets/jest.svg'
import supertest_svg from '../../assets/supertest.svg'

function FrameworksSection () {
    return (
        <SkillCategory>
            <CategoryTitle>Frameworks</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                    icon={node_svg}
                    name="NodeJS"
                    />
                    <SingleSkill
                    icon={express}
                    name="ExpressJS"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={mongoDB_svg}
                    name="MongoDB"
                    />
                    <SingleSkill
                    icon={mysql_svg}
                    name="MySQL"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill 
                    icon={supertest_svg}
                    name="Supertest"
                    />
                    <SingleSkill
                    icon={jest_svg}
                    name="Jest"
                    />
                </SkillRow>
            </CategorySkills>
        </SkillCategory>
    )
}

export default FrameworksSection