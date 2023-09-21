import React from "react";
import ReactMarkdown from 'marked-react';


interface MarkdownProps {
  text: string;
}


function Markdown( { text = '' } : MarkdownProps ) {
  return(
    <ReactMarkdown
      value={text}
      openLinksInNewTab={true}
    />
  )
}


export default Markdown;