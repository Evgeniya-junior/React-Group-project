
import s from "./ContentCatalog.module.scss";
import Filter from "./filter/Filter";


function ContentCatalog(props) {
return (
    <div className={s.content}>
        <div className={s.container}>
            <Filter/> 
        </div>           
    </div>      
    );
}

export default ContentCatalog;