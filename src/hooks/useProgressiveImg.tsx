import { useEffect, useState } from "react";

interface IUseProgressiveImg {
  placeholderSrc: string;
  originalSrc: string;
}

function useProgressiveImg({ placeholderSrc, originalSrc }: IUseProgressiveImg) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);

  useEffect(() => {
    const img = new Image();
    img.src = originalSrc;
    img.onload = () => {
      setImgSrc(originalSrc);
    };
  }, [originalSrc]);

  return imgSrc;
}

export default useProgressiveImg;
