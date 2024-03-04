import CofeeItems from "./CofeeItems";

const Collections = (props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full h-[72px] relative md:h-20 xl:h-24">
        <div className="absolute w-full h-full top-0 left-0 bg-text-gradient"></div>
        <h2 className="font-body-font1  text-[40px] leading-[72px] text-center text-gray md:text-[104px] xl:text-[156px]">
          our collection
        </h2>
      </div>
      <ul className="flex flex-col items-center gap-x-12 ">
        {props.items.map((item) => {
          return (
            <CofeeItems
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Collections;
