import CatFacts from "../components/CatFacts";
import InfoCards from "../components/InfoCards";



function Home() {
  return (
    <main id="home">
      <h1> Welcome to Mieu's Kitty Litter</h1>
      <p>Your one-stop shop for all things cat-related!</p>

      <InfoCards />

      <CatFacts />

      <section id="cat-chibi">
        <h2>Cat Chibi</h2>
        <p>Look at the cat chibsters!</p>
      </section>
    </main>
  );
}

export default Home;
