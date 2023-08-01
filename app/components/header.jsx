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