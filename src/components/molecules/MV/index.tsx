import React from "react";
import { SITE_TITLE, SITE_SUB_TITLE } from "../../../const/Meta"

import Image from "../../atoms/Image";
import Headline from "../../atoms/Headline";


function MV() {
  return(
    <div className="min-h-[220px] grid place-items-center md:min-h-[280px] font-ja-go">
      <div className="text-center pt-8">
        <Image
          classSet="w-[120px] mx-auto md:w-[160px]"
          src="assets/img/logo.png"
        />
        <Headline
          classSet="text-lg mt-2"
          text={ SITE_TITLE ? SITE_TITLE : ''}
          Component="h1"
        />
        <p className="text-gray-400">
          { SITE_SUB_TITLE }
        </p>
    </div>
  </div>
  )
}


export default MV;