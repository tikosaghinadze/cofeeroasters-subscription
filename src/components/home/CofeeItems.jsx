const CofeeItems = (props) => {
  return (
    <div className="flex flex-col w-full items-center">
      <img
        className="w-[200px] translate-x-5"
        src={props.image}
        alt={props.title}
      />
      <div className="flex flex-col w-full items-center gap-x-4">
        <h2 className="text-2xl font-body-font1 text-darkBlue text-center">
          {props.title}
        </h2>
        <p className="text-center text-darkBlue font-body-font2 font-normal text-[15px] leading-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default CofeeItems;
