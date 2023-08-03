import "./globals.css";
import HeaderModule from "./components/header";
import WelcomePage from "./components/welcomePage";
import PromoLine from "./components/promoLine";
import ExperienceStory from "./components/experience";
import ListComponent from "./template/services";
import PartnersList from "./components/partners";
import MockupBlock from "./components/mockup";

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
            <PartnersList />
            <ListComponent items={service} />
            <MockupBlock /> 
            <section className="cite">
                <div className="citeBlock">
                    <blockquote className="blockquote-8">
                        <p>Главное из основополагающих составляющих нашей деятельности заключается в организации нижнего, грамотно организованного (полевого), уровня автоматизации технологических процессов, где основная задача заключается, в сборе данных необходимых для дальнейшей обработки, анализа и глобального управления всем процессом.</p>
                        <cite>ТОО “Light Technology Kazakhstan”</cite>
                    </blockquote>
                </div>
            </section>
            <ExperienceStory />
        </main>
        </>
    )
};

export default Page;