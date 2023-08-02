import "./globals.css";
import HeaderModule from "./components/header";
import WelcomePage from "./components/welcomePage";
import PromoLine from "./components/promoLine";
import ExperienceStory from "./components/experience";
import ListComponent from "./template/services";

const Page = () => {
    const service = [
        {title:"Проектирование систем АСУТП"},
        {title:"Поставка отдельных компонентов систем АСУТП"},
        {title:"Монтаж/ шефмонтаж оборудования"},
        {title:"Сборка Шкафов Управления АСУТП"},
        {title:"Проведение пусконаладочных работ"},
        {title:"Проведение аварийно- восстановительных работ"},
        {title:"Обучение технологического и обслуживающего персонала"},
        {title:"Сервисное обслуживание систем АСУТП"},
        {title:"Эксплуатационный инжиниринг АСУТП"}
    ]
    return(
        <>
        <HeaderModule />
        <main>
            <WelcomePage />
            <PromoLine />
            <ExperienceStory />
            <ListComponent items={service} />
            <section className="mockup">
                <div className="mockupBlock">
                    <div className="mockUpConsole">
                        <img src="/images/promo.jpg" alt="" />
                    </div>
                    <img src="/images/mockup.webp" alt="" />
                </div>
            </section>
        </main>
        </>
    )
};

export default Page;