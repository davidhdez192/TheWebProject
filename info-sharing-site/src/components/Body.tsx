import InfoCards from "./InfoCards";
import CatFacts from "./CatFacts";

function Body() {
  return (
    <main id="home">
      <h1>Welcome to Mieu's Kitty Litter</h1>
      <p>Your one-stop shop for all things cat-related!</p>

      <InfoCards />

      <section id="about">
        <h2>Learn more about me!</h2>
        <p>My name is Mieu, and I am a cat enthusiast!</p>
        <p>Learn more about me and my character!</p>
      </section>

      <section id="contact">
        <h2>Contact me</h2>
        <p>
          Feel free to reach out if you have any questions or would like to
          learn more!
        </p>
      </section>

      <CatFacts />

      <section id="cat-chibi">
        <h2>Cat Chibi</h2>
        <p>Look at the cat chibsters!</p>
      </section>

      <section id="cat-breeds">
        <h2>Cat Breeds</h2>
        <p>Breed the cats and learn about their new transformations!</p>
        <img
          src="/images/nekoma_hime.png"
          alt="Cat Girl"
          className="section-image"
        ></img>
      </section>
    </main>
  );
}

export default Body;
