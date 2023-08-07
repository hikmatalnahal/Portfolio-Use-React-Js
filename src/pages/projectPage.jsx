import img3 from '../img/3.jpg'
import img5 from '../img/5.jpg'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import maincover from '../img/main-cover.png'
const projectpage = () => {
    return (<>
        <div className="cover-page">
            <div className="tit">
                <h1>Project</h1>
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" className="active">project</a></li>

                </ul>
            </div>
        </div>

        <section id="project">
            <div className="flex project pt-30">
                <div className="item">
                    <div className="container">
                        <img src={img2} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={img3} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={maincover} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex project pt-30">
                <div className="item">
                    <div className="container">
                        <img src={img2} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="container">
                        <img src={img3} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={maincover} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
            </div><div className="flex project pt-30">
                <div className="item">
                    <div className="container">
                        <img src={img2} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={img3} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={maincover} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
            </div><div className="flex project pt-30">
                <div className="item">
                    <div className="container">
                        <img src={img2} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={img3} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={maincover} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
            </div><div className="flex project">
                <div className="item">
                    <div className="container">
                        <img src={img1} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text"> title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={img5} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={img3} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">project title can be here</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default projectpage;