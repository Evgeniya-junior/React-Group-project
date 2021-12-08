import s from "./Advise.module.scss";
import brpAudio from "./../../../assets/images/brpAudio.png";
import saleIcon from  "./../../../assets/images/saleIcon.png";
import echomap from "./../../../assets/images/echomap.png";
import rfKey from "./../../../assets/images/rf-key.png";
import hydroSuit from "./../../../assets/images/hydro-suit.png";
import AdviseSection from "./../advise-section/AdviseSection"





        function  Advise(props) {
            const sectionData={
                image: saleIcon,
                image2: brpAudio,
                headline:"BRP Audio-портативная система",
                text:"нет в наличии",
                button: "Сообщить о поступлении"
            }

            const sectionData2={
                image: echomap,
                headline:"Garmin Echomap Plus 62cv",
                text:"45 800 ₽",
                button: "#"
            }
            
            const sectionData3={
                image: saleIcon,
                image2: rfKey,
                headline:"RF D.E.S.S.TM Key",
                text:"нет в наличии",
                button: "Сообщить о поступлении"
            }

            const sectionData4={
                image: hydroSuit,
                headline:"Мужской костюм 3мм",
                text:"7 000 ₽"
            }

    return (
        <div className=''>
            <AdviseSection data={sectionData} data2={sectionData2} data3={sectionData3} data4={sectionData4}/>
        </div>
    );
}

export default Advise;