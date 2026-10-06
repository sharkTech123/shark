import React, { useEffect, useState } from "react";
import styles from "./UserInvoice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../../redux/features/userSlice";
import { fetchUserSubscriptions } from "../../../redux/features/subscriptionSlice";
import {
  getAllQuizzes,
  getQuizResultAdmin,
} from "../../../redux/features/quizSlice";
import { getUserOrderById } from "../../../redux/features/orderSlice";
import { Table } from "antd";
import Loader from "../../../components/loader/Loader";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Modal, ModalHeader } from "reactstrap";

const UserInvoice = (props) => {
  const navigate = useNavigate();

  const params = useParams();

  const dispatch = useDispatch();
  const [isQuizLoading, setIsQuizLoading] = useState(true);

  const { loading, user } = useSelector((state) => state.user);

  const userId = user?._id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
  }, [dispatch, userId]);

  const { userSubscription } = useSelector((state) => state.subscription);

  const { quizResult, quizzes } = useSelector((state) => state.quiz);

  const [summary, setSummary] = useState([]);
  const userReportId = userId;
  const userEmail = user?.email;

  useEffect(() => {
    if (userReportId) {
      setSummary([]);
      setIsQuizLoading(true);
      dispatch(getQuizResultAdmin(userReportId));
      dispatch(getAllQuizzes("", 1, 1000));
    }
  }, [dispatch, userReportId]);

  useEffect(() => {
    if (quizResult && quizResult.length > 0) {
      const categoryMap = {};
      let correctCount = 0; // To count the correct attempts
      let incorrectCount = 0;
      let totalAttempts = 0;
      let totalCorrect = 0;

      quizResult.forEach((entry) => {
        const categoryName = entry?.result?.name || "Unknown Category";
        const categoryId = entry?.result?._id; // 👈 add this

        if (!categoryMap[categoryName]) {
          categoryMap[categoryName] = {
            categoryId,
            attempted: 0,
            total: 0,
            correct: 0,
            incorrect: 0,
          };
        }
        categoryMap[categoryName].attempted += 1;
        totalAttempts += 1;
        if (entry.answerAttempt === "Correct") {
          categoryMap[categoryName].correct += 1;
          correctCount += 1;
          totalCorrect += 1;
        } else {
          categoryMap[categoryName].incorrect += 1;
          incorrectCount += 1;
        }
      });

      quizzes.forEach((quiz) => {
        const categoryName = quiz?.categoryName || "Unknown";
        if (!categoryMap[categoryName]) {
          categoryMap[categoryName] = {
            attempted: 0,
            total: 0,
            correct: 0,
            incorrect: 0,
          };
        }
        categoryMap[categoryName].total += 1;
      });

      const summaryArray = Object.entries(categoryMap)
        .map(
          ([
            categoryName,

            { categoryId, attempted, total, correct, incorrect },
          ]) => {
            let note = "";
            let multiplier = 1;

            if (attempted === 0) {
              note = "";
            } else if (attempted > total) {
              multiplier = Math.ceil(attempted / total);
              note = `(${multiplier} times attempts)`;
            } else {
              note = `(1 time attempt)`;
            }

            const correctPercentage =
              total > 0 ? ((correct / total) * 100).toFixed(2) : 0;
            const incorrectPercentage =
              total > 0 ? ((incorrect / total) * 100).toFixed(2) : 0;

            const categoryTotalPercentage =
              attempted > 0 ? ((correct / attempted) * 100).toFixed(2) : 0;

            const timeSpentSeconds = attempted * 30;
            const minutes = Math.floor(timeSpentSeconds / 60);
            const seconds = timeSpentSeconds % 60;
            const timeSpentFormatted = `${minutes}m ${seconds}s`;

            return {
              categoryName,
              categoryId,
              attempted,
              total,
              multiplier,
              note,
              overAttempted: attempted > total,

              correct,
              incorrect,
              correctPercentage,
              incorrectPercentage,
              categoryTotalPercentage,
              timeSpentFormatted,
            };
          }
        )
        .filter((item) => item.attempted > 0);

      setIsQuizLoading(false);
      setSummary(summaryArray);
    } else if (quizResult !== undefined && quizzes !== undefined) {
      setIsQuizLoading(false);
    }
  }, [quizResult, quizzes]);

  ///////////////////////////////////////////////////////////////

  const { userOrders, totalOrderCount } = useSelector((state) => state.order);

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 5,
  });

  useEffect(() => {
    if (user?.email) {
      dispatch(getUserOrderById(userEmail, state.page, state.pageSize));
    }
  }, [dispatch, state.page, state.pageSize, userEmail]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, page: 1, pageSize });
  };

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <button className="btn btn-sm btn-primary">Previous</button>;
    }
    if (type === "next") {
      return <button className="btn btn-sm btn-primary">Next</button>;
    }
    return originalElement;
  };

  // ///////////////////////////////////////////////////////
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Cart Items",
      dataIndex: "myCart",
      render: (cartItems) =>
        Array.isArray(cartItems) ? (
          <ul style={{ paddingLeft: 16 }}>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.service} , {item.price}£ {item.count}quantity
              </li>
            ))}
          </ul>
        ) : (
          "-"
        ),
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      align: "center",
      sorter: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short", // Use 'long' for full month namesdxzc
          day: "2-digit",
        });
      },
    },
  ];

  // /////////////////////////////////////////////////////////

  return (
    <Modal
      isOpen={props.showOpenModal}
      toggle={props.toggleOpenModal}
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: " 2rem auto",
        maxHeight: "100vh",
      }}>
      <ModalHeader toggle={props.toggleOpenModal}>User Report</ModalHeader>
      <div className={styles.userReportInvoicecontainer2}>
        <div className={styles.userReportInvoicecontainer}>
          <div className={styles.userReportInvoiceleftCard}>
            <div className={styles.userReportInvoiceprofileCard}>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="avatar"
                className={styles.userReportInvoiceavatar}
              />
              <h2>{user?.username}</h2>
              <div className={styles.userReportcardnames}>
                {" "}
                <p>
                  <strong>Email</strong>
                </p>
                <p>{user?.email}</p>{" "}
              </div>
              <div className={styles.userReportcardnames}>
                <p>
                  <strong>PhoneNumber</strong>
                </p>
                <p>{user?.phoneNumber}</p>
              </div>
              <div className={styles.userReportcardnames}>
                <p>
                  <strong>Role</strong>
                </p>
                <p>{user?.roleName}</p>
              </div>
            </div>
          </div>

          <div className={styles.userReportInvoicerightCard}>
            <div className={styles.userReportInvoiceinfoCard}>
              <div className={styles.userReportInvoicesubscription}>
                <strong>Active Subscriptions :</strong>
                <p>
                  {userSubscription.length > 0 &&
                  userSubscription[0]?.subscriptionId?.planname
                    ? userSubscription[0].subscriptionId.planname
                    : "No Subscription"}
                </p>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////// */}
            <div className={styles.usersContainer}>
              {userOrders && userOrders.length > 0 ? (
                <Table
                  className="table-striped"
                  pagination={{
                    current: state.page,
                    pageSize: state.pageSize,
                    total: totalOrderCount,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                    onChange: (page, pageSize) =>
                      setState({ ...state, page, pageSize }),
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={userOrders}
                  rowKey={(record) => record._id}
                />
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    padding: "1rem",
                  }}>
                  No orders found.
                </p>
              )}
            </div>

            {/* //////////////////////////////////////////////// */}
          </div>
        </div>

        <div
          className={styles.userReportInvoicerightCard}
          style={{ marginTop: "1.5rem" }}>
          {isQuizLoading ? (
            <p style={{ textAlign: "center", fontWeight: "600" }}>
              Loading quiz results...
            </p>
          ) : summary?.length === 0 ? (
            <p
              className={styles.userReportInvoiceinfoCard}
              style={{ textAlign: "center", fontWeight: "600" }}>
              No quizzes have been attempted.
            </p>
          ) : (
            summary.map(
              ({
                categoryName,
                attempted,
                total,
                note,
                overAttempted,
                correct,
                incorrect,
                correctPercentage,
                incorrectPercentage,
                categoryTotalPercentage,
                timeSpentFormatted,
                categoryId, // Make sure you have categoryId in summary
              }) => {
                // Filter quizResult of this category
                const attemptedQuestions = quizResult.filter(
                  (q) => q.questioncategory === categoryId
                );

                return (
                  <div
                    className={styles.userReportInvoiceinfoCard}
                    key={categoryName}>
                    <div className={styles.userReportInvoicesubscription}>
                      <strong>{categoryName}</strong>
                      <p>
                        {attempted} attempted / {total} total{" "}
                        {note && <span>{note}</span>}
                        <br />
                        <span>
                          |{" "}
                          <strong>
                            Total Accuracy: {categoryTotalPercentage}%
                          </strong>
                        </span>
                        <br />
                        Correct: {correct} ({correctPercentage}%)
                        <br />
                        Incorrect: {incorrect} ({incorrectPercentage}%)
                        <br />
                        <span style={{ fontSize: "0.9em", color: "#555" }}>
                          Time spent: {timeSpentFormatted}
                        </span>
                      </p>
                    </div>
                    <details className="bg-gray-100 p-3 rounded-md mt-3">
                      <summary className="cursor-pointer font-semibold text-gray-800">
                        View Attempted Questions ({attemptedQuestions.length})
                      </summary>

                      <div className="mt-4 space-y-4">
                        {attemptedQuestions.map((item, i) => {
                          const question = item.question || {}; // fallback
                          const options = question.option || []; // fallback

                          // Safe parsing for correct option
                          const correctOptionNumber =
                            parseInt(question.answer?.replace("Option", "")) ||
                            0;
                          const correctOptionText =
                            options[correctOptionNumber - 1] || "N/A";

                          // Safe parsing for user-selected option
                          const userOptionNumber =
                            parseInt(item.answer?.replace("Option", "")) || 0;
                          const userOptionText =
                            options[userOptionNumber - 1] || "N/A";

                          const isCorrect = item.answerAttempt === "Correct";

                          return (
                            <div
                              key={item._id}
                              className="bg-white p-4 rounded-lg shadow border border-gray-200">
                              {/* Question */}
                              <p className="font-medium text-gray-900">
                                <span className="font-bold">Q{i + 1}:</span>{" "}
                                {question.question || "Question unavailable"}
                              </p>

                              {/* User Attempted Answer */}
                              <div
                                className={`mt-3 p-2 rounded-md border ${
                                  isCorrect
                                    ? "bg-green-100 border-green-500 text-green-700"
                                    : "bg-red-100 border-red-500 text-red-700"
                                }`}>
                                <strong>Your Answer:</strong>{" "}
                                {item.answer || "N/A"} — {userOptionText}
                              </div>

                              {/* Correct Answer With Option Detail */}

                              <div className="mt-2 p-2 rounded-md border bg-green-50 border-green-400 text-green-700">
                                <strong>Correct Answer:</strong>{" "}
                                {question.answer || "N/A"} — {correctOptionText}
                              </div>

                              {/* Correct / Incorrect Label */}
                              {/* <p
                                className={`mt-2 font-semibold ${
                                  isCorrect ? "text-green-600" : "text-red-600"
                                }`}>
                                {isCorrect ? "✔ Correct" : "✘ Incorrect"}
                              </p> */}
                            </div>
                          );
                        })}
                      </div>
                    </details>
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserInvoice;
