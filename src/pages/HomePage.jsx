import img3 from '../img/3.jpg'
import img5 from '../img/5.jpg'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import maincover from '../img/main-cover.png'
const HomePage = () => {
    return (<>
        <div classNameName="main-cover">
            <div className="overllay">
                <div className="Cover-content">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                    <p>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris
                    </p>
                    <a href="">about us</a>
                </div>
            </div>
        </div>


        <section id="about">
            <div className="about flex main-container">
                <div className="item">
                    <img src={img3} alt="" />
                </div>
                <div className="item pt-30">
                    <span className="green u-text-sup">ABOUT US</span>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
                        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
                        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                    </p>
                    <div>
                        <a href="" className="green-btn">Read More</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="project">
            <div className="text-center">
                <span className="green u-text-sup  ">Project</span>
                <h2>We Offer Quality Service For Your Business</h2>
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
            </div>
            <div className="flex project">

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

        <section id="contactus">
            <div className="flex ">

                <div className="item w-40">
                    <div>
                        <span className="green u-text-sup">CONTACT US
                        </span>
                        <h2>Feel Free To Contact Us</h2>
                    </div>
                    <div className="flex ">

                        <div className="item contact-info mt-30">

                            <div className="flex">
                                <div className="item">
                                    <i className='fa fa-phone'></i> <a href="tel:00 7625 98626">00 7625 98626</a>
                                </div>
                                <div className="item">
                                    <i className='fa fa-envelope'></i> <a href="mainto:00 7625 98626">info@info.com</a>
                                </div>
                            </div>


                            <div className="flex mt-30">
                                <div className="item">
                                    <i className='fa fa-map'></i> <a href="">adress of caompany can be here</a>
                                </div>
                                <div className="item">
                                    <i className='fa fa-fax'></i> <a href="">00 7625 98626</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="item w-60">
                    <div className="">
                        <div>


                            <span className="green u-text-sup"> Get in touch
                            </span>
                            <h2>Please submit your request so that one of our consultants will contact you soon!</h2>
                        </div>
                        <form>
                            <input type="text" id="name" name="name" placeholder="Your name.." />
                            <input type="text" id="lname" name="lastname" placeholder="Your Subject.." />
                            <input type="tel" id="phone" name="lastname" placeholder="Your phone.." />
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
                            <input type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
            </div>
        </section>

    </>
    );
}

export default HomePage;