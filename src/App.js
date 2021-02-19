import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { ImArrowLeft2 } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

import wbImage from "./images/computer.jpg";
import navProfileImage from "./images/profile.jpg";

function App() {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    console.log(index);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <MainContainer>
      <Header>
        <Nav>
          <Logo>
            Silver
            <br /> City
            <br /> Uprising
          </Logo>
          <LinksContainerWrapper>
            <LinksContainer>
              <NavLink>Our Programs</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>Get Involved</NavLink>
              <NavLink>News</NavLink>
              <NavLink>Contact</NavLink>
              <NavLink>
                {" "}
                <DonateButton>Donate</DonateButton>
              </NavLink>
              <NavLink>
                <NavProfile src={navProfileImage} />
              </NavLink>
            </LinksContainer>
          </LinksContainerWrapper>
        </Nav>
      </Header>
      <Container>
        <ContentWrap1>
          <ContentWrapper>
            <TitleContainer>
              <ImArrowLeft2 />

              <TitleWrapper>
                <h2>Web Design</h2>
              </TitleWrapper>
            </TitleContainer>
            <BoxContainer>
              <B1Wrapper>
                <Box1>
                  <Box1Text>
                    <Yellow>
                      <AiFillStar />
                    </Yellow>
                    <Yellow>4.2</Yellow>
                    <p>(5,445 reviews)</p>
                    <FiClock />
                    <p>43h 22m</p>
                  </Box1Text>
                </Box1>
              </B1Wrapper>

              <Box2>
                <BoxTwoHeader>
                  <BoxTwoNav>
                    <ul>
                      <CourseMenuItem
                        onClick={handleClick}
                        active={active === 0}
                        id={0}
                      >
                        Overview
                      </CourseMenuItem>
                      <CourseMenuItem
                        onClick={handleClick}
                        active={active === 1}
                        id={1}
                      >
                        Requirements
                      </CourseMenuItem>
                      <CourseMenuItem
                        onClick={handleClick}
                        active={active === 2}
                        id={2}
                      >
                        Mentors
                      </CourseMenuItem>
                      <CourseMenuItem
                        onClick={handleClick}
                        active={active === 3}
                        id={3}
                      >
                        Application
                      </CourseMenuItem>
                    </ul>
                  </BoxTwoNav>
                </BoxTwoHeader>
                <CourseWrapper active={active === 0}>
                  <h4>Course Overview</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet corporis neque officia omnis, placeat rem mollitia
                    at nihil nostrum inventore natus enim nobis excepturi
                    laudantium rerum harum voluptatum consequuntur molestiae.
                  </p>
                  <CourseContainer>
                    <div>
                      <h4>Who is this course for</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                    <div>
                      <h4>This Course Includes</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                  </CourseContainer>
                  <CourseContainer>
                    <div>
                      <h4>What you will learn</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Who is this course for</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                  </CourseContainer>
                </CourseWrapper>
                <CourseWrapper active={active === 1}>
                  <h4>Requirements</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet corporis neque officia omnis, placeat rem mollitia
                    at nihil nostrum inventore natus enim nobis excepturi
                    laudantium rerum harum voluptatum consequuntur molestiae.
                  </p>
                </CourseWrapper>
                <CourseWrapper active={active === 2}>
                  <h4>Mentors</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet corporis neque officia omnis, placeat rem mollitia
                    at nihil nostrum inventore natus enim nobis excepturi
                    laudantium rerum harum voluptatum consequuntur molestiae.
                  </p>
                </CourseWrapper>
                <CourseWrapper active={active === 3}>
                  <h4>Application</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet corporis neque officia omnis, placeat rem mollitia
                    at nihil nostrum inventore natus enim nobis excepturi
                    laudantium rerum harum voluptatum consequuntur molestiae.
                  </p>
                </CourseWrapper>
              </Box2>
            </BoxContainer>
          </ContentWrapper>
        </ContentWrap1>
      </Container>
    </MainContainer>
  );
}

export default App;

const Header = styled.header`
  height: 215px;
  background: #3a4caa;
  color: #fff;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
const Logo = styled.div`
  font-weight: 700;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavLink = styled.div`
  padding: 0 35px;
  display: flex;
`;

const Container = styled.div`
  /* height: 80vh; */
  line-height: 1.5;
`;
const TitleContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 6.5em;
  svg {
    font-size: 24px;
  }
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Box1 = styled.div`
  height: 300px;
  width: 500px;
  position: relative;

  background: linear-gradient(to top, rgba(58, 76, 170, 0.35), rgba(0, 0, 0, 0)),
    url(${wbImage});
  background-position: center;
  background-size: cover;
  border-radius: 45px;
`;
const Box2 = styled.div`
  border-radius: 45px;
  background: #fff;
  height: 600px;
  width: 500px;
  padding: 20px;
`;

const DonateButton = styled.button`
  border: 0;
  background: #f26f57;
  border-radius: 15px;
  padding: 5px;
  color: #fff;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const B1Wrapper = styled.div``;

const Box1Text = styled.div`
  width: 85%;
  color: #fff;
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0px;
  font-weight: 700;
  justify-content: space-evenly;
`;

const Yellow = styled.p`
  color: #f2c92b;
`;

const BoxTwoNav = styled.nav`
  ul {
    background: #eaeaea;
    border-radius: 50px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div {
  }
`;

const CourseMenuItem = styled.li`
  padding: 15px 20px;
  background: ${({ active }) => (active ? "#3a4caa" : "")};
  border-radius: ${({ active }) => (active ? "50px" : "")};
  color: ${({ active }) => (active ? "#fff" : "")};
  transition: ease-in-out;
`;

const BoxTwoHeader = styled.header`
  margin: 0px 0 50px 0;
`;

const ContentWrap1 = styled.div`
  position: relative;

  margin-top: -150px;
`;

const MainContainer = styled.div`
  background: #dbdce1;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  padding-left: 25px;
`;

const LinksContainerWrapper = styled.div``;

const NavProfile = styled.img`
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
`;

const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ul {
    margin: 0;
    padding-inline-start: 19px;
  }
  h4 {
    margin-bottom: 15px;
  }
`;

const CourseWrapper = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
