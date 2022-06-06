import { useState, useEffect } from "react";

const useWindowWidth = _ => {
  // стейт размера экрана
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(_ => {
    // функция получения ширины экрана
    const getWindowWidth = _ => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWindowWidth);

    return _ => window.removeEventListener('resize', getWindowWidth);
  }, []);
  return screenWidth;
}

export default useWindowWidth;
