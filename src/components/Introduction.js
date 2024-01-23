import '../css/desktop-css/Introduction.css'
import MediaQuery from 'react-responsive'

const Introduction = () => {
    return(
        <div className="container"> 
            <MediaQuery maxWidth={1150}>
            {/* <p></p> */}
            <section class="laptop-animation">
                <div class="laptop-first"><div>Kevin Chan</div></div>
                <div class="laptop-second"><div> an Astrophysicist,</div></div>
                <div class="laptop-third"><div>a Software Engineer.</div></div>
            </section>
            </MediaQuery>
            <MediaQuery minWidth={1151}>
            {/* <p></p> */}
            <section class="animation">
                <div class="first"><div>Kevin Chan</div></div>
                <div class="second"><div> an Astrophysicist,</div></div>
                <div class="third"><div>a Software Engineer.</div></div>
            </section>
            </MediaQuery>
         </div>
    )
}

export default Introduction;