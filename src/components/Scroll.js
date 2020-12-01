// components/Scroll.js

import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(function mount() {

    window.onscroll = function(ev) {

    };

    function onScroll() {
      console.log(window.scrollY);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            alert('load more')
        }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return true;
}
