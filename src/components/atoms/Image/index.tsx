import React from "react";


interface ImageProps {
  classSet?: string;
  src: string;
  alt?: string;
}


function Image( { classSet = '', src, alt = '' } : ImageProps ) {
  return(
    <>
      <img className={classSet} src={src} alt={alt} />
    </>
  )
}


export default Image;