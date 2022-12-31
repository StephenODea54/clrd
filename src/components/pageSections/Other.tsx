import Hyperlink from "../pageElements/Hyperlink";
import Forms from "../pageElements/Forms";

const Other = () => {
  const formElements = [
    {
      name: "Registration Form",
      form: "registrationForm",
    },
    {
      name: "Emergency Medical Release Form",
      form: "emergencyMedicalForm",
    },
    {
      name: "Parental Contract",
      form: "parentalContract",
    },
    {
      name: "Photo Release Form",
      form: "photoReleaseForm"
    },
  ];

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
              <Hyperlink
                url={"https://usafootball.com/development-training/certification/"}
                text={"USA Football Holistic Youth Coach Certification"}
                color="red"
              />
              . This certification aids in identifying concussions and other health and safety issues, and provides a rubric for developing athlete's understanding through all levels of contact that occur in a football game.
            </p>
            <p>
              We also require that at least once coach be CPR certified.
            </p>
            <p className="font-semibold text-slate-900 text-2xl">
              Forms
            </p>
          </div>
          <Forms
            formElements={formElements}
          />
        </div>
      </div>
    </section>
  );
};

export default Other;
