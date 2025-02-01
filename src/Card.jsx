import { use } from "react";
import { useState, useEffect } from "react";
function Card({ title }) {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2 style={{ textAlign: "center" }}>
        {title} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "💙"}
      </button>
    </div>
  );
}

export default Card;
