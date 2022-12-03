import React from 'react'

function intro({username}){
    return(
        <div>
            <h1>Hey, this is "my introduction" page</h1>
            <p>Hello my name is {username}, and I am a 2 year student at University of Toronto, currently I am the web associate at IEEE UofT....</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </div>

    )
}
export default intro