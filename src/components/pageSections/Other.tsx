const Other = () => {
  return(
    <section>
        <div className="bg-gradient-to-b from-gray-50 py-24 sm:py-40">
          <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
          <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
            Other Information and Forms
          </h3>
            <div className="space-y-8 text-lg leading-8 mt-6">
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
  );
};

export default Other;
