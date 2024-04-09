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
      <ul className="list-none flex flex-col items-center mt-3 gap-y-12 md:-mt-10 xl:flex-row xl:gap-x-8 ">
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
