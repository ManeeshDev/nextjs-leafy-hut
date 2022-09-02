import type { NextPage } from 'next';
import Head from 'next/head';
import Featured from '../components/Featured';
import FoodList from '../components/FoodList';
import home from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
      <div className={home.container}>
        <Head>
          <title>Nature Restaurant in Colombo</title>
          <meta name="description" content="Best food shop in town" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Featured/>
        <FoodList/>
      </div>
  );
}

export default Home;
