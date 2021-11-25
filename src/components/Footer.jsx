import React from "react";
const d = new Date();

const currentYear = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright @ {currentYear}</p>
    </footer>
  );
}

export default Footer;
