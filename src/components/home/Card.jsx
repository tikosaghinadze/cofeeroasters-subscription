const Card = (props) => {
  return (
    <div className="w-full h-[382px] bg-hulk rounded-lg flex flex-col items-center  ">
      <div className="mt-[72px]">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="w-full flex flex-col items-center ">
        <h2 className="mt-14 font-body-font1 font-black text-2xl text-light">
          {props.title}
        </h2>
        <p className="font-body-font2 text-[15px] leading-[25px] font-normal text-light opacity-80 mt-6 text-center w-[212px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
