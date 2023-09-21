import React from "react";
import AxiosMarkdown from "../../../functions/AxiosMarkdown";

import Headline from "../../atoms/Headline";
import BookmarkBox from "../../molecules/BookmarkBox";


interface BookmarkListProps {
  year: number;
  cat: string;
  catname: string;
}


function BookmarkList( { year, cat, catname } : BookmarkListProps ) {
  const markdown = AxiosMarkdown({
    year : year,
    cat: cat
  })
  return(
    <div className="bookmarkList" data-cat={cat}>
      <div className="bookmarkList-inner">
        <Headline
          text={`【${year}年】${catname}`}
          classSet="text-lg mb-4 px-4 py-2 md:text-2xl"
        />
        <BookmarkBox
          data={ typeof markdown === 'string' ? markdown : ''}
        />
      </div>
    </div>
  )
}


export default BookmarkList;