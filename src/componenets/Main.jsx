import React, { useEffect, useState } from "react";

export default function Main() {
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [randomImage, setRandomImage] = useState(
    "https://i.imgflip.com/39t1o.jpg"
  );
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((result) => {
        setAllMemes(result.data.memes);
      });
  }, []);

  function getRandomImage() {
    const rundomNumber = Math.floor(Math.random() * allMemes.length);
    setRandomImage(allMemes[rundomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          className="form--input"
          value={textTop}
          onChange={(event) => setTextTop(event.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          className="form--input"
          value={textBottom}
          onChange={(event) => setTextBottom(event.target.value)}
        />
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{textTop}</h2>
        <h2 className="meme--text bottom">{textBottom}</h2>
      </div>
    </main>
  );
}
