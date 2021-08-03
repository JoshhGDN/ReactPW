import './App.css';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import html from './assets/html-code.png';
import cSharp from './assets/c-sharp.png';
import java from './assets/java.png';
import python from './assets/python.png';
import javascript from './assets/javascript.png';
import contact from './assets/undraw_contact_us_15o2.svg';
import css from './assets/css.png';

function App() {
  return (
<div className="App">
    <body>
        <div id = "container">
            <div id = "main">
                <nav> 
                    <div className = "navbar">
                        <div className = "logo">
                            <h4> jg </h4>
                        </div>
                    <ul className = "nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                    <div className = "burger">
                        <div class = "line1"></div>
                        <div class = "line2"></div>
                        <div class = "line3"></div>
                    </div>
                    </div>
                </nav>

            <div className = "bannerArea" id = "home">
                <div className = "homeText">
                    <h4 style={{display: 'inline;'}}>joshua gordon //</h4>
                    <h4 style={{display: 'inline;'}} class = "type"></h4>
                    <h4><br/></h4>
                    <h4 className = "aboutMe">i am an enthusiastic developer that takes pride in creating aesthetically pleasing and responsive websites, 
                        software, and applications</h4>
                </div>
            </div>

            <div className = "portfolioArea" id = "portfolio">
                <div className = "textArea">
                    <h1>Portfolio</h1>
                    <p></p>
                </div>
            </div>

            <div className = "skillsArea" id = "skills">
                <div className = "textArea">
                    <h1>Skills</h1>
                        <div className ="container">
                        <div className="rowSkillsList" />
                            <p1>
                            <img src = {html} alt="html" width="75" height="75" />
                            <img src = {css} alt="css" width = "75" height="75" />
                            <img src = {javascript} alt="javascript" width="75" height="75" />
                            </p1>
                        <div className = "rowSkillsList">
                            <p3>
                            <img src = {java} alt="java" width="75" height="75" />
                            <img src = {cSharp} alt="c-sharp" width="75" height="75" />
                            <img src = {python} alt="python" width="75" height="75" />
                            </p3>
                        </div>
                        </div>
                </div>
            </div>

            </div>
        </div>

   <footer id = "footer">
        <div className = "footerContent">
            <a href="https://github.com/JoshhGDN"> <img src= {github} alt="github" width="30" height="30"/>
            <a href="https://www.linkedin.com/in/joshhgdn/"> <img src= {linkedin} alt="linkedin" width="30" height="30"/>
            </a>
            </a>
        </div>
    </footer >
        <script type = "text/javascript"></script>
        <script src = "index.js"></script>
    </body> 
</div>
  );
}

export default App;
