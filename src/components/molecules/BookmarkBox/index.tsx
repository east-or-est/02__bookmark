import React from "react";
import Markdown from "../../atoms/Markdown";


interface BookmarkBoxProps {
  data: string | '';
}


function BookmarkBox( { data = '' } : BookmarkBoxProps ) {
  return(
    <div className="bookmarkBox">
      <Markdown
        text={data}
      />
    </div>
  )
}


export default BookmarkBox;