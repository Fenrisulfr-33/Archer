import Link from 'next/link';
import style from './ArticleButtons.module.css';

/**
 * This is for the previous and next button so when you are in the articles you can contiune to read without going back
 * @props { id, length }
 *  The length is used to determine wether the next or previous button can appear  
 * @returns 
 *  Two buttons at most at the top of the page
 */
export default function ArticleButtons({ id, length }){
    /* This is because I cannot get the button to stay to the right if the first button doesn't exist
        Can fix in the future but for now it kept centering and annoying me. */
    const spacing = Number(id) > 1 ? 'justify-between' : 'justify-end'; 
    return (
        <div className={`mx-auto pt-10 w-5/6 flex ${spacing}`}>
            {Number(id) > 1 &&
                <Link href={`/articles/${Number(id) - 1}`} passHref>
                    <button className={`${style.btn}`}>
                    Previous
                    </button>
                </Link>
            }
            {Number(id) < length &&
                <Link href={`/articles/${Number(id) + 1}`} passHref>
                    <button className={`${style.btn}`}>
                    Next
                    </button>
                </Link>
            }
        </div>
    )
}