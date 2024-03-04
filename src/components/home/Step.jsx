const Step = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2>{props.step}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
export default Step;
