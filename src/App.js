import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />

        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#home" style={{fontSize:"25px"}}>Home</Nav.Link>
              <Nav.Link href="#aboutme" style={{fontSize:"25px"}}>About Me</Nav.Link>
              <Nav.Link href="#education" style={{fontSize:"25px"}}>Education</Nav.Link>
              <Nav.Link href="#experience" style={{fontSize:"25px"}}>Industry  Experience</Nav.Link>
              <Nav.Link href="#techskills" style={{fontSize:"25px"}}>Technical Skills</Nav.Link>
              <Nav.Link href="#projects" style={{fontSize:"25px"}}>Past Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className="content">
          <a className="anchor" id="home"></a>
          <Container>
            <Row className="align-items-center">
              <Col>
                <Row>
                  <img src={require('./images/profilePictureCropped1.jpg')} />
                </Row>
              </Col>
              <Col>
                    <p style={{fontSize:"60px"}} class="text-center"><b>Brandon Cegelski</b></p>
                    <div class="text-center">
                      <form action="https://www.linkedin.com/in/brandon-cegelski">
                        <button className="button2 btn" type="submit"><img src={require('./images/linkedInLogo.png')}  width="50%"/></button>
                      </form>
                    </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content">
          <a className="anchor" id="aboutme"></a>
          <h1>About Me</h1>
          <div>
            <p style={{fontSize:"20px"}}>Current graduate student at the University of Wisconsin-Madison where I am working towards earning my Master of Science in Computer Science degree. My research interest lies in the area of Human-Computer Interaction.</p>
          </div>
        </div>

        <div className="content">
          <a className="anchor" id="education"></a>
          <h1>Education</h1>
          <Container>
            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>University of Wisconsin-Madison</b></p>
              </Col>
              <Col lg="7">
                <p style={{fontSize:"20px"}}>Degree Seeking: Master of Science in Computer Science</p>
                <p style={{fontSize:"20px"}}>Ancipated Graduation Date: December 2023</p>
                <p style={{fontSize:"20px"}}>GPA: 3.70</p>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>University of Wisconsin-Milwaukee</b></p>
              </Col>
              <Col lg="7">
                <p style={{fontSize:"20px"}}>Degree Earned: Bachelor of Science in Computer Science</p>
                <p style={{fontSize:"20px"}}>Graduation Date: May 2018</p>
                <p style={{fontSize:"20px"}}>GPA: 3.70</p>
                <p style={{fontSize:"20px"}}>Honors: <em>magna cum laude</em></p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content">
          <a className="anchor" id="experience"></a>
          <h1>Industry Experience</h1>
          <Container>
            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>University of Wisconsin-Madison</b></p>
                <p style={{fontSize:"20px"}}>Graduate Teaching Assistant</p>
                <p style={{fontSize:"20px"}}>August 2021 - Present</p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Fall 2022</li>
                  <ul>
                    <li style={{fontSize:"20px"}}>Course Placement: CS-200 - Programming I</li>
                    <li style={{fontSize:"20px"}}>Course Topics: Java, Eclipse IDE, InteliJ IDE</li>
                    <li style={{fontSize:"20px"}}>Duties TBD</li>
                  </ul>
                  <li style={{fontSize:"20px"}}>Summer 2022</li>
                  <ul>
                    <li style={{fontSize:"20px"}}>Course Placement: CS-200 - Programming I (Fully Remote)</li>
                    <li style={{fontSize:"20px"}}>Course Topics: Java, Eclipse IDE, InteliJ IDE</li>
                    <li style={{fontSize:"20px"}}>Hosted three hours of office hours sessions weekly to meet with students to answer homework coding questions and course topics.</li>
                    <li style={{fontSize:"20px"}}>Lead three lab sessions that met twice a week where I was responsible for helping a small group of students through labs that involved coding project and learning how to read code.</li>
                    <li style={{fontSize:"20px"}}>Graded numerous student assignments for proper coding format.</li>
                    <li style={{fontSize:"20px"}}>Met with the course faculty weekly to discuss ways to improve the experience for the students and resolve any issues.</li>
                  </ul>
                  <li style={{fontSize:"20px"}}>Spring 2022</li>
                  <ul>
                    <li style={{fontSize:"20px"}}>Course Placement: CS-571 - Building User Interfaces</li>
                    <li style={{fontSize:"20px"}}>Course Topics: React, React Native</li>
                    <li style={{fontSize:"20px"}}>Hosted four hours of office hours weekly to meet with students to help debug their coding assignment projects.</li>
                    <li style={{fontSize:"20px"}}>Hosted bi-weekly in-person discussion sections to assist students with their coding assignments.</li>
                    <li style={{fontSize:"20px"}}>Lead the grading process where I was responsible for allocating the assignments to be graded to the course graders and entering the resulting grades for the students in a timely manner.</li>
                    <li style={{fontSize:"20px"}}>Assisted the professor with creating quiz and exam questions to properly test the students on the important knowledge they learned through lecture and homework assignments.</li>
                    <li style={{fontSize:"20px"}}>Proctored the remote midterm sessions</li>
                  </ul>
                  <li style={{fontSize:"20px"}}>Fall 2021</li>
                  <ul>
                    <li style={{fontSize:"20px"}}>Course Placement: CS-571 - Buliding User Interfaces</li>
                    <li style={{fontSize:"20px"}}>Course Topics: React, React Native</li>
                    <li style={{fontSize:"20px"}}>Hosted four hours of office hours weekly to meet with students to help debug their coding assignment projects.</li>
                    <li style={{fontSize:"20px"}}>Assist in the process of creating the questions for quizzes and the midterm.</li>
                    <li style={{fontSize:"20px"}}>Lead the grading process where I was responsible for allocating the assignments to be graded to the course graders and entering the resulting grades for the students in a timely manner.</li>
                    <li style={{fontSize:"20px"}}>Proctored the remote midterm sessions</li>
                  </ul>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Quad</b></p>
                <p style={{fontSize:"20px"}}>Software Developer</p>
                <p style={{fontSize:"20px"}}>May 2018 - August 2021</p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Contributed to the design and development of strategic initiatives to improve 20 applications and services intended to optimize the small package shipping logistics system.</li>
                  <li style={{fontSize:"20px"}}>Actively participated in the team’s agile ceremonies that were attended by numerous team members.</li>
                  <li style={{fontSize:"20px"}}>Routinely participated in code reviews to analyze and make suggestions regarding other’s code.</li>
                  <li style={{fontSize:"20px"}}>Trained summer interns on new challenging programming concepts and how to apply the knowledge they have learned throughout their academic studies to business objectives.</li>
                  <li style={{fontSize:"20px"}}>Led the initiative to construct an incremental learning plan for new team members to gain the technical knowledge needed to contribute to the team’s initiatives.</li>
                  <li style={{fontSize:"20px"}}>Organized and presented step by step directions on how to use a complex order fulfillment system to new users who had no prior experience with the system.</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Thomson Reuters</b></p>
                <p style={{fontSize:"20px"}}>Software Developer Intern</p>
                <p style={{fontSize:"20px"}}>June 2017 - September 2017</p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Developed a tool to pull the latest version of the team’s projects from the subversion repository.</li>
                  <li style={{fontSize:"20px"}}>Developed a tool designed to automate the code branching process.</li>
                  <li style={{fontSize:"20px"}}>Presented the results from my summer work during an intern poster fair.</li>
                </ul>
              </Col>
            </Row>

          </Container>
        </div>

        <div className="content">
          <a className="anchor" id="techskills"></a>
          <h1>Technical Skills</h1>
          <Container>
            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Programming Languages</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>C#</li>
                  <li style={{fontSize:"20px"}}>Java</li>
                  <li style={{fontSize:"20px"}}>C</li>
                  <li style={{fontSize:"20px"}}>C++</li>
                  <li style={{fontSize:"20px"}}>PL/SQL</li>
                  <li style={{fontSize:"20px"}}>Lisp</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Web Design</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>JavaScript</li>
                  <li style={{fontSize:"20px"}}>HTML</li>
                  <li style={{fontSize:"20px"}}>CSS</li>
                  <li style={{fontSize:"20px"}}>XML</li>
                  <li style={{fontSize:"20px"}}>Pug.js</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Front End Development</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>React</li>
                  <li style={{fontSize:"20px"}}>React Native</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Mobile Development</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Android</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Machine Learning</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>TensorFlow</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Web Services</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>REST</li>
                  <li style={{fontSize:"20px"}}>JSON</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Frameworks</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Microsoft .NET 4.8</li>
                  <li style={{fontSize:"20px"}}>Microsoft .NET Core</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Development Tools</b></p>
              </Col>
              <Col lg="7">
                <ul>
                  <li style={{fontSize:"20px"}}>Microsoft Visual Studio 2017</li>
                  <li style={{fontSize:"20px"}}>Eclipse IDE</li>
                  <li style={{fontSize:"20px"}}>Android Studio</li>
                  <li style={{fontSize:"20px"}}>Visual Studio Code</li>
                  <li style={{fontSize:"20px"}}>Oracle SQL Developer</li>
                  <li style={{fontSize:"20px"}}>Tortoise SVN</li>
                  <li style={{fontSize:"20px"}}>GitHub</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content">
          <a className="anchor" id="projects"></a>
          <h1>Past Projects</h1>
          <Container>
            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Personal Android App Projects</b></p>
              </Col>
              <Col lg="7">
                <p style={{fontSize:"20px"}}>Spent my freetime learning about mobile development via online tutorials and created a few apps for the Google Play Store.</p>
                <a style={{fontSize:"20px"}} href="https://play.google.com/store/apps/developer?id=Brandon+Cegelski">Link to my Google Play store</a>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>

            <Row>
              <Col lg="4">
                <p style={{fontSize:"25px"}}><b>Graduate School Course Projects</b></p>
              </Col>
              <Col lg="7">
              <ul>
                <li style={{fontSize:"20px"}}>CS-770 Human-Computer Interaction Semester Project
                  <ul>
                    <li style={{fontSize:"20px"}}>Title: Growing Intelligent Personal Assistant Use</li>
                    <li style={{fontSize:"20px"}}>Researched how individuals perceive the use of different IPA technology (i.e. Amazon Echo, Google Nest, etc.) </li>
                    <li style={{fontSize:"20px"}}>Utilized multiple survey based research tactics to gather data.</li>
                    <li style={{fontSize:"20px"}}><a href="https://www.overleaf.com/read/ffdfmsrpsrym">Overleaf Paper Link</a></li>
                  </ul>
                </li>
                <li style={{fontSize:"20px"}}>CS-839 Topics In Computer Science Semester Group Project
                  <ul>
                    <li style={{fontSize:"20px"}}>Title: Metaverse Security and Ethics</li>
                    <li style={{fontSize:"20px"}}>The group researched how individuals perceive the current Metaverse security situation based on their past experiences.</li>
                    <li style={{fontSize:"20px"}}>Utilized multiple survey based research tactics to gather data.</li>
                    <li style={{fontSize:"20px"}}><a href="https://www.overleaf.com/read/fsykcwtwgmtp">Overleaf Paper Link</a></li>
                  </ul>
                </li>
              </ul>
              </Col>
            </Row>

            <Row>
              <p> </p>
            </Row>
          </Container>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
