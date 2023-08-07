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
        {"title":"Проектирование систем АСУТП"},
        {"title":"Поставка отдельных компонентов систем АСУТП"},
        {"title":"Монтаж/ шефмонтаж оборудования"},
        {"title":"Сборка Шкафов Управления АСУТП"},
        {"title":"Проведение пусконаладочных работ"},
        {"title":"Проведение аварийно- восстановительных работ"},
        {"title":"Обучение технологического и обслуживающего персонала"},
        {"title":"Сервисное обслуживание систем АСУТП"},
        {"title":"Эксплуатационный инжиниринг АСУТП"}
    ];
    const product = [
        {"title":"Программируемые логические контроллеры","image":"/images/product/1.jpg"},
        {"title":"Преобразователи частоты низкого, среднего и высокого напряжения","image":"/images/logo.svg"},
        {"title":"Сервопривода","image":"/images/product/3.jpg"},
        {"title":"Устройства плавного пуска","image":"/images/product/4.jpg"},
        {"title":"Панели оператора HMI","image":"/images/product/5.jpg"},
        {"title":"Контрольно–измерительные приборы","image":"/images/product/6.jpg"},
        {"title":"Серверы и другое сетевое оборудование","image":"/images/product/7.jpg"},
        {"title":"Слаботочное и силовое коммутационное оборудование","image":"/images/logo.svg"},
        {"title":"Системы возбуждения двигателей и генераторов","image":"/images/product/9.jpg"}
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
            <footer>
                <div className="footerBlock">
                    <img src="/images/logo-light.svg" alt="" />
                    <div className="footerBlockRow">
                        <h2>All <strong>Links</strong></h2>
                        <div className="footerBlockContact">
                            <div>
                                
                                <div className="footerContent">
                                    <a href="http://">Example 1</a>
                                </div>
                            </div>
                            <div>
                                
                                <div className="footerContent">
                                    <a href="http://">Example 2</a>
                                </div>
                            </div>
                            <div>
                                <div className="footerContent">
                                    <a href="http://">Example 3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerBlockRow">
                        <h2>All <strong>Links</strong></h2>
                        <div className="footerBlockContact">
                            <div>
                                
                                <div className="footerContent">
                                    <a href="http://">Example 1</a>
                                </div>
                            </div>
                            <div>
                                
                                <div className="footerContent">
                                    <a href="http://">Example 2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerBlockRow">
                        <h2>Contact <strong>Us</strong></h2>
                        <div className="footerBlockContact">
                            <div>
                                <div className="footerIcon">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 24 24"  width="24px"  fill="#FFFFFF">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" /></svg>
                                </div>
                                <div className="footerContent">
                                    <a href="">8 (777) 777 77 77</a>
                                </div>
                            </div>
                            <div>
                                <div className="footerIcon">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 24 24"  width="24px"  fill="#FFFFFF">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" /></svg>
                                </div>
                                <div className="footerContent">
                                    <a href="">info@ltkz.kz</a>
                                </div>
                            </div>
                            <div>
                                <div className="footerIcon">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  enableBackground="new 0 0 24 24"  height="48px"  viewBox="0 0 24 24"  width="48px"  fill="#FFFFFF">  <g>    <rect fill="none" height={24} width={24} />  </g>  <g>    <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />  </g></svg>
                                </div>
                                <div className="footerContent">
                                    <a href="">г. Караганда, ул. Казыбек Нуржанов, дом 36/1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerText">
                        <p>© 2023, <strong>ТОО "Light Technology Kazakhstan"</strong>. Все права защищены.</p>
                    </div>
            </footer>
        </main>
        </>
    )
};

export default Page;