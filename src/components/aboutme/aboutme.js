import "./aboutme.css";

export default function AboutMe(props) {
  return (
    <div id="aboutme">
      <div>
        <div className="aboutme-header">
          <h1>Who am I?</h1>
        </div>
        <br />
        <div className="aboutme-content">
          Well, I am Shreesh Srivastava, a student, a full-stack developer, and
          an ex-musician. Currently, I am trying to learn everything I can. I
          mostly spend my time working on different backend technologies
          (sometimes trying to touch some frontend too).
          <br /> And sometimes I also spend my time thing about things which
          don't have anything to do with me or anyone, to be precise.
          <br /> I have previously worked on many projects and, I am working on
          many projects. One more thing, I am also trying to get my hands on ML
          and AWS cloud services.
          <br /> That's all about it.
          <br /> Now some fun facts I love Music and, I also love remaking them.
          Just kidding, if you want to destroy your favorite song, please,
          contact me personally.
          <br /> I am also a big fan of old-school rock.
        </div>
        <br />
        <div className={"aboutme-tech"}>
          <h3>Technologies which I love:</h3>
          <ul style={{ transform: "translateX(1em)" }}>
            <li>MERN Stack</li>
            <li>MERN Stack</li>
            <li>MERN Stack</li>
            <li>MERN Stack</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
