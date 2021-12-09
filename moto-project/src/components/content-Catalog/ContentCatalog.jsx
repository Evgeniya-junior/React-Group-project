
import s from "./ContentCatalog.module.scss";
import Filter from "./filter/Filter";


function ContentCatalog(props) {
return (
    <div className={s.content}>
        <Filter/>     
    </div>      
  );
}

export default ContentCatalog;