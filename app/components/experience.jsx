"use client"
import { useState } from "react";
import Image from "next/image";

const experienceStory = () => {
    const [spoiler,setSpoiler] = useState('overflow');
    const handleSpoiler = () => {
        setSpoiler(spoiler === 'overflow'?"":"overflow");
    };
    return(
        <>
        <section id="reference" className={`experienceStory ${spoiler}`}>
            <h1>Краткий <b>референц-лист</b></h1>
            <p>Ознакомьтесь с кратким референц-листом, чтобы получить быстрый и структурированный обзор по интересующей вас теме.</p>
            <div className="storyLineBlock">
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="56" src="/images/work/kazakhmys.svg" alt="Корпорация «Казахмыс»" title="Корпорация «Казахмыс»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStoryBrand"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>Корпорация «Казахмыс»</h2>
                        <p>Автоматизированная система управления флотационными машинами</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="118" src="/images/work/erg.svg" alt="ЭС АО «ЕЭК»" title="ЭС АО «ЕЭК»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStorySub"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>ЭС АО «ЕЭК»</h2>
                        <p>Автоматизированная система управления аспирационными установками тракта топливоподачи ЭС АО «ЕЭК»</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="118" src="/images/work/erg.svg" alt="ЭС АО «ЕЭК»" title="ЭС АО «ЕЭК»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStoryBrand"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>ЭС АО «ЕЭК»</h2>
                        <p>Автоматизированная система управления аспирацией угольной пыли на плужковых сбрасывателях ленточного конвейера ЭС АО «ЕЭК»</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="56" src="/images/work/kazakhmys.svg" alt="Корпорация «Казахмыс»" title="Корпорация «Казахмыс»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStorySub"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>Корпорация «Казахмыс»</h2>
                        <p>Модернизация автоматизированной системы управления  поточно- транспортной системы.</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="56" src="/images/work/kazakhmys.svg" alt="Корпорация «Казахмыс»" title="Корпорация «Казахмыс»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStoryBrand"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>Корпорация «Казахмыс»</h2>
                        <p>Автоматизированная система управления мостовым краном.</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <Image width="150" height="118" src="/images/work/erg.svg" alt="ЭС АО «ЕЭК»" title="ЭС АО «ЕЭК»" />
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStorySub"></div>
                        </div>
                        {/* <div className="storyEnder"></div> */}
                    </div>
                    <div className="storyText">
                        <h2>ЭС АО «ЕЭК»</h2>
                        <p>Автоматизированная система управления комплексом по отбору проб.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="fade">
                <button onClick={handleSpoiler}>{spoiler==='overflow'?"Показать полностью":"Скрыть"}</button>
            </div>
        </>
    );
};

export default experienceStory;