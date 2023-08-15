import Image from "next/image";

const mockupBlock = () => {
    return(
        <section className="mockup">
            <h1>Легко и Удобно <b>Управляйте Процессами</b></h1>
            <p>Легкое управление процессами: автоматизация, оптимизация, безопасность данных. Достижение максимальной эффективности для вашего бизнеса.</p>
            <div className="mockupBlock">
                    <div className="mockUpConsole">
                        <Image quality={100} src="/images/screen.webp" width="1496" height="901" alt="interface" title="Programm Interface" priority/>
                    </div>
                    <Image quality={100} src="/images/mockup_laptop.webp" width="1200" height="687" alt="mockup laptop" title="Mockup Laptop" priority />
            </div>
        </section>
    );
};

export default mockupBlock;