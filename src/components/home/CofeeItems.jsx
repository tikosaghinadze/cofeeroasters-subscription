const CofeeItems = (props) => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:gap-x-14 z-20 xl:flex-col">
      <img
        className="w-[200px] translate-x-5"
        src={props.image}
        alt={props.title}
      />
      <div className="flex flex-col w-full items-center gap-x-4 md:w-[282px] md:gap-6  ">
        <h2 className="text-2xl font-body-font1 text-darkBlue text-center md:text-start ">
          {props.title}
        </h2>
        <p className="text-center text-darkBlue font-body-font2 font-normal text-[15px] leading-6 md:text-left xl:text-center xl:w-[255px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default CofeeItems;
