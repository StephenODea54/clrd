import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return(
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
  );
};

export default SocialMedia;
