import "./globals.css";
import HeaderModule from "./components/header";
import WelcomePage from "./components/welcomePage";
import PromoLine from "./components/promoLine";
import ExperienceStory from "./components/experience";

const Page = () => {
    return(
        <>
        <HeaderModule />
        <main>
            <WelcomePage />
            <PromoLine />
            <ExperienceStory />
            <section className="listRow">
                <div className="listRowBlock">
                    <h1>My <b>Services</b></h1>
                    <hr />
                    <div className="listRowBlockRow">
                        <div className="listRowBlockContent">
                            <h2>UI/UX Design</h2>
                            <hr />
                            <div className="listBlockRow">
                                <div className="listBlock2"></div>
                                <div className="listBlock1"></div>
                                <div className="listBlock">
                                    <img src="/images/promo.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="listRowBlockContent">
                            <h2>UI/UX Design</h2>
                            <hr />
                            <div className="listBlockRow">
                                <div className="listBlock2"></div>
                                <div className="listBlock1"></div>
                                <div className="listBlock">
                                    <img src="/images/promo.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="listRowBlockContent">
                            <h2>UI/UX Design</h2>
                            <hr />
                            <div className="listBlockRow">
                                <div className="listBlock2"></div>
                                <div className="listBlock1"></div>
                                <div className="listBlock">
                                    <img src="/images/promo.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
};

export default Page;