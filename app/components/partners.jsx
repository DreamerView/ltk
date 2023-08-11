import Image from "next/image";

const partnersList = () => {
    const listPartners = [
        {name:`Siemens`,source:`/images/partners/siemens.svg`, w:"302",h:"48"},
        {name:`Honeywell`,source:`/images/partners/honeywell.svg`,w:"271",h:"48"},
        {name:`Weidmuller`,source:`/images/partners/weidmuller.svg`,w:"360",h:"48"},
        {name:`Schneider Electric`,source:`/images/partners/schneider_electric.svg`,w:"159",h:"48"},
        {name:`Emerson`,source:`/images/partners/emerson.svg`,w:"109",h:"48"},
        {name:`Phoenix Contact`,source:`/images/partners/phoenix_contact.svg`,w:"170",h:"48"},
        {name:`ABB`,source:`/images/partners/abb.svg`,w:"121",h:"48"},
        {name:`General Electric`,source:`/images/partners/general_electric.svg`,w:"48",h:"48"},
        {name:`Rockwell Automation`,source:`/images/partners/rockwell_automation.svg`,w:"181",h:"48"},
        {name:`Rittal`,source:`/images/partners/rittal.svg`,w:"104",h:"48"},
        {name:`Delta`,source:`/images/partners/delta.svg`,w:"157",h:"48"}
    ]
    return(
        <section id="partners" className="logoMarqueeSection">
            <h1>Партнерская <b>сеть</b></h1>
            <p>Широко развитая Партнерская сеть и сотрудничество с ведущими мировыми вендорами в области промышленной автоматизации такими как:</p>
            <div className="containerMarquee">
            <div className="marquee logoMarquee">
                {listPartners.map(list=>
                    <Image quality={100} src={list.source} width={list.w} height={list.h} alt={list.name} title={list.name}/>
                )}
            </div>
            </div>

            </section>
    )
};

export default partnersList;