import BoldText from "../pageElements/BoldText";
import Hyperlink from "../pageElements/Hyperlink";

const About = () => {
  return(
    <section className="overflow-hidden py-24 sm:py-40">
      <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0">
        <div className="relative">
          <h2 className="text-center text-4xl leading-[1.2] tracking-tighter text-slate-900 sm:text-[3.5rem] sm:leading-[4.5rem]">
            The Future of Red Devil Football Starts Here
          </h2>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p className="text-2xl leading-10 tracking-tight text-slate-900">
              The {" "}
              <BoldText
                text={"Campbell Little Red Devils"}
              />
              {" "} is a 501(c)(3)
              non-profit youth organization that offers kids in the community a chance to learn the fundamentals of
              Football and Cheerleading. Our league starts at kindergarten and continues through the sixth grade.
              The teams are divided into three divisions:{" "}
              <BoldText
                text={"Bantam"}
              />
              ,{" "}
              <BoldText
                text={"Junior Varsity"}
              />
              ,{" "}
              <BoldText
                text={"Varsity"}
              />
              .
            </p>
            <p>
              The Bantam team is kindergarten through second grade, and is flag football with only minimal contact. Scores are not kept for Bantam games and there are not any postseason opportunities. The reason for this is that we put a
              much higher emphasis on fun and fundamentals for these younger teams. Please note that not all teams in
              the MVJFL are required to have Bantam teams, so it is likely that there will be gaps in the
              schedule due to scheduling opportunities. For more information on the rules for flag football, please
              visit {" "}
              <Hyperlink
                url={"https://www.mvjflfootball.com/flag"}
                text={"this link"}
                color={"red"}
              />
              .
            </p>
            <p>
              Junior Varsity and Varsity squads are normal tackle football with equipment. Junior Varsity is third through fourth grade, and Varsity is fifth through sixth grade. Unlike the Bantam, these
              squads are eligible to particpate in a post-season tournament. Eligibility for the tournament is based
              on record and first-half point totals. There are two tiers in the MVJFL, and each tier has their own
              separate rulebook. Click{" "}
              <Hyperlink
                url={"https://www.mvjflfootball.com/lower-tier-rules"}
                text={"this link"}
                color={"red"}
              />{" "}
              for a complete overview of all playing and eligibility rules for the lower-tier.
            </p>
            <p>
              All cheerleading squads are required to participate in a Cheer Competition that takes place towards the
              end of the season. See the link in the above paragraph for more information on the rules and regulations for
              cheerleading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
