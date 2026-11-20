import { useState } from "react";

function CatFacts() {
  const facts = [
    "Cats sleep for around 12–16 hours a day.",
    "A group of cats is called a clowder.",
    "Cats use their whiskers to help navigate spaces.",
    "Cats have five toes on their front paws!",
  ];

  const [factIndex, setFactIndex] = useState(0);

  return (
    <section id="cat-facts" className="cat-facts">
      <h2>Real Cat Facts</h2>
      <p>{facts[factIndex]}</p>
      <button
        className="cat-facts-button"
        onClick={() => setFactIndex((factIndex + 1) % facts.length)}
      >
        Next cat Fact
      </button>
    </section>
  );
}

export default CatFacts;
