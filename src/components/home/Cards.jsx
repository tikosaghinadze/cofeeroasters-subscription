import Card from "./Card";
const Cards = (props) => {
  return (
    <div className=" h-[1021px] relative mb-28 rounded-[10px] mt-28 w-full bg-lightBlue flex flex-col items-center px-6 md:h-[558px;] xl:w-[1280px] xl:h-[]">
      <div>
        <h2 className="text-2xl font-body-font1 text-light mt-16 text-center">
          {" "}
          Why choose us?
        </h2>
        <p className="text-[15px] leading-[25px] font-normal text-light opacity-80 mt-6 text-center  md:w-[540px]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="p-6 top-[335px] absolute w-full h-[1194] flex flex-col items-center mt-16 gap-6 md:top-[175px] xl:mt-[86px] xl:flex-row xl:justify-center xl:gap-x-8">
        {props.items.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
