const Games = () => {
  return(
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
  );
};

export default Games;
