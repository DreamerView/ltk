"use client"
import { useState } from "react";
import Image from "next/image";

const listComponent = ({items}) => {
    const [spoiler,setSpoiler] = useState('overflow');
    const handleSpoiler = () => {
        setSpoiler(spoiler === 'overflow'?"":"overflow");
    };
    return(
        <>
        <section id="services" className={`listRow ${spoiler}`}>
            <div className="listRowBlock">
                <h1>Наши <strong>услуги</strong></h1>
                <p>Мы обеспечиваем качество, надежность и инновации в каждой услуге.</p>
                <div className="listRowBlockRow">
                    {items.map((e,index)=>
                        <div key={index} className="listRowBlockContent">
                            <h2>{e.title}</h2>
                            <hr />
                            <div className="listBlockRow">
                                <div className="listBlock2"></div>
                                <div className="listBlock1"></div>
                                <div className="listBlock">
                                    <Image src="/images/logo.svg" width="100" height="100" priority />
                                </div>
                                <div className="listAction">
                                    <div className="listActionBlock">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  enableBackground="new 0 0 24 24"  height="48px"  viewBox="0 0 24 24"  width="48px"  fill="#FFFFFF">  <rect fill="none" height={24} width={24} />  <path d="M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <div className="fade">
            <button onClick={handleSpoiler}>{spoiler==='overflow'?"Показать полностью":"Скрыть"}</button>
        </div>
        </>
    )
};

export default listComponent;