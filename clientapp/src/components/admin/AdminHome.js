import React, { useEffect } from "react";
import styles from "../../assets/css/admin.module.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getMyDashboard } from "../../redux/features/dashboardSlice";
import { Helmet } from "react-helmet-async";

export default function AdminHome() {
  const dispatch = useDispatch();

  const dataIcon = {
    Product: <BsFillArchiveFill className={styles.cardIcon} />,
    Category: <BsFillGrid3X3GapFill className={styles.cardIcon} />,
    Users: <BsPeopleFill className={styles.cardIcon} />,
    Quizes: <MdQuiz className={styles.cardIcon} />,
  };

  const { cards } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getMyDashboard());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Smartlearner Dashboard</title>

        <meta property="og:title" content=" Smartlearner Dashboard" />
      </Helmet>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>

      <div className={styles.mainCards}>
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((itm, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundImage: itm.bgColor }}>
              <div className={styles.cardInner}>
                <h3>{itm.label}</h3> 
                {dataIcon[itm.label]} 
              </div>
              <h1>{itm.value}</h1>
            </div> 
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </>
  );
}
