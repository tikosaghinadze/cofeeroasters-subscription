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
                          : "bg-gray2 text-darkBlue"
                      }`}
                      key={type.id}
                    >
                      <h3 className=" text-2xl font-black font-body-font1 leading-8">
                        {type.type}
                      </h3>
                      <p className=" font-body-font2 font-normal text-base leading-[26px]">
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
        <>
          <div
            onClick={() => setShowModal(!showModal)}
            className="bg-black opacity-80 inset-0 fixed w-full h-full"
          ></div>
          <div className="rounded-[10px]  z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[327px]  flex items-center flex-col  bg-gray-800 ">
            <div className="bg-darkBlue w-full h-[92px] rounded-tl-[10px] rounded-tr-[10px] flex justify-start px-6  items-center">
              {" "}
              <h3 className="text-white font-body-font1 text-[28px] font-black">
                Order Summary
              </h3>
            </div>
            <div className="mt-8 px-6">
              <p className="mt-[10px] font-body-font1 text-gray text-2xl font-black leading-10">
                "I drink my coffee as
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
                ."
              </p>
              <p className=" font-body-font2 leading-[25px] font-normal text-[15px] text-darkBlue">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
              <button className=" my-6 px-4 py-[35px] bg-hulk w-full h-[56px] rounded-[6px] flex justify-center items-center text-lg font-black text-light font-body-font1 ">
                Checkout - $14.00 / mo
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlanQuestions;
