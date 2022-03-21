import '../styles/globals.css'
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import Loading from '../components/loading/Loading';
import { useState } from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => { 
    setLoading(true);
    console.log('Loading...');
  });
  Router.events.on('routeChangeComplete', (url) => { 
    console.log('Loaded');
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}