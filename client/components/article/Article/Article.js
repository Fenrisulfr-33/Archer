import style from "./Article.module.css";

export default function Article({ children }) {
    return(
        <div className={style.article}>
            {children}
        </div>
    )
}