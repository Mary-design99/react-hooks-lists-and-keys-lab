import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

   return (
    <nav>
      {/* Map over the links array to create <a> tags */}
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );

}

export default NavBar;
