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
            <CiteBlock />
            <ExperienceStory />
            <NotesBlock />
            <section className="stepByStep">
                <div className="stepTitle">
                    <h1>Для чего нужна <b>автоматизация</b></h1>
                    <p>Автоматизация облегчает управление производством, контролирует процессы, оптимизирует ресурсы и повышает безопасность.</p>
                </div>
                <div className="stepRow">
                    <div className="stepBlock">
                        <h2>1</h2>
                        <p>Частичное или полное исключение человеческого фактора из производственных процессов.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>2</h2>
                        <p>Увеличение рациональности использования энергоресурсов.(экономия электроэнергии как правило составляет от 5% до 80%)</p>
                    </div>
                    <div className="stepBlock">
                        <h2>3</h2>
                        <p>Уменьшение износа оборудования.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>4</h2>
                        <p>Раннее диагностирование неисправностей, отсутствие длительных простоев в связи с внезапным выходом из строя оборудования.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>5</h2>
                        <p>Увеличение производительности производства.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>6</h2>
                        <p>Уменьшение себестоимости продукции.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>7</h2>
                        <p>Возможность точно установить коренные причины выхода из строя оборудования путем изучения и анализа архива событий и производственных показателей с полным хронометражем.</p>
                    </div>
                    <div className="stepBlock">
                        <h2>8</h2>
                        <p>Уменьшение травматизма и несчастных случаев на производстве в связи с установкой приборов безопасности.</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
};

export default Page;