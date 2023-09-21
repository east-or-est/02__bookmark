import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import PagesTop from "./components/pages/Top";


const container = document.getElementById('root') as HTMLElement;
if (!container) throw new Error('コンポーネントが見つかりませんでした');
const root = ReactDOM.createRoot(container);
root.render(<PagesTop />);