import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Blogs.module.css"; // Import CSS Module
import aboutImg from "../../assets/images/image_2021_03_03T15_33_28_479Z-1024x768.png";
import { Pagination } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import News from "./News";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllBlogs,
  getAllBlogs,
  getBlogById,
} from "../../redux/features/blogSlice";
import { imageBaseUrl } from "../../utils/constants";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const dispatch = useDispatch();
  const { allblogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const blogsPerPage = 10; // Number of blogs per page
  const totalPages = Math.ceil(allblogs.length / blogsPerPage); // Total pages calculation
  const navigate = useNavigate();

  // Get current blogs for the selected page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allblogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle blog click to navigate to single blog
  const handleClick = (blog) => {
    dispatch(getBlogById(blog._id));
    navigate(`/singleblog/${blog._id}`);
  };

  return (
    <div className={styles.blogsPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SmartLearner Blog</title>
        <meta property="og:title" content="SmartLearner Blog" />
        <meta
          property="og:description"
          content="Stay updated with the latest news, tips, and insights from SmartLearner. Explore expert advice on driving, learner education, road safety, and more."
        />
        <link rel="canonical" href="https://smartlearner.com/blogs" />
        <meta
          name="description"
          content="Stay updated with the latest news, tips, and insights from SmartLearner. Explore expert advice on driving, learner education, road safety, and more."
        />
      </Helmet>

      <div className={styles.blogscontainer}>
        <div className={styles.blogsHomeBanner}>
          <div className={styles.opicity}></div>
          <section>
            <div className={styles.blogsheader}>
              <h2>Our Blogs And News</h2>
            </div>
          </section>
        </div>
        <section>
          <News />
        </section>
        <div className={styles.blogsContainerRows}>
          <div className={styles.blogsrow}>
            {/* Left Column */}
            <div className={styles.blogsleftColumn}>
              {currentBlogs.map((blog) => (
                <div className={styles.blogscard} key={blog.id}>
                  <h2>{blog.blogName}</h2>
                  <p>{blog.description}</p>
                  <div className={styles.fakeimg} style={{ height: "200px" }}>
                    <img
                      src={imageBaseUrl + blog.image}
                      alt={blog.blogName}
                      className={styles.blogImage}
                    />
                  </div>
                  <p>{blog.shortContent.slice(0, 200)}...</p>{" "}
                  <Button variant="danger" onClick={() => handleClick(blog)}>
                    Read More..
                  </Button>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className={styles.blogsrightColumn}>
              <div className={styles.blogscard}>
                <h2>About Me</h2>
                <img
                  src={aboutImg}
                  alt="blog"
                  style={{ maxWidth: "350px", width: "100%" }}
                />

                <p>
                  SmartLearner was founded in 2004 with the vision of
                  becoming...{" "}
                  <Link to="/about">
                    <Button variant="danger">Read More..</Button>
                  </Link>
                </p>
              </div>
              {/* <div className={styles.blogscard}>
                <h3>Popular Posts</h3>
                <div className={styles.fakeimg}>Image</div>
                <br />
                <div className={styles.fakeimg}>Image</div>
                <br />
                <div className={styles.fakeimg}>Image</div>
              </div> */}
              <div className={styles.blogscard}>
                <h3>Follow Me</h3>
                <div className={styles.socialFollowIcons}>
                  <a
                    href="https://www.facebook.com/smartlearnerdrivingschool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.instagram.com/smartlearnerdrivingschool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.snapchat.com/add/smartlearner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSnapchat id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://twitter.com/smartlearner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCWqlTyiFfPNqgKeffuo68rghttp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube id={styles.FollowIcons} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
