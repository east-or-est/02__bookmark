import React from "react";


interface HeadlineProps {
  classSet?: string;
  text: string;
  Component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


function Headline( { classSet = '', text, Component = 'h2' } : HeadlineProps ) {
  return(
    <Component className={classSet}>
      { text }
    </Component>
  )
}


export default Headline;