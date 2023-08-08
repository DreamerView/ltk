import Image from "next/image";

const mockupBlock = () => {
    return(
        <section className="mockup">
            <h1>Легко и Удобно <b>Управляйте Процессами</b></h1>
            <p>Легкое управление процессами: автоматизация, оптимизация, безопасность данных. Достижение максимальной эффективности для вашего бизнеса.</p>
            <div className="mockupBlock">
                    <div className="mockUpConsole">
                        <Image src="/images/interface.webp" width="1496" height="901" alt="" />
                    </div>
                    <Image src="/images/mockup_model.webp" width="4038" height="2311" alt="" />
            </div>
        </section>
    );
};

export default mockupBlock;