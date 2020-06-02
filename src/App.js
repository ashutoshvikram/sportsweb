import React from "react";
import logo from "./logo.svg";

import { Carousel } from "react-materialize";
import "./App.css";
function App() {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  return (
    <div className="doc">
      <section id="home">
        <img src="./logo.png" id="logo" />
        <div className="navbar">
          <div className="item"><a href='/#home'>Home</a></div>
          <div className="item"><a href='/#aboutus'>About us</a></div>
          <div className="item"><a href='/#Tournament'>Tournament</a></div>
          <div className="item"><a href='/#faq'>FAQ</a></div>
          <div className="item"><a href='/#contactus'>Contact us</a></div>
        </div>

        <h1 className="h-primary">
          LCO
          <br />
          Go fight for it Team!
        </h1>
      </section>
      {/* =====================ABOUT US SECTION===================== */}
      <section id="aboutus">
        <h1 className="mainhead">About us</h1>
        <div className="abtsec">
          <img src="/about.png" className="aboutimg" />

          <div className="aboutTxt">
            <h1 className="txt1">Tournament</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              <br />
              voluptate, nostrum corrupti tempore, voluptatem, nesciunt expedita
              <br />
              maiores et eos officia ut natus commodi ullam rerum iusto laborum
              <br />
              amet facere ea.
            </h3>
          </div>
        </div>
        <div className="abtsec2">
          <img src="/undraw.svg" className="aboutimg" />

          <div className="aboutTxt">
            <h1 className="txt1">Our Team</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              <br />
              voluptate, nostrum corrupti tempore, voluptatem, nesciunt expedita
              <br />
              maiores et eos officia ut natus commodi ullam rerum iusto laborum
              <br />
              amet facere ea.
            </h3>
          </div>
        </div>
      </section>
      {/* =====================TEAM SECTION===================== */}
      <section id="team">
        <h1 className="mainhead">Team</h1>
        <div className="teamsec">
          <div className="card">
            <img src="/player.png" alt="" className="playerimg" />
            <h3 className="cardheading">Player One</h3>
            <p className="cardcontent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex,
              minus quos explicabo distinctio quae deserunt provident corrupti
              nostrum rem.
            </p>
          </div>
          <div className="card">
            <img src="/player.png" alt="" className="playerimg" />
            <h3 className="cardheading">Player Two</h3>
            <p className="cardcontent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              animi consequatur natus autem harum ipsa accusantium similique
              ratione obcaecati veritatis!
            </p>
          </div>
          <div className="card">
            <img src="/player.png" alt="" className="playerimg" />
            <h3 className="cardheading">Player Three</h3>
            <p className="cardcontent">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit beatae non accusantium laboriosam nulla aliquam
              necessitatibus saepe nobis ut soluta?
            </p>
          </div>

          <div className="card">
            <img src="/player.png" alt="" className="playerimg" />
            <h3 className="cardheading">Player Four</h3>
            <p className="cardcontent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sunt, nulla sequi cupiditate doloremque temporibus ab laudantium?
              Ab, aspernatur ratione.
            </p>
          </div>

          <div className="card">
            <img src="/player.png" alt="" className="playerimg" />
            <h3 className="cardheading">Player Five</h3>
            <p className="cardcontent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              optio distinctio possimus maxime corrupti voluptas atque alias vel
              voluptatibus error!
            </p>
          </div>
        </div>
      </section>

      <section id="Tournament">
        <h1 className="mainhead">Tournament</h1>
        <div className="videosec">
          <div className="txt3">
            Big Tournament is
            <br /> coming soon....
          </div>
          <div className="video">
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/hqvGOPB0KmQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section id="faq">
        <h1 className="mainhead">FAQ's</h1>
        <div className="faqsec">
          
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
          <div className="ques">
            <h4 className="qtext">Lorem ipsum dolor sit amet?</h4>
            <h4 className="atext">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit.
              <br /> Modi blanditiis, nesciunt eum delectus dolores facilis.
            </h4>
          </div>
        </div>
      </section>
      {/* ===================CONTACT US SECTION=================== */}

      <section id="contactus">
        <h1 className="mainhead">Contact us</h1>
        <div className="consec">
        Mobile: +91999999999<br/>
Address: : LCO Basketball Ground, 55 - Fictional Homes, Fictional Road Near Fictional Lake. India
        </div>
      </section>
    </div>
  );
}

export default App;
