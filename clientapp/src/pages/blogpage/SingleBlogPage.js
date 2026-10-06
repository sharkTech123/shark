import React, { useEffect,useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./SingleBlogPage.module.css";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs, getBlogById } from "../../redux/features/blogSlice";
import { imageBaseUrl } from "../../utils/constants";
import LoadingWeb from "../../components/loader/LoadingWeb";

export default function SingleBlogPage() {


  const [webloading, setWebLoading] = useState(false);

  const navigate = useNavigate();
  // Access the blog data from state
  const params = useParams();
  const dispatch = useDispatch();
  const { allblogs } = useSelector((state) => state.blog);
  const blog = useSelector((state) => state.blog.blog);
  const loading = useSelector((state) => state.blog.loading);

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBlogById(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (loading) {
      setWebLoading(true); // Show loading indicator when fetching news
    } else {
      setWebLoading(false); // Hide loading indicator when fetching is done
    }
  }, [loading]);

  if (webloading) {
    return <LoadingWeb />; // Show loading spinner if webLoading is true
  }

  // Ensure blog is not null before destructuring
  if (!blog) {
    return <div>Blog not found</div>; // Display if blog data is not found
  }
  const handleClick = (id) => {
    dispatch(getBlogById(id))
     navigate(`/singleblog/${id}`);
   };
  const {
    _id,
    blogName,
    image,
    email,
    createdOn,
    description,
    content,
    shortContent,
  } = blog;

  return (
    <div style={{ backgroundColor: "black" }}>
      {webloading && <LoadingWeb />}
      <div className={styles.singleblogPage}>
        <h1 style={{ color: "white" }}>Recents Blogs Posts</h1>
        <div className={styles.singleblogPageContainer}>
          <div className={styles.singleblogContainer}>
            <div>
              <div className={styles.blogImageContainer}>
                <img
                  src={imageBaseUrl + image}
                  alt="Web development"
                  className={styles.blogImage}
                />
              </div>
              {/* Header Section */}
              <div className={styles.blogContentContainer}>
                <header className={styles.headerBlog}>
                  <h2 className={styles.blogTitle}>{blogName}</h2>
                  <div className={styles.metaInfo}>
                    <span className={styles.author}>{email}</span>
                    <span className={styles.date}>{createdOn}</span>
                  </div>
                  <p style={{ color: "white", margin: "10px 0px" }}>
                    {shortContent}
                  </p>
                </header>

                {/* Blog Content Section */}
                <section className={styles.blogContent}>
                  <div className={styles.paragraphBlog}>
                    <p>{content}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className={styles.blogListContainer}>
            <section className={styles.blogListSection}>
              {allblogs.map((story, index) => (
                <div className={styles.blogListContent} key={index}>
                  <div className={styles.listblogImgCon}>
                    <img
                      src={imageBaseUrl + story.image}
                      alt={story.blogName}
                    />
                  </div>

                  <div className={styles.blogsDetails}>
                    <p
                      // style={{
                      //   display: "flex",
                      //   justifyContent: "space-between",
                      //   gap: "10px",
                      // }}
                    >
                      <span>{story.email.toLowerCase()}</span>{" "}
                      {/* <span>
                        {`${new Date(story.createdOn).getDate()}/${
                          new Date(story.createdOn).getMonth() + 1
                        }/${new Date(story.createdOn).getFullYear()}`}{" "}
                        
                      </span>{" "} */}
                    </p>
                    <h4>{story.blogName.slice(0, 70)}...</h4>
                    <p>{story.description.slice(0, 70)}...</p>
                    <p style={{ textAlign: "right", color: "red" }}>
                    <span style={{ cursor:'pointer'}} onClick={() => handleClick(story._id)}>  Read More <FaAnglesRight /></span> 
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
