import ArticleItem from "../ArticleListItem/ArticleListItem";
import { data } from '../../../data/articles';
import style from './ArticleList.module.css';

/**
 *  Data is hard coded as an array, will eventually upgrade to a CMS
 * @returns 
 *  The list of article and their meta data
 */
export default function ArticleList() {
    return (
        <div className='w-1/2 mx-auto py-20 space-y-4'>
            {data.map((article) => (
                <ArticleItem key={article.id} article={article} id={article.id}/>
            ))}
        </div>
    )
}