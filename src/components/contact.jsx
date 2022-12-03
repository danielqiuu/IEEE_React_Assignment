import React from 'react'
import insta from '../assets/instagram.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function contact(){
    return(
        <div>
            <h1>Hey, this is "my contact" page</h1>
            <p>phone number: 6478298575</p>
            <p>my Instagram QR code:<img src={insta} width={"100"} height={"100"} alt={'instagram qr code'}/></p>
            <a href={"https://www.linkedin.com/in/daniel-qiuu/"}><LinkedInIcon/></a>
            <a href={"https://github.com/danielqiuu"}><GitHubIcon/></a>


        </div>
    )

}
export default contact