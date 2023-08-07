const conactpage = () => {
    return (
        <>
            <div className="cover-page">

                <div className="tit">
                    <h1>about us</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">About us</a></li>

                    </ul>
                </div>

            </div>




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
                                        <i className="fa fa-phone"></i> <a href="tel:00 7625 98626">00 7625 98626</a>
                                    </div>
                                    <div className="item">
                                        <i className="fa fa-envelope"></i> <a href="mainto:00 7625 98626">info@info.com</a>
                                    </div>
                                </div>


                                <div className="flex mt-30">
                                    <div className="item">
                                        <i className="fa fa-map"></i> <a href="">adress of caompany can be here</a>
                                    </div>
                                    <div className="item">
                                        <i className="fa fa-fax"></i> <a href="">00 7625 98626</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="item w-60">
                        <div className="">
                            <div>
                                <span className="green u-text-sup">  Get in touch
                                </span>
                                <h2>Please submit your request so that one of our consultants will contact you soon!</h2>
                            </div>
                            <form>
                                <input type="text" id="name" name="name" placeholder="Your name.." />
                                <input type="text" id="lname" name="lastname" placeholder="Your Subject.." />
                                <input type="tel" id="phone" name="lastname" placeholder="Your phone.." />
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                                <input type="submit" value="Submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </section>



            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.1673051531596!2d34.45312491468049!3d31.51486330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f2f4e84b4e3%3A0x3ced13b7324d6a0!2sZain%20eldeen%20fashion!5e0!3m2!1sen!2s!4v1657058471221!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

            </iframe>

        </>);
}
export default conactpage;