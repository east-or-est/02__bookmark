import React from "react";
import CopyRight from "../../atoms/CopyRight";
import PageTop from "../../atoms/PageTop";


function Footer() {
  return(
    <footer className="mt-16 pb-8">
      <PageTop />
      <div className="bg-gray-200 mb-8 py-4 px-4 md:px-6">
        <ul className="footer-list">
          <li>
            <a
              href="https://works.derive-point.work/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ポートフォリオサイト
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8 px-4 md:px-6 text-center">
        <p className="mb-1">
          <strong>【デザイン・開発】</strong>
        </p>
        <p className="mb-4">
          ひがし
        </p>
        <p className="mb-1">
          <strong>【Powered by】</strong>
        </p>
        <ul className="footer-list2">
          <li>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center mx-4 md:mx-6">
        <CopyRight />
      </div>
    </footer>
  )
}


export default Footer;