import React from "react";
import {
  useState,
  useEffect
} from 'react'
import { START_YEAR, START_CAT, START_CATNAME } from '../../../const/Set';
import AxiosSet from "../../../functions/AxiosSet";

import BookmarkList from "../../molecules/BookmarkList";


interface BookmarkContentMapProps {
  year: number;
  cat: string;
  name: string;
}


function BookmarkContent() {
  const data : any = AxiosSet();

  const [ year, setYear ] = useState(START_YEAR);
  const [ cat, setCat ] = useState(START_CAT);
  const [ catname, setCatname ] = useState(START_CATNAME);

  const handleClickSel = ( year: number, cat: string, catname: string ) => {
    setCat(cat);
    setYear(year);
    setCatname(catname)
  }
  return(
    <>
      { data ?
      <div className="bookmarkContent-list">
        <ul>
        {data.map(( item: BookmarkContentMapProps, index: number ) =>
          <li key={index} data-cat={item.cat} data-sel={( item.cat === cat && item.year === year ? "true" : "false" ) }>
            <button onClick={() => handleClickSel( item.year as number, item.cat as string, item.name as string ) }>
              <span>{item.year}年</span>{item.name}
            </button>
          </li>
        )}
        </ul>
      </div>
      : false
      }
      <BookmarkList
        year={year}
        cat={cat}
        catname={catname}
      />
    </>
  )
}


export default BookmarkContent;