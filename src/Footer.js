import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by
      <a
        href="https://linkedin.com/in/wendymathabela/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Wendy Mathabela and is
        <a
          href="https://github.com/wendiemat/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://glittery-biscuit-9bee29.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </a>
    </div>
  );
}
