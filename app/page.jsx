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
                        <p>Light Technology [Version 1.0.0.0.1]</p>
                        <p>(c) ТОО "Light Technology Kazakhstan". Все права защищены.</p>
                        <p><strong>C:\Users\ltk:➤</strong><span> С чем мы работаем:</span></p>
                        <p><strong>C:\Users\ltk:➤</strong> Программируемые логические контроллеры;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Преобразователи частоты низкого, среднего и высокого напряжения;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Сервопривода;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Устройства плавного пуска;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Панели оператора HMI;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Контрольно–измерительные приборы;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Серверы и другое сетевое оборудование;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Слаботочное и силовое коммутационное оборудование;</p>
                        <p><strong>C:\Users\ltk:➤</strong> Системы возбуждения двигателей и генераторов;</p>
                    </div>
                    <img src="/images/mockup.webp" alt="" />
                </div>
            </section>
        </main>
        </>
    )
};

export default Page;