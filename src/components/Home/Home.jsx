import Image from "../../assets/images/home/mobile/image-hero-coffeepress.jpg";
const Home = () => {
  return (
    <div className="home-introduce">
      <div
        className="wellcome-card"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h2 className="greate-cofee">Great coffee made simple.</h2>
        <p className="start-your-morning">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="createyourPlan-btn">Create your plan</button>
      </div>
      <section className="cofee-collection"></section>
      <div className="why-choose-us">
        <article>
          <h2></h2>
          <p></p>
        </article>
        <div className="company-benefits">
          <div className="benefit1"></div>
          <div className="benefit2"></div>
          <div className="benefit3"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
