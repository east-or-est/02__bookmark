import React from "react";


function PageTop() {
  return(
    <aside className="md:fixed md:z-[100] md:right-2 md:bottom-2">
      <a className="w-full h-[50px] border text-gray-500 border-gray-400 grid text-center place-items-center text-xl bg-white md:w-[50px] hover:bg-gray-400 hover:text-white" href="#">↑</a>
    </aside>
  )
}


export default PageTop;