import { useState } from "react";

const PlanQuestions = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const showAnswersHandle = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <div className="mt-[110px] w-full flex flex-col items-center gap-[96px]">
      {props.items.map((item, index) => {
        return (
          <div key={item.id} className="w-full flex flex-col justify-start ">
            <div className="mb-8 flex flex-beatween items-center gap-[69px]">
              <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
                {item.question}
              </h2>
              {selectedItem === item ? (
                <img
                  onClick={() => showAnswersHandle(item)}
                  className="w-[18px] h-[11px]"
                  src={item.closeArrow}
                  alt="arrow svg"
                />
              ) : (
                <img
                  onClick={() => showAnswersHandle(item)}
                  className="w-[18px] h-[11px]"
                  src={item.openArrow}
                  alt="arrow svg"
                />
              )}
            </div>
            {selectedItem === item && (
              <section className="w-full flex flex-col items-center gap-4">
                {item.options.map((type) => {
                  return (
                    <div
                      className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                      key={type.id}
                    >
                      <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                        {type.type}
                      </h3>
                      <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                        {type.answer}
                      </p>
                    </div>
                  );
                })}
              </section>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default PlanQuestions;
