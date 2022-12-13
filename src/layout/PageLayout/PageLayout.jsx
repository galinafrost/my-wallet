import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

import styles from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
