import React from "react";
import image from "../src/Ashi.jpg";
import one from "./image/a.jpg";
import two from './image/b.png';
import three from './image/c.jpg';
import four from './image/d.jpg';
import five from './image/e.jpg';
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Navbar">
        <h2>Ashim Gotame</h2>
        <Link to='/contact'>
          <button className="btn">Say Hello</button>
        </Link>
      </div>
      <div className="Main">
        <div className="Intro">
          <h1>Hi, My Name is </h1>
          <h2>Ashim Gotame.</h2>
          <h3>I build things for the Web.</h3>
          <p>
            I'm a <span>MERN-Stack Developer.</span>
          </p>
          <p>
            The DateTimePicker component is designed and optimized for the
            device it runs on. The MobileDateTimePicker component works best for
            touch devices and small screens. The DesktopDateTimePicker component
            works <span>best for mouse devices</span> and large screens. By
            default, the DateTimePicker component renders the desktop version if
            the media query
          </p>
          <Link to="/">
            <button> get in touch </button>
          </Link>
          <Link to="/">
            <button> Curriculum Vitae (CV)  </button>
          </Link>
        </div>

        <div className="About">
          <div className="text">
            <h1>
              <span>01.</span> About Me
            </h1>
            <p>
              The DateTimePicker component is designed and optimized for the
              device it runs on. The MobileDateTimePicker component works best
              for touch devices and small screens. The DesktopDateTimePicker
              component works <span>best for mouse devices</span> and large
              screens. By default, the DateTimePicker component renders the
              desktop version if the media query
            </p>
            <p>
              The DateTimePicker component is designed and optimized for the
              device it runs on. The MobileDateTimePicker component works best
              for touch devices and small screens. The DesktopDateTimePicker
              component works <span>best for mouse devices</span> and large
              screens. By default, the DateTimePicker component renders the
              desktop version if the media query
            </p>
            <p>Here are few technologies i have been working recently</p>
            <div className="tech">
              <div className="tech-one">
                <span>
                  {" "}
                  <AiOutlineCaretRight />
                  HTML
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  CSS
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  Bootstrap
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  JavaScript
                </span>
                <br></br>
              </div>
              <div className="tech-two">
                <span>
                  <AiOutlineCaretRight />
                  MONGO DB
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  REACT
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  Django
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  Node JS
                </span>
                <br></br>
                <span>
                  <AiOutlineCaretRight />
                  Express JS
                </span>
                <br></br>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="Work">
          <h1>
            <span>02.</span> What i have Worked On
          </h1>
          
          <div className="Experience">
            <div className="image">
              <img src={one} alt="" />
            </div>
            <div className="text-two">
              <p>
                Bistara Cafe is a restaurant and bar located in thamel,
                kathmandu, close to yellow pagoda hotel and easily reachable.
                The building was built during the Rana Era. Most of the bricks
                have inscriptions showing that they were made around 1903. Great
                pains have been taken to ensure that the renovations in no way
                destroyed the building’s warm and welcoming character. And
                that's what you will find here—genuine warmth and hospitality to
                make you feel comfortable and relaxed.
              </p>
            </div>
          </div>
          <div className="Experience">
            <div className="image">
              <img src={one} alt="" />
            </div>
            <div className="text-two">
              <p>
                Bistara Cafe is a restaurant and bar located in thamel,
                kathmandu, close to yellow pagoda hotel and easily reachable.
                The building was built during the Rana Era. Most of the bricks
                have inscriptions showing that they were made around 1903. Great
                pains have been taken to ensure that the renovations in no way
                destroyed the building’s warm and welcoming character. And
                that's what you will find here—genuine warmth and hospitality to
                make you feel comfortable and relaxed.
              </p>
            </div>
          </div>
          
          <div className="Experience">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="text-two">
              <p>
                The DateTimePicker component is designed and optimized for the
                device it runs on. The MobileDateTimePicker component works best
                for touch devices and small screens. The DesktopDateTimePicker
                component works <span>best for mouse devices</span> and large
                screens. By default, the DateTimePicker component renders the
                desktop version if the media query
              </p>
            </div>
          </div>
          <div className="Education">
          <h1>
            <span>03.</span> Where i have learned from
          </h1>

          <div className="Experience">
            <div className="text-exp">
            <h2><span>Bsc (Hons) in Computer Science</span></h2>
            <h4>Herald college kathmandu (2019-2022)</h4>
              <p>
                The DateTimePicker component is designed and optimized for the
                device it runs on. The MobileDateTimePicker component works best
                for touch devices and small screens. The DesktopDateTimePicker
                component works <span>best for mouse devices</span> and large
                screens. By default, the DateTimePicker component renders the
                desktop version if the media query
              </p>
            </div>
            <div className="image">
              <img src={two} alt="" />
            </div>
          </div>
         
          </div>
          <div className="skill">
          <h1>
            <span>04.</span> What i have learned
          </h1>
          <div className="Experience">
          <div className="image">
              <img src={three} alt="" />
            </div>
            <div className="text-exp exp">
            <h2><span>Html , Css , JavaScript,TypeScript</span></h2>
            <h4>Skilled</h4>
              <p>
                The DateTimePicker component is designed and optimized for the
                device it runs on. The MobileDateTimePicker component works best
                for touch devices and small screens. The DesktopDateTimePicker
                component works <span>best for mouse devices</span> and large
                screens. By default, the DateTimePicker component renders the
                desktop version if the media query
              </p>
            </div>
            
          </div>
          <div className="Experience">
          <div className="image">
              <img src={four} alt="" />
            </div>
            <div className="text-exp exp">
            <h2><span>MERN Stack</span></h2>
            <h4> Skilled</h4>
              <p>
                The DateTimePicker component is designed and optimized for the
                device it runs on. The MobileDateTimePicker component works best
                for touch devices and small screens. The DesktopDateTimePicker
                component works <span>best for mouse devices</span> and large
                screens. By default, the DateTimePicker component renders the
                desktop version if the media query
              </p>
            </div>
            
          </div>
          <div className="Experience">
          <div className="image">
              <img src={five} alt="" />
            </div>
            <div className="text-exp exp">
            <h2><span>Python, Django framework</span></h2>
            <h4> Semi-Skilled</h4>
              <p>
                The DateTimePicker component is designed and optimized for the
                device it runs on. The MobileDateTimePicker component works best
                for touch devices and small screens. The DesktopDateTimePicker
                component works <span>best for mouse devices</span> and large
                screens. By default, the DateTimePicker component renders the
                desktop version if the media query
              </p>
            </div>
            
          </div>
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
