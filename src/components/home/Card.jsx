const Card = (props) => {
  return (
    <div className="w-full h-[382px] bg-hulk rounded-lg flex flex-col items-center md:h-[180px] md:flex-row md:pl-[70px] md:gap-x-14 xl:flex-col xl:p-12 md:pb-[50px] xl:w-[350px] xl:h-[382px]">
      <div className="mt-[72px] xl:mt-6">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="w-full flex flex-col items-center md:w-fit md:items-start xl:w-full xl:items-center ">
        <h2 className="mt-14 fraunces font-black text-2xl text-light">
          {props.title}
        </h2>
        <p className="barlow text-[15px] leading-[25px] font-normal text-light opacity-80 mt-6 text-center w-[212px] md:text-left md:w-[344px] xl:w-full xl:text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
