import { SocialIcon } from "react-social-icons";

import PricingCard from "./PricingCard";
import { PricingInfo } from "./PricingCard";

const Home = () => {
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

  return (
    <div className="font-proxima-nova-regular">
      <section className="overflow-hidden py-24 sm:py-40">
        <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
          <div className="relative">
            <h2 className="text-center text-4xl leading-[1.2] tracking-tighter text-slate-900 sm:text-[3.5rem] sm:leading-[4.5rem]">
              The Future of Red Devil Football Starts Here
            </h2>
            <div className="space-y-8 text-lg leading-8 mt-16">
              <p className="text-2xl leading-10 tracking-tight text-slate-900">
                The <span className="font-medium text-red-500">Campbell Little Red Devils</span> is a 501(c)(3)
                non-profit youth organization that offers kids in the community a chance to learn the fundamentals of
                Football and Cheerleading. Our league starts with kindergarteners and continues through the sixth grade.
                The teams are divided into three divisions: <span className="font-medium text-red-500">Bantam</span>,{" "}
                <span className="font-medium text-red-500">Junior Varisty</span>, and{" "}
                <span className="font-medium text-red-500">Varsity</span>.
              </p>
              <p>
                The Bantam team is kindergarten through second grade, and it is flag football so there is only minimal contact. Scores are not kept for Bantam games and there are not any postseason opportunities. The reason for this is that we put a
                much higher emphasis on fun and fundamentals for these younger teams. Please note that not all teams in
                the MVJFL are required to have Bantam teams, so it is likely that there will be gaps in the
                schedule due to scheduling opportunities. For more information on the rules for flag football, please
                visit the{" "}
                <a href="https://www.mvjflfootball.com/flag">
                  <span className="text-red-600 no-underline hover:text-red-300">this link</span>
                </a>
                .
              </p>
              <p>
                Junior Varsity and Varsity squads are normal tackle football with equipment. Junior Varsity is third to fourth grade, and Varsity is fifth to sixth grade. Unlike the Bantam, these
                squads are eligible to particpate in a post-season tournament. Eligibility for the tournament is based
                on record and first-half point totals. There are two tiers in the MVJFL, and each tier has their own
                separate rulebook. Click{" "}
                <a href="https://www.mvjflfootball.com/lower-tier-rules">
                  <span className="text-red-600 no-underline hover:text-red-300">this link</span>
                </a>{" "}
                for a complete overview of all playing and eligibility rules for the lower-tier.
              </p>
              <p>
                All cheerleading squads are required to participate in a Cheer Competition that takes place towards the
                end of the season. See the link in the above for more information on the rules and regulations for
                cheerleading.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                <a href="https://form.jotform.com/223624935475059">
                  <span className="text-red-600 no-underline hover:text-red-300">link</span>
                </a>
                . Online registration is open all year. In person registration dates have not been set for the 2023 season, but are expected to be in late May or early June.
              </p>
              <p>We accept the following forms of payment:</p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
                  Cash
                </li>
                <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
                  Check
                </li>
                <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
                  Debit/Credit Card
                </li>
                <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
                  CashApp (<a href="https://cash.app/$CLRD2021/"><span className="text-[#04c34e] hover:text-green-300">$CLRD2021</span></a>)
                </li>
                <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
                  VenMo (<a href="https://venmo.com/CLRD2021"><span className="text-[#008cff] hover:text-blue-300">@CLRD2021</span></a>)
                </li>
              </ul>
              <p>Below is a summary of the registration cost for each squad:</p>
            </div>
            <div className="mx-auto grid md:grid-cols-3 sm:grid-cols-1 md:auto-rows-auto sm:grid-rows-3 md:gap-x-8 sm:gap-y-8 place-items-center mt-24">
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
      <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
            <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
              Practices
            </h3>
            <div className="space-y-8 text-lg leading-8 mt-6">
              <p>
                Practices will be held at Roosevelt for all teams. Football practice will be held next to the Tee Ball field and Cheerleading practices will either be held across at the Ampitheater or at the Community Center near the middle of the park. Practices for all teams will start July 10th.
              </p>
              <p>
                Practices in the summer (when school is not in session) will be from 6:00 - 8:00 PM. Once school starts, practices will be held from 5:30 - 7:30 PM. The days that practice will be held is up to each coach"s discretion, and does not have to coincide with any other team. Coaches will be in contact with more information as the start of the season gets closer.
              </p>
              <p>
                You are also able to check each team"s practice schedule, as well as the schedule for all things related to the organization, by clicking{" "}
                <a href="https://calendar.google.com/calendar/u/0?cid=b2RlYXN0ZXBoZW4xQGdtYWlsLmNvbQ">
                  <span className="text-red-600 no-underline hover:text-red-300">
                    here
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
            <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
              Games
            </h3>
            <div className="space-y-8 text-lg leading-8 mt-6">
              <p>
              All home games will be held on Saturday. The majority of away games will also be held on Saturday but there is a possibility of Sunday games due to scheduling conflicts between the various high school stadiums and teams. When schedules are availble, they can be found at the bottom of this page under the <span className="font-semibold text-red-600">forms</span> section.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
            <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
              Important Information and Forms
            </h3>
            <div className="space-y-8 text-lg leading-8 mt-6">
              <p>
                All football coaches must complete the{" "}
                <a href="https://usafootball.com/development-training/certification/">
                  <span className="text-red-600 no-underline hover:text-red-300">
                    USA Football Holistic Youth Coach Certification
                  </span>
                </a>
                . This certification aids in identifying concussions and other health and safety issues, and provides a rubric for developing athletes" understanding through all levels of contact that occur in a football game. Please note that this requirement is precautionary, since concussions at this level of football are extremely rare.
              </p>
              <p>
                We also require that at least once coach be CPR certified.
              </p>
              <p className="font-semibold text-slate-900 text-2xl">
                Forms
              </p>
            </div>
            <dd className="space-y-8 text-lg leading-8 mt-12">
            <ul className="-mx-4 !mt-6 bg-slate-50 px-4 py-6 sm:mx-0 sm:rounded-3xl sm:px-8">
              <li>
                <a href="/forms/registrationForm.pdf" className="group flex justify-between py-2">
                  <div className="font-semibold text-slate-900 group-hover:text-red-500">
                    Registration Form (PDF)
                  </div>
                </a>
              </li>
              <li>
                <a href="/forms/emergencyMedicalForm.pdf" className="group flex justify-between py-2">
                  <div className="font-semibold text-slate-900 group-hover:text-red-500">
                    Emergency Medical Release Form (PDF)
                  </div>
                </a>
              </li>
              <li>
                <a href="/forms/parentalContract.pdf" className="group flex justify-between py-2">
                  <div className="font-semibold text-slate-900 group-hover:text-red-500">
                    Parent Contract (PDF)
                  </div>
                </a>
              </li>
              <li>
                <a href="/forms/photoReleaseForm.pdf" className="group flex justify-between py-2">
                  <div className="font-semibold text-slate-900 group-hover:text-red-500">
                    Photo Release Form (PDF)
                  </div>
                </a>
              </li>
            </ul>
          </dd>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
            <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
              Social Media Links
            </h3>
            <div className="mt-8 text-lg leading-8 mt-6 grid grid-cols-3 place-items-center">
              <div>
                <SocialIcon
                  url="#"
                  network="facebook"
                />
              </div>
              <div>
                <SocialIcon
                  url="#"
                  network="instagram"
                />
              </div>
              <div>
                <SocialIcon
                  url="#"
                  network="youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
