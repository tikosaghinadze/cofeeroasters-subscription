const Step = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="fraunces font-black text-[72px] leading-[72px] text-cream">
        {props.step}
      </h2>
      <h3
        className="font-body-font1 text-darkBlue font-black text-[28px] leading-8 mt-6"
        style={{ color: props.color }}
      >
        {props.title}
      </h3>
      <p
        className="text-[15px] font-body-font2   text-darkBlue leading-[25px] font-normal mt-6 text-center md:text-left"
        style={{ color: props.color }}
      >
        {props.description}
      </p>
    </div>
  );
};
export default Step;
