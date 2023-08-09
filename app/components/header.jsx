'use client'

import { useEffect,useRef,useState } from "react";

const HeaderModule = () => {
    const [burger,setBurger] = useState(false);
    const [active,setActive] = useState(null);
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
    const closeBurger = (e) => {
        if (window.matchMedia("(max-width: 700px)").matches) {
            ref.current.style.cssText="display:none;"
            setBurger(false);
        }
        const action = e.target;
        if(active!==null) active.classList.remove('active');
        setActive(action);
        action.classList.add('active');
    };
    return(
        <header>
            <div className="headerBlock">
                <div className="logo main-object1">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="main-object2">
                <button className="burgerNav" onClick={openBurger}>
                    {burger===false?<svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 24 24"  width="24px"  fill="#FFFFFF">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>}
                </button>
                </div>
                <nav className="object" ref={ref}>
                    <ul>
                        <li><a onClick={closeBurger} data="partners" href="#partners">Партнеры</a></li>
                        <li><a onClick={closeBurger} data="services" href="#services">Услуги</a></li>
                        <li><a onClick={closeBurger} data="reference" href="#reference">Референц-лист</a></li>
                        <li><a onClick={closeBurger} data="auto" href="#auto">Автоматизация</a></li>
                        <li><a onClick={closeBurger} data="work" href="#work">С чем мы работаем</a></li>
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