const HeadQuarter = (props) => {
  return (
    <div className=" w-full flex flex-col items-center ">
      <img src={props.image} alt={props.country} />
      <h3 className="text-darkBlue mt-[47px] mb-[22px] font-black text-[28px] font-body-font1">
        {props.country}
      </h3>
      <div className="flex flex-col items-center gap-[10px]">
        <span className=" text-base font-normal text-darkBlue font-body-font2 leading-[26px]">
          {props.address}
        </span>
        <span className=" text-base font-normal text-darkBlue font-body-font2 leading-[26px]">
          {props.city}
        </span>
        <span className=" text-base font-normal text-darkBlue font-body-font2 leading-[26px]">
          {props.province}
        </span>
        <span className=" text-base font-normal text-darkBlue font-body-font2 leading-[26px]">
          {props.number}
        </span>
      </div>
    </div>
  );
};
export default HeadQuarter;
