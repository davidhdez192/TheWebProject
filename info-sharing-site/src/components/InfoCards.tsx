function InfoCards() {
  return (
    <div className="cards-container">
      <a href="#cat-breeds">
        <div className="info-card">
          <img src="/images/calicat.png" alt="Calico Cat" />
          <h3>Cat Breeds</h3>
          <p>Look at my cats</p>
        </div>
      </a>

      <a href="#cat-chibi">
        <div className="info-card">
          <img src="/images/champ_cat.png" alt="Black Cat" />
          <h3>Cat Chibi</h3>
          <p>My cute cat</p>
        </div>
      </a>

      <a href="#cat-facts">
        <div className="info-card">
          <img src="/images/kat_cat.png" alt="Owner and cat" />
          <h3>Cat Facts</h3>
          <p>Learn about cats</p>
        </div>
      </a>
    </div>
  );
}

export default InfoCards;
