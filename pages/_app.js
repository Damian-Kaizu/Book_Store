import "../styles/globals.css";
import "../styles/slider.css";
import "../styles/card.css";
import "../styles/swiper.css";
import "../styles/PopularNow.css";
import "../styles/genrecard.css";
import { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}

export default MyApp;
