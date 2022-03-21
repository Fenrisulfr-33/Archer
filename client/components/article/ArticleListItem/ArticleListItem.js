import Link from "next/link";
import style from './ArticleListItem.module.css';

/**
 * @props { article, id }
 *  The article is the MDX component and it contains meta data to display in list view, including the id
 * @returns
 *  An article component with title, author, date, and brief desc
 */
export default function ArticleItem({ article, id }) {
    return (
        <Link href='/articles/[id]' as={`/articles/${id}`} passHref>
            <div className={style.article}>
                <h3 className={style.title}>{article.info.title}</h3>
                <p className={`italic font-mono text-md text-purple-300 `}>{article.info.author} - {article.info.date}</p>
                <p className={`text-sm font-mono text-gray-300`}>{article.info.description}</p>
            </div>
        </Link>
    )
}