import Hyperlink from "../pageElements/Hyperlink";

const Practices = () => {
  return(
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
                Practices in the summer (when school is not in session) will be from 6:00 - 8:00 PM. Once school starts, practices will be held from 5:30 - 7:30 PM. The days that practice will be held is up to each coach's discretion, and does not have to coincide with any other team. Coaches will be in contact with more information as the start of the season gets closer.
              </p>
              <p>
                You are also able to check each team's practice schedule, as well as the schedule for all things related to the organization, by clicking{" "}
                <Hyperlink
                  url={"https://calendar.google.com/calendar/u/0?cid=b2RlYXN0ZXBoZW4xQGdtYWlsLmNvbQ"}
                  text={"here"}
                  color={"red"}
                />
                .
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Practices;
