import "./Experience.css";
const Experience = (props: any) => {
  return (
    <div className="exContainer">
      <div>
        <h2>{props.org}</h2>
        <h3>{props.pos}</h3>
        <h4>{props.dura}</h4>
        <br />
        <br />
        {props.details1}
        <br />
        <br />
        {props.details2}
        <br />
        <br />
        {props.details3}
        <br />
        <br />
        {props.details4}
        <br />
        <br />
        {props.details5}
      </div>
    </div>
  );
};

export default Experience;
