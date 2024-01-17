import './projects-css/MentalHealthApp.css'

const MentalHealthApp = () => {

    return (
        <div>
            <div className='mental-container'>
                <div className='overlay-pictures'>
                    <img className='under-image' src=""/>
                    <img className='over-image' src=""/>
                </div>
                <div className='mental-paragraph'>
                    <div className='paragraphs'>
                        <p>Using a restaurant recommendation API built by fellow bootcamp members, we designed and built a front end webpage using React to fetch and filter the restaurants. We incorporated the use of an <a href="https://www.w3schools.com/html/html_images_imagemap.asp" target="_blank" rel="noopener noreferrer">Image Map</a> to filter the restaurants by London Boroughs with additional choices to sort by price and dietary requirements, providing images of typical dishes expected.</p>
                        <p>The back end API is Dockerised, and along with the PostgreSQL database and front end, all are deployed on Render.com, as shown on <a href="https://www.linkedin.com/posts/kevinjunchan_to-anyone-fresh-out-of-a-software-engineering-activity-7133783505502642176-mOif?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                    </div>
                    <div className='code-links'>
                        <a href="" target="_blank" rel="noopener noreferrer">CODE</a>
                        <a href="" target="_blank" rel="noopener noreferrer">LIVE SITE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentalHealthApp;