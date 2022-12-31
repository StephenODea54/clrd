import About from "./pageSections/About";
import Registration from "./pageSections/Registration";
import Practices from "./pageSections/Practices";
import Games from "./pageSections/Games";
import Other from "./pageSections/Other";
import SocialMedia from "./pageSections/SocialMedia";

const Home = () => {
  return (
    <div className="font-proxima-nova-regular">
      <About />
      <Registration />
      <Practices />
      <Games />
      <Other />
      <SocialMedia />
    </div>
  );
};

export default Home;
