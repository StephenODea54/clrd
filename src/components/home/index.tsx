import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import homeData from "./data/homeData";

export const Home = () => {
  return(
    <main>
      {/* About Section */}
      <div className="py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
          <h1 className="text-center text-4xl leading-[1.2] tracking-tighter text-slate-900 sm:text-[3.5rem] sm:leading-[4.5rem]">
            The Future of Red Devil Football Starts Here
          </h1>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p className="text-2xl leading-10 tracking-tight text-slate-900">
              The
              <span className="font-medium text-red-500"> Campbell Little Red Devils </span>
              is a 501(c)(3) non-profit youth organization that offers kids in the community a chance to learn the fundamentals of Football and Cheerleading. Our league starts at first grade and continues through the sixth grade. The teams are divided into three divisions:
              <span className="font-medium text-red-500"> Bantam</span>
              ,
              <span className="font-medium text-red-500"> Junior Varsity</span>
              , and
              <span className="font-medium text-red-500"> Varsity</span>
              .
            </p>
            <p>
              The Bantam team is first through second grade. Starting in the 2023 season, the bantam team will no longer be flag and will instead be tackle football. Though unlikely, please note that some teams in the Eastern Ohio Youth Football League (EOYFL) may not have Bantam teams due to lack of players, so it is possible that there will be gaps in the schedule due to scheduling opportunities.
            </p>
            <p>
              Junior Varsity is third through fourth grade, and Varsity is fifth through sixth grade.
            </p>
            <p>
              All squads are eligible to particpate in a post-season tournament. Eligibility for the tournament is based on record and first-half point totals. There are two tiers in the MVJFL, and each tier has their own separate rulebook. Since the EOYFL is still in its infancy, these rulebooks are not publicly available yet, but will be linked here was finalized.
            </p>
            <p>
              All cheerleading squads are required to participate in a Cheer Competition that takes place towards the end of the season.
            </p>
          </div>
        </section>
      </div>

      {/* Registration Section */}
      <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Registration and Fees
          </h3>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p>
            If you would like to get your child involved in the CLRD, please contact one of the board members, coaches, or simply register online or in person. Online registration can be found at this{" "}
            <Link to="/register">
              <span className="text-red-600 no-underline hover:text-red-300">
                link
              </span>
            </Link>
            . Online registration is open all year. In person registration dates have not been set for the 2023 season, but are expected to be done in late April and all of May.{" "}
            <span className="font-medium text-red-500">
              All registration fees for the 2023 season will be due July 24th.
            </span>
            </p>
            <p>
              We accept the following forms of payment:
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {homeData.paymentInfo.map((el, index) => (
                <li
                  key={index}
                  className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300"
                >
                  {el}
                </li>
              ))}
            </ul>
            <div className="mx-auto grid md:grid-cols-2 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-2 gap-8 place-items-center mt-24">
              {homeData.pricing.map(team => (
                <div
                  key={team.id}
                  className="w-full h-full bg-[radial-gradient(145.05%_100%_at_50%_0%,#292424_0%,#120c0c_57.38%,#2a2828_88.16%)] p-6 ring-1 ring-white/[0.15] rounded-2xl sm:p-8 lg:p-10"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {team.pricingInfo.team}
                  </h3>
                  <div className="mt-5 flex items-center">
                    <div className="text-5xl font-semibold tracking-tighter text-white">
                      ${team.pricingInfo.price}
                      </div>
                    <div className="ml-4 text-slate-400">
                      <div className="text-lg font-medium leading-6">
                        USD
                      </div>
                      <div className="text-sm">
                        {team.pricingInfo.startingGrade} - {team.pricingInfo.endingGrade}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <ul className="mt-10 space-y-4 text-lg leading-8 text-slate-300">
                    {team.equipment.map(el => (
                      <li
                        key={el.id}
                        className="flex"
                      >
                        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 flex-none">
                        <circle cx="16" cy="16" r="12" fill="#DC2626"></circle>
                        <path
                          d="M11.375 16.626a1 1 0 0 0-1.414 1.414l1.414-1.414Zm9.844-3.876a1 1 0 1 0-1.324-1.5l1.324 1.5Zm-6.754 8.38-.707.707a1 1 0 0 0 1.654-.385l-.947-.322Zm.947.322a20.359 20.359 0 0 1 5.807-8.702l-1.324-1.5a22.359 22.359 0 0 0-6.377 9.558l1.894.644ZM9.96 18.04l3.797 3.797 1.414-1.414-3.797-3.797-1.414 1.414Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                      <span className="ml-4 font-medium text-white">
                        {el.label}
                      </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Practices Section */}
      <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Practices
          </h3>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p>
              Practices will be held at Roosevelt Park. Football practice will be held next to the Tee Ball field and Cheerleading practices will either be held across at the Ampitheater or at the Community Center near the middle of the park. Practices for all teams will start July 10th.
            </p>
            <p>
              Practices in the summer (when school is not in session) will be from 6:00 - 8:00 PM. Once school starts, practices will be held from 5:30 - 7:30 PM. The days that practice will be held is up to each coach's discretion, and does not have to coincide with any other team. Coaches will be in contact with more information as the start of the season gets closer.
            </p>
            <p>
              You are also able to check each team's practice schedule, as well as the schedule for all things related to the organization, by clicking{" "}
              <Link
                to="/calendar"
                className="text-red-600 no-underline hover:text-red-300"
              >
                here
              </Link>
            </p>
            <p>
              Water will be provided at games, but not at practice. Please refrain from sending your child to practice with drinks such as soda, juice, and gatorade. A coach may not allow your child to practice if they are without water.
            </p>
          </div>
        </section>
      </div>

      {/* Games Section */}
      <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Games
          </h3>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p>
              All home games will be held on Saturday. The majority of away games will also be held on Saturday but there is a possibility of Sunday games due to scheduling conflicts between the various high school stadiums and teams. You may find the most up-to-date schedule{" "}
              <Link
                to="/schedule"
                className="text-red-600 no-underline hover:text-red-300"
              >
                here
              </Link>
            </p>
            <p>
              For away games, a coach may set up a time for you to follow them to the game. This will depend on the need, availability, and discretion of the coach. If driving yourself, all addresses to all of the games will be included on the schedule.
            </p>
          </div>
        </section>
      </div>

      {/* Other Section */}
      <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Other Information and Forms
          </h3>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p>
              All football coaches must complete the{" "}
              <a href="https://usafootball.com/development-training/certification/">
                <span className="text-red-600 no-underline hover:text-red-300">
                USA Football Holistic Youth Coach Certification
                </span>
              </a>
              . This certification aids in identifying concussions and other health and safety issues, and provides a rubric for developing athlete's understanding through all levels of contact that occur in a football game.
            </p>
            <p>
              We also require that at least one coach be CPR certified.
            </p>
            <p className="font-semibold text-slate-900 text-2xl">
              Forms
            </p>
            <dd className="space-y-8 text-lg leading-8 mt-12">
              <ul className="-mx-4 !mt-6 bg-slate-50 px-4 py-6 sm:mx-0 sm:rounded-3xl sm:px-8">
                {homeData.formElements.map(form => (
                  <li key={form.id}>
                    <a
                      href={form.form}
                      target="_blank"
                      className="group flex justify-between py-2"
                    >
                      <div className="font-semibold text-slate-900 group-hover:text-red-500">
                        {`${form.name} (PDF)`}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </section>
      </div>

      {/* Social Media Section */}
      <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
        <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Social Media Links
          </h3>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <div className="mx-auto grid grid-cols-3 gap-8 place-items-center mt-24">
            {homeData.SocialIcons.map(icon => (
              <SocialIcon
                key={icon.id}
                network={icon.network}
                url={icon.url}
              />
            ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
