"use client"
import { useState } from "react";


const ProductList = ({item}) => {
    const [spoiler,setSpoiler] = useState('overflow');
    const handleSpoiler = () => {
        setSpoiler(spoiler === 'overflow'?"":"overflow");
    };
    return(
        <>
        <section id="work" className={`product ${spoiler}`}>
                <div className="productTitle">
                    <h1>С чем мы <b>работаем</b></h1>
                    <p>Мы специализируемся на автоматизации технологических процессов, обеспечивая эффективность и безопасность вашего производства.</p>
                </div>
                <div className="productRow">
                    {item.map((e,index)=>
                        <div key={index} className="productRowBlock">
                            <div className="productRowBlockImg">
                                <img src={e.image} alt="" />
                                <div className="productRowBlockAction">
                                    <div className="productRowBlockActionBlock">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  enableBackground="new 0 0 24 24"  height="48px"  viewBox="0 0 24 24"  width="48px"  fill="#FFFFFF">  <rect fill="none" height={24} width={24} />  <path d="M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="productTextBlock">Продукт</div>
                            <h2>{e.title}</h2>
                            <p>Light Technology Kazakhstan</p>
                        </div>
                    )}
                    

                </div>
            </section>
            <div className="fade">
                <button onClick={handleSpoiler}>{spoiler==='overflow'?"Показать полностью":"Скрыть"}</button>
            </div>
            </>
    )
};
export default ProductList;