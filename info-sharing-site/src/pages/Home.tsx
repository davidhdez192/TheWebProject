import CatFacts from "../components/CatFacts";
import DraggableBox from "../components/DraggableBox";
import InfoCards from "../components/InfoCards";
import MediaPlayer from "../components/MediaPlayer";

const tracks: Array<{ title: string; artist: string; src: string }> = [
  { title: "LYSINE", artist: "Yoshimi Kudou", src: "/music/LYSINE.mp3" },
  {
    title: "DEOXYRIBOSE",
    artist: "Yoshimi Kudou",
    src: "/music/DEOXYRIBOSE.mp3",
  },
];

function Home() {
  return (
    <main id="home">
      <h1> Welcome to Mieu's Kitty Litter</h1>
      <p>Your one-stop shop for all things cat-related!</p>

      <DraggableBox>
        <MediaPlayer tracks={tracks} />
      </DraggableBox>

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
