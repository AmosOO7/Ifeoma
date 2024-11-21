import "./Projects.css";
const Projects = (props: any) => {
  return (
    <div>
      <div className="Pcontainer">
        <div className="contains">
          <h1>{props.number}.</h1>
          <a target="_blank" href={props.link}>
            <img src={props.image}></img>
          </a>
          <p>{props.content}</p>
          <p>
            Technologies:<div>{props.tech}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
