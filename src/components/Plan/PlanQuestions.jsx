import { useState } from "react";
import Arrow from "../../assets/images/plan/arrow.svg";
const PlanQuestions = (props) => {
  const [arrow, setshowArrow] = useState(false);
  const showQuestionsHandle = () => {
    setshowArrow(!arrow);
  };
  return (
    <div className="mt-[110px] w-full flex flex-col items-center">
      <div className="w-full flex flex-col justify-start ">
        <div className="mb-8 flex flex-beatween items-center gap-[69px]">
          <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
            How do you drink your coffee?
          </h2>

          {arrow ? (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          ) : (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          )}
        </div>
        {arrow ? (
          <section className="w-full flex flex-col items-center gap-4">
            {props.cofeeCups.map((cofee) => {
              return (
                <div
                  className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                  key={cofee.title}
                >
                  <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                    {cofee.title}
                  </h3>
                  <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                    {cofee.description}
                  </p>
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
      <div className=" mt-[110px] w-full flex flex-col justify-start ">
        <div className="mb-8 flex flex-beatween items-center gap-[69px]">
          <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
            What type of coffee?
          </h2>
          {arrow ? (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          ) : (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          )}
        </div>
        {arrow ? (
          <section className="w-full flex flex-col items-center gap-4">
            {props.cofeeTypes.map((type) => {
              return (
                <div
                  className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                  key={type.title}
                >
                  <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                    {type.title}
                  </h3>
                  <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
      <div className=" mt-[110px] w-full flex flex-col justify-start ">
        <div className="mb-8 flex flex-beatween items-center gap-[69px]">
          <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
            How much would you like?
          </h2>
          {arrow ? (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          ) : (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          )}
        </div>
        {arrow ? (
          <section className="w-full flex flex-col items-center gap-4">
            {props.gramCofees.map((gram) => {
              return (
                <div
                  className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                  key={gram.title}
                >
                  <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                    {gram.title}
                  </h3>
                  <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                    {gram.description}
                  </p>
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
      <div className=" mt-[110px] w-full flex flex-col justify-start ">
        <div className="mb-8 flex flex-beatween items-center gap-[69px]">
          <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
            Want us to grind them?
          </h2>
          {arrow ? (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          ) : (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          )}
        </div>
        {arrow ? (
          <section className="w-full flex flex-col items-center gap-4">
            {props.grindCofees.map((grind) => {
              return (
                <div
                  className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                  key={grind.title}
                >
                  <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                    {grind.title}
                  </h3>
                  <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                    {grind.description}
                  </p>
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
      <div className=" mt-[110px] w-full flex flex-col justify-start ">
        <div className="mb-8 flex flex-beatween items-center gap-[69px]">
          <h2 className=" text-gray font-body-font1 text-2xl font-black leading-7">
            How often should we deliver?
          </h2>
          {arrow ? (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          ) : (
            <img
              onClick={() => showQuestionsHandle()}
              className="w-[18px] h-[11px]"
              src={Arrow}
              alt="arrow svg"
            />
          )}
        </div>
        {arrow ? (
          <section className="w-full flex flex-col items-center gap-4">
            {props.deliverTime.map((time) => {
              return (
                <div
                  className="w-full h-[140px] p-6 flex flex-col gap-2 bg-gray2 rounded-lg cursor-pointer"
                  key={time.title}
                >
                  <h3 className="text-darkBlue text-2xl font-black font-body-font1 leading-8">
                    {time.title}
                  </h3>
                  <p className="text-darkBlue font-body-font2 font-normal text-base leading-[26px]">
                    {time.description}
                  </p>
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
    </div>
  );
};
export default PlanQuestions;
