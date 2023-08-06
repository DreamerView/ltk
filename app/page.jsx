import "./globals.css";
import HeaderModule from "./components/header";
import WelcomePage from "./components/welcomePage";
import PromoLine from "./components/promoLine";
import ExperienceStory from "./components/experience";
import ListComponent from "./template/services";
import PartnersList from "./components/partners";
import MockupBlock from "./components/mockup";
import CiteBlock from "./components/citeBlock";
import NotesBlock from "./components/notesBlock";
import StepByStep from "./components/stepByStep";
import ProductList from "./template/product";

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
    ];
    const product = [
        {title:"Программируемые логические контроллеры",image:"/images/product/1.jpg"},
        {title:"Преобразователи частоты низкого, среднего и высокого напряжения",image:"/images/logo.svg"},
        {title:"Сервопривода",image:"/images/product/3.jpg"},
        {title:"Устройства плавного пуска",image:"/images/product/4.jpg"},
        {title:"Панели оператора HMI",image:"/images/product/5.jpg"},
        {title:"Контрольно–измерительные приборы",image:"/images/product/6.jpg"},
        {title:"Серверы и другое сетевое оборудование",image:"/images/product/7.jpg"},
        {title:"Слаботочное и силовое коммутационное оборудование",image:"/images/logo.svg"},
        {title:"Системы возбуждения двигателей и генераторов",image:"/images/product/9.jpg"}
    ]
    return(
        <>
        <HeaderModule />
        <main>
            <WelcomePage />
            <PromoLine />
            <PartnersList />
            <ListComponent items={service} />
            <MockupBlock /> 
            <CiteBlock />
            <ExperienceStory />
            <NotesBlock />
            <StepByStep />
            <ProductList item={product} />
        </main>
        </>
    )
};

export default Page;