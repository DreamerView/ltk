'use client'

import Link from "next/link";
import { useEffect,useRef,useState } from "react";

const HeaderModule = () => {
    const [burger,setBurger] = useState(false);
    const ref = useRef();
    useEffect(()=>{
        const elem = document.body;
        const bar = document.querySelector('.bar');
        const updateBar = () => {
            let scrollPos = (window.scrollY/(elem.scrollHeight-window.innerHeight))*100;
            bar.style.width = `${scrollPos}%`;
            requestAnimationFrame(updateBar);
        };
        updateBar();
    },[]);
    const openBurger = () => {
        if(burger===false) {
            ref.current.style.cssText="display:block;"
            setBurger(true);
        } 
        else {
            ref.current.style.cssText="display:none;"
            setBurger(false);
        }
    };
    return(
        <header>
            <div className="headerBlock">
                <div className="logo main-object1">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <button className="burgerNav main-object-2" onClick={openBurger}>
                    {burger===false?<svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 24 24"  width="24px"  fill="#FFFFFF">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>:
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>}
                </button>
                <nav className="object" ref={ref}>
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