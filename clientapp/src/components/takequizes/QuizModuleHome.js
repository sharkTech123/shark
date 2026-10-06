import React, { useEffect } from 'react';
import styles from '../../assets/css/admin.module.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getMyDashboard, getMyQuizCategory, getMyQuizModule } from '../../redux/features/dashboardSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomQuestionByName } from '../../redux/features/quizSlice';

export default function QuizModuleHome() {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const { id } = useParams();

  let dataIcon = {
    "Product": <BsFillArchiveFill className={styles.cardIcon} />,
    "Category": <BsFillGrid3X3GapFill className={styles.cardIcon} />,
    "Users": <BsPeopleFill className={styles.cardIcon} />,
    "Quiz Question": <MdQuiz className={styles.cardIcon} />
  }


  const { Quizcards } = useSelector((state) => state.dashboard);

  let a = ""
  useEffect(() => {
    dispatch(getRandomQuestionByName(id));
  }, [id]);

  return (
    <>
      <div className={styles.mainTitle}>
       Quizz
      </div>


      <div className={styles.mainCards}>
        {
          Quizcards.map((itm) => {
            return <div onClick={() => {
              navigate("/takequiz/"+ itm.category+"/" + itm._id)
            }} className={styles.card} style={{ backgroundImage: itm.bgColor }}>
              <div className={styles.cardInner}>
                <h6>{itm.moduleName}</h6>
                <h1>{itm.count}</h1>
              </div>
              <h6>{itm.description}</h6>
            </div>
          })
        }

        <div onClick={() => {
          navigate(`/takequiz/${Quizcards.length>0?Quizcards[0].category:""}`)
        }} className={styles.card} style={{ backgroundImage: "" }}>
          <div className={styles.cardInner}>
            <h6>{"All Question"}</h6>
            <h1>{Quizcards.map((itm)=>(+itm.count)).reduce((partialSum, a) => partialSum + a, 0)}</h1>
          </div>
          <h6>{""}</h6>
        </div>
      </div>


    </>
  );
}