import PricingCard, { PricingInfo} from "../pageElements/PricingCard";
import Hyperlink from "../pageElements/Hyperlink";
import List from "../pageElements/List";

const Registration = () => {
  const pricingInfo = {
    cheerleading: {
      pricingInfo:  {
        team: "Cheerleading",
        price: 125,
        startingGrade: "K",
        endingGrade: "6th",
      } as PricingInfo,
      equipment: [
        "Uniform",
        "Shoes",
        "Bows",
        "Socks",
        "Spanks",
        "Midriff",
      ],
    },
    bantam: {
      pricingInfo:  {
        team: "Bantam",
        price: 50,
        startingGrade: "K",
        endingGrade: "2nd",
      } as PricingInfo,
      equipment: [
        "Uniform",
        "Flags",
        "Socks",
      ],
    },
    football: {
      pricingInfo:  {
        team: "JV and Varsity Football",
        price: 100,
        startingGrade: "3rd",
        endingGrade: "6th",
      } as PricingInfo,
      equipment: [
        "Uniform",
        "Helmet",
        "Shoulder Pads",
        "Integrated Pants",
        "Socks",
        "Mouth Piece",
      ],
    },
  };

  const paymentInfo = [
    "Cash",
    "Check",
    "Debit/Credit Card",
    <>
      CashApp (
        <Hyperlink
          url={"https://cash.app/$CLRD2021/"}
          text={"$CLRD2021"}
          color={"lime"}
        />
      )
    </>,
    <>
      Venmo (
        <Hyperlink
          url={"https://venmo.com/CLRD2021"}
          text={"@CLRD2021"}
          color={"sky"}
        />
      )
    </>,
  ];

  return(
    <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
            <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
              Registration and Fees
            </h3>
            <div className="space-y-8 text-lg leading-8 mt-6">
              <p>
                If you would like to get your child involved in the CLRD, please contact one of the board members,
                coaches, or simply register online or in person. Online registration can be found at this{" "}
                <Hyperlink
                  url={"https://form.jotform.com/223624935475059"}
                  text={"link"}
                  color={"red"}
                />
                . Online registration is open all year. In person registration dates have not been set for the 2023 season, but are expected to be in late May or early June. {" "}
                <span className="font-bold">
                  All registration fees for the 2023 season will be due July 24th.
                </span>
              </p>
              <p>We accept the following forms of payment:</p>
              <List
                elements={paymentInfo}
              />
              <p>Below is a summary of the registration cost for each squad:</p>
            </div>
            <div className="mx-auto grid md:grid-cols-3 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-3 gap-8 place-items-center mt-24">
              <PricingCard
                pricingInfo={pricingInfo.bantam.pricingInfo}
                equipment={pricingInfo.bantam.equipment}
              />
              <PricingCard
                pricingInfo={pricingInfo.football.pricingInfo}
                equipment={pricingInfo.football.equipment}
              />
              <PricingCard
                pricingInfo={pricingInfo.cheerleading.pricingInfo}
                equipment={pricingInfo.cheerleading.equipment}
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Registration;
