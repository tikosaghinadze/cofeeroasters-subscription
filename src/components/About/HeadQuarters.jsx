import HeadQuarter from "./HeadQuarter";

const HeadQuarters = (props) => {
  return (
    <div className="w-full mb-[105px] flex flex-col items-center mt-[100px]">
      <h2 className="mb-[72px] font-body-font1 text-2xl text-gray font-black">
        Our headquarters
      </h2>
      <div className="w-full flex flex-col items-center gap-[80px]">
        {props.items.map((item) => {
          return (
            <HeadQuarter
              key={item.city}
              image={item.image}
              country={item.country}
              address={item.address}
              city={item.city}
              province={item.province}
              number={item.number}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HeadQuarters;
