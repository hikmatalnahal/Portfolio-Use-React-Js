import img1 from '../../img/logo.png'
const mainNav = () => {
    return (
        <>
            <nav>
                <ul className="topnav">
                    <li><a href="#"><img src={img1} height="50" /></a></li>
                    <div className="right">
                        <li><a className="/" href="">Home</a></li>
                        <li><a href="./about">About</a></li>
                        <li><a href="./projects">project</a></li>
                        <li><a href="./conact-us">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </>

    );
}

export default mainNav;