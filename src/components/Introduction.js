import '../css/desktop-css/Introduction.css'
import MediaQuery from 'react-responsive'

const Introduction = () => {
    return(
        <div className="container"> 
            <MediaQuery maxWidth={1150}>
            {/* <p></p> */}
            <section className="laptop-animation">
                <div className="laptop-first"><div>Kevin Chan</div></div>
                <div className="laptop-second"><div> an Astrophysicist,</div></div>
                <div className="laptop-third"><div>a Software Engineer.</div></div>
            </section>
            </MediaQuery>
            <MediaQuery minWidth={1151}>
            {/* <p></p> */}
            <section className="animation">
                <div className="first"><div>Kevin Chan</div></div>
                <div className="second"><div> an Astrophysicist,</div></div>
                <div className="third"><div>a Software Engineer.</div></div>
            </section>
            </MediaQuery>
         </div>
    )
}

export default Introduction;