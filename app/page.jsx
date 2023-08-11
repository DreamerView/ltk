import "./globals.css";
import dynamic from 'next/dynamic'
const WelcomePage = dynamic(() => import("./components/welcomePage"));
const PromoLine = dynamic(() => import("./components/promoLine"));
const ExperienceStory = dynamic(() => import("./components/experience"));
const ListComponent = dynamic(() => import("./template/services"));
const PartnersList = dynamic(() => import("./components/partners"));
const MockupBlock = dynamic(() => import("./components/mockup"));
const CiteBlock = dynamic(() => import("./components/citeBlock"));
const NotesBlock = dynamic(() => import("./components/notesBlock"));
const StepByStep = dynamic(() => import("./components/stepByStep"));
const ProductList = dynamic(() => import("./template/product"));

const Page = () => {
    const service = [
        {"title":"Проектирование систем АСУТП",img:"/images/services/1_1.webp",w:"400",h:"267"},
        {"title":"Поставка отдельных компонентов систем АСУТП",img:"/images/services/2_1.webp",w:"400",h:"265"},
        {"title":"Монтаж/ шефмонтаж оборудования",img:"/images/services/3.webp",w:"400",h:"267"},
        {"title":"Сборка Шкафов Управления АСУТП",img:"/images/services/4.webp",w:"400",h:"267"},
        {"title":"Проведение пусконаладочных работ",img:"/images/services/5.webp",w:"400",h:"267"},
        {"title":"Проведение аварийно- восстановительных работ",img:"/images/services/6.webp",w:"400",h:"267"},
        {"title":"Обучение технологического и обслуживающего персонала",img:"/images/services/7_1.webp",w:"400",h:"267"},
        {"title":"Сервисное обслуживание систем АСУТП",img:"/images/services/8.webp",w:"400",h:"267"},
        {"title":"Эксплуатационный инжиниринг АСУТП",img:"/images/services/9.webp",w:"400",h:"266"}
    ];
    const product = [
        {"title":"Программируемые логические контроллеры","image":"/images/product/1.webp"},
        {"title":"Преобразователи частоты низкого, среднего и высокого напряжения","image":"/images/product/2.webp"},
        {"title":"Сервопривода","image":"/images/product/3_1.webp"},
        {"title":"Устройства плавного пуска","image":"/images/product/4.webp"},
        {"title":"Панели оператора HMI","image":"/images/product/5.webp"},
        {"title":"Контрольно–измерительные приборы","image":"/images/product/6.webp"},
        {"title":"Серверы и другое сетевое оборудование","image":"/images/product/7.webp"},
        {"title":"Слаботочное и силовое коммутационное оборудование","image":"/images/product/8.webp"},
        {"title":"Системы возбуждения двигателей и генераторов","image":"/images/product/9.webp"}
    ]
    return(
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
    )
};

export default Page;