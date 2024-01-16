import { useEffect, forwardRef } from 'react';
import '../css/TechStack.css';


const TechStack = forwardRef(({}, ref) => {

    useEffect(() => {
        const slider = document.querySelector('.items');
        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listeners when the component unmounts
        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <div className="tech-stack-container" ref={ref}>
            <h1 className='tech-header'>Tech Stack</h1>
            <div className="grid-container">
                <main className="grid-item">
                    <div className="items">
                        <div className="item item1"><img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'/></div>
                        <div className="item item2"><img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/></div>
                        <div className="item item3"><img src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'/></div>
                        <div className="item item4"><img src='https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'/></div>
                        <div className="item item14"><img src='https://img.shields.io/badge/C-FCC624?style=for-the-badge&logo=C&logoColor=black'/></div>
                        <div className="item item5"><img src='https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white'/></div>
                        <div className="item item6"><img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/></div>
                        <div className="item item7"><img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'/></div>
                        <div className="item item8"><img src='https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white'/></div>
                        <div className="item item9"><img src='https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white'/></div>
                        <div className="item item10"><img src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'/></div>
                        <div className="item item11"><img src='https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white'/></div>
                        <div className="item item12"><img src='https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white'/></div>
                        <div className="item item13"><img src='https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white'/></div>
                        <div className="item item14"><img src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'/></div>
                    </div>
                </main>
            </div>
        </div>
    )
})

export default TechStack;