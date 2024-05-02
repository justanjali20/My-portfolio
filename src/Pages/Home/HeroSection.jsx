export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Anjali</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Front-end</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            i am skilled Front-end Developer with
            <br /> experience in
            creating visually appealing and user friendly websites
         </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
        <img src="./img/about-me.png" alt="hero-section" />
        </div>
      </section>
    );
  }
  