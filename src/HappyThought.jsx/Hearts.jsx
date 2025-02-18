import { useEffect, useState } from "react";

export const Hearts = ({ thought }) => {
  const [hearts, setHearts] = useState(thought.hearts);

  const addHeart = () => {
    return fetch(
      `https://happy-thoughts-api-80bi.onrender.com/thoughts/${thought._id}/like`,
      {
        method: "POST",
      }
    );
  };
  console.log(thought._id);

  const HeartLike = () => {
    console.log("HeartLike function called");
    addHeart()
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        setHearts(data.hearts);
      });
  };

  return (
    <div className="like">
      <button onClick={HeartLike} className="thought-like-button">
        ❤️ {hearts}
      </button>
    </div>
  );
};
