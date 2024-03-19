import { useState } from "react";

const PlanQuestions = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const showAnswersHandle = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    setSelectedAnswer(null);
  };
  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
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
                      onClick={() => selectAnswer(type.id)}
                      className={`w-full h-[140px] p-6 flex flex-col gap-2 rounded-lg cursor-pointer ${
                        selectedAnswer === type.answer
                          ? "bg-blue text-white"
                          : "bg-gray2"
                      }`}
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

      <div className="w-full px-6 py-[37px] flex flex-col bg-darkBlue rounded-[10px] ">
        <h3 className=" font-body-font2 text-gray font-black text-[16px] font ">
          ORDER SUMMARY
        </h3>
        <p className="mt-[10px] font-body-font1 text-white text-2xl font-black leading-10">
          “I drink my coffee as <span className=" text-hulk">Filter</span> ,
          with a <span className=" text-hulk">Decaf</span> type of bean.{" "}
          <span className=" text-hulk">250g</span> ground ala{" "}
          <span className=" text-hulk">Cafetiére</span>, sent to me{" "}
          <span className=" text-hulk">Every Week</span>.”
        </p>
      </div>
    </div>
  );
};
export default PlanQuestions;
