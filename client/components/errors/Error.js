import style from './Error.module.css';

/**
 * @props { statusCode }
 * Whatever error might come back from the server 
 * @returns 
 *  A formatted display of any error upon request
 */
export default function Error({ statusCode }) {
  return (
    <p className={style.error}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
  
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}