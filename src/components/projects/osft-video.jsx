import { 
    OSFTDemoStyled,
    OSFTVideo, 
} from "../../styles/projects.styled"

function OSFTDemo () {
    return (
        <OSFTDemoStyled>
                <OSFTVideo muted controls loop autoPlay>
                    <source src="https://hjacobs-rest-api-production.up.railway.app/osft/raw-video-example" type="video/mp4"/>
                </OSFTVideo>
        </OSFTDemoStyled>
    )
}

export default OSFTDemo