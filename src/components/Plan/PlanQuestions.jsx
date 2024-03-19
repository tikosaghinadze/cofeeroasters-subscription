import { useState } from "react";

const PlanQuestions = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showModal, setShowModal] = useState(false); // State variable for modal visibility

  const showAnswersHandle = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const selectAnswer = (itemId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [itemId]: answerId,
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle "Create my plan!" button click
  const handleCreatePlan = () => {
    toggleModal(); // Open the modal
  };
  return (
    <div className="mt-[110px] w-full flex flex-col items-center gap-[96px]">
      {props.items.map((item, index) => {
        return (
          <div key={item.id} className="w-full flex flex-col justify-start ">
            <div className="mb-8 flex flex-beatween items-center gap-[69px]">
              <h2 className="text-gray font-body-font1 text-2xl font-black leading-7">
                {item.question}
              </h2>
              <img
                onClick={() => showAnswersHandle(item)}
                className="w-[18px] h-[11px]"
                src={selectedItem === item ? item.closeArrow : item.openArrow}
                alt="arrow svg"
              />
            </div>
            {selectedItem === item && (
              <section className="w-full flex flex-col items-center gap-4">
                {item.options.map((type) => {
                  return (
                    <div
                      onClick={() => selectAnswer(item.id, type.id)}
                      className={`w-full h-[140px] p-6 flex flex-col gap-2 rounded-lg cursor-pointer ${
                        selectedAnswers[item.id] === type.id
                          ? "bg-hulk text-white"
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
        <h3 className="font-body-font2 text-gray font-black text-[16px] font ">
          ORDER SUMMARY
        </h3>
        <p className="mt-[10px] font-body-font1 text-white text-2xl font-black leading-10">
          {"I drink my coffee as "}
          {selectedAnswers[props.items[0].id] && (
            <span className="text-hulk">
              {
                props.items[0].options.find(
                  (opt) => opt.id === selectedAnswers[props.items[0].id]
                ).type
              }
            </span>
          )}
          {", with a "}
          {selectedAnswers[props.items[1].id] && (
            <span className="text-hulk">
              {
                props.items[1].options.find(
                  (opt) => opt.id === selectedAnswers[props.items[1].id]
                ).type
              }
            </span>
          )}
          {" type of bean. "}
          {selectedAnswers[props.items[2].id] && (
            <span className="text-hulk">
              {
                props.items[2].options.find(
                  (opt) => opt.id === selectedAnswers[props.items[2].id]
                ).type
              }
            </span>
          )}
          {" ground ala "}
          {selectedAnswers[props.items[3].id] && (
            <span className="text-hulk">
              {
                props.items[3].options.find(
                  (opt) => opt.id === selectedAnswers[props.items[3].id]
                ).type
              }
            </span>
          )}
          {", sent to me "}
          {selectedAnswers[props.items[4].id] && (
            <span className="text-hulk">
              {
                props.items[4].options.find(
                  (opt) => opt.id === selectedAnswers[props.items[4].id]
                ).type
              }
            </span>
          )}
          {"."}
        </p>
      </div>
      <button
        onClick={handleCreatePlan}
        className=" px-4 py-[35px] bg-hulk w-[217px] h-[56px] rounded-[6px] flex justify-center items-center text-lg font-black text-light font-body-font1 "
      >
        Create my plan!
      </button>
      {showModal && (
        <div className="fixed bg-white w-[327px] inset-0 flex items-center flex-col z-50 bg-gray-800 ">
          <div className="bg-darkBlue w-full">
            {" "}
            <h3 className="text-white font-body-font1 text-[28px] font-black">
              Order Summary
            </h3>
          </div>
          <div>
            <p className="mt-[10px] font-body-font1 text-gray text-2xl font-black leading-10">
              {"I drink my coffee as "}
              {selectedAnswers[props.items[0].id] && (
                <span className="text-hulk">
                  {
                    props.items[0].options.find(
                      (opt) => opt.id === selectedAnswers[props.items[0].id]
                    ).type
                  }
                </span>
              )}
              {", with a "}
              {selectedAnswers[props.items[1].id] && (
                <span className="text-hulk">
                  {
                    props.items[1].options.find(
                      (opt) => opt.id === selectedAnswers[props.items[1].id]
                    ).type
                  }
                </span>
              )}
              {" type of bean. "}
              {selectedAnswers[props.items[2].id] && (
                <span className="text-hulk">
                  {
                    props.items[2].options.find(
                      (opt) => opt.id === selectedAnswers[props.items[2].id]
                    ).type
                  }
                </span>
              )}
              {" ground ala "}
              {selectedAnswers[props.items[3].id] && (
                <span className="text-hulk">
                  {
                    props.items[3].options.find(
                      (opt) => opt.id === selectedAnswers[props.items[3].id]
                    ).type
                  }
                </span>
              )}
              {", sent to me "}
              {selectedAnswers[props.items[4].id] && (
                <span className="text-hulk">
                  {
                    props.items[4].options.find(
                      (opt) => opt.id === selectedAnswers[props.items[4].id]
                    ).type
                  }
                </span>
              )}
              {"."}
            </p>
            <p className=" font-body-font2 font-black tex-[15px] text-darkBlue">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{" "}
            </p>
            <button className=" px-4 py-[35px] bg-hulk w-[217px] h-[56px] rounded-[6px] flex justify-center items-center text-lg font-black text-light font-body-font1 ">
              Checkout - $14.00 / mo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanQuestions;
