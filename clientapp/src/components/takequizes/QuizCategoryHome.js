import React, { useEffect } from 'react';
import styles from '../../assets/css/admin.module.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getMyDashboard, getMyQuizCategory } from '../../redux/features/dashboardSlice';
import { useNavigate } from 'react-router-dom';

export default function QuizCategoryHome() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  let dataIcon={
    "Product":<BsFillArchiveFill className={styles.cardIcon}/>,
    "Category":<BsFillGrid3X3GapFill className={styles.cardIcon}/>,
    "Users":<BsPeopleFill className={styles.cardIcon}/>,
    "Quiz Question":<MdQuiz className={styles.cardIcon}/>
  }


  const { Quizcards } = useSelector((state) => state.dashboard);

  let a = ""
  useEffect(() => {
    dispatch(getMyQuizCategory());
  }, [a]);

  return (
    <>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>


      <div className={styles.mainCards}>
        {
          Quizcards.map((itm) => {
            return <div onClick={()=>{
              // navigate("/quizModuleId/"+itm._id)
              navigate("/takequizCatName/"+itm.catUnqName)
            }} className={styles.card} style={{backgroundImage:itm.bgColor}}>
              <div className={styles.cardInner}>
                <h3>{itm.name}</h3>
                <h1>{itm.count}</h1>
              </div>
              <h6>{itm.description}</h6>
            </div>
          })
        }
      </div>


    </>
  );
}