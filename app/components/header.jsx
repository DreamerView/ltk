'use client'

import Link from "next/link";
import { useEffect } from "react";

const HeaderModule = () => {
    useEffect(()=>{
        const elem = document.body;
        const bar = document.querySelector('.bar');
        const updateBar = () => {
            let scrollPos = (window.scrollY/(elem.scrollHeight-window.innerHeight))*100;
            bar.style.width = `${scrollPos}%`;
            requestAnimationFrame(updateBar);
        };
        updateBar();
    },[])
    return(
        <header>
            <div className="headerBlock">
                <div className="logo">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <button className="burgerNav">
                    <svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 24 24"  width="24px"  fill="#FFFFFF">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>
                </button>
                <nav>
                    <ul>
                        <li><Link href="/">Example 1</Link></li>
                        <li><Link href="/">Example 2</Link></li>
                        <li><Link href="/about">Example 3</Link></li>
                        <li><Link href="/about">Example 4</Link></li>
                        <li><Link href="/about">Example 5</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="progress">
                <span className="bar"></span>
            </div>
        </header>
    );
};

export default HeaderModule;