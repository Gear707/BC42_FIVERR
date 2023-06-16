import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiServiceInfo } from "../../apis/jobAPI";
import { Collapse, Nav, NavLink } from "react-bootstrap";
import styles from "./ServiceInfo.module.scss";
import { apiPostComment, apiSellerComment } from "../../apis/commentAPI";
import dayjs from "dayjs";
import Avatar from "react-avatar";

function ServiceInfo({ top, ...props }) {
  const { keyword, MaCongViec } = useParams();

  const [info, setInfo] = useState();
  const [comments, setCommets] = useState();
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const avatarSize = 35;

  const getServiceInfo = async () => {
    try {
      const data = await apiServiceInfo(MaCongViec);
      setInfo(data.content);
      // console.log(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getSellerComment = async () => {
    try {
      const data = await apiSellerComment(MaCongViec);
      setCommets(data.content);
      console.log(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDisLike = () => {
    setDisLike(dislike + 1);
  };

  const handlePostComment = async () => {
    try {
      const data = await apiPostComment();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceInfo();
    getSellerComment();
  }, [MaCongViec]);

  return (
    <div id="ServiceInfo" className={styles.container}>
      {info?.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.packageInfo}>
              <Nav className="d-flex align-items-center">
                <Nav.Link>
                  <span>{item.tenLoaiCongViec}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenNhomChiTietLoai}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenChiTietLoai}</span>
                </Nav.Link>
              </Nav>
              <h3>{item.congViec.tenCongViec}</h3>
              <div className={styles.sellerInfo}>
                <div className={styles.sellerBrief}>
                  <img src={item.avatar} alt="" />
                  <span className={styles.name}>{item.tenNguoiTao}</span>
                  <span className={styles.topRated}>Top rated seller</span>
                  <span>|</span>
                  <span>{renderStars(item.congViec.saoCongViec)}</span>
                  <span>|</span>
                  <span>{item.congViec.danhGia}</span>
                </div>
                <div className={styles.sellerExperience}>
                  <img src={item.congViec.hinhAnh} alt="" />
                </div>
              </div>
              <div className={styles.offer}>
                <b>About This Gig</b>
                <p>Top Rated Seller With all positive reviews</p>
                <p>{item.congViec.moTa}</p>
                <b>Things I offer</b>
                <p>Web Development:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>And more</li>
                </ul>
                <p>Web Apps (Newest Versions):</p>
                <ul>
                  <li>React JS developer</li>
                  <li>Angular</li>
                  <li>Vue JS</li>
                </ul>
                <p>Backend (Server Programming):</p>
                <ul>
                  <li>NodeJS</li>
                  <li>PHP</li>
                  <li>Laravel developer</li>
                  <li>Python</li>
                </ul>
                <p className={styles.benefit}>
                  <strong>
                    <u>Why Choose Me?</u>
                  </strong>
                </p>
                <ul>
                  <li>Extensive Experience in Web Development</li>
                  <li>Premium Customer Support</li>
                  <li>Client Satisfaction</li>
                  <li>Around The Clock Availability</li>
                </ul>
              </div>
              <div className={styles.aboutSeller}>
                <b>About The Seller</b>
                <div className={styles.extendSeller}>
                  <img src={item.avatar} alt="" />
                  <div>
                    <p>{item.tenNguoiTao}</p>
                    <p>Web Developer</p>
                    <p>{item.congViec.saoCongViec}</p>
                    <button className="btn btn-primary">Contact Me</button>
                  </div>
                </div>
              </div>
              <div className={styles.FAQ}>
                <h4>FAQ</h4>
                <NavLink onClick={() => setOpen1(!open1)} aria-expanded={open1}>
                  How do revisions work?
                </NavLink>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    If you like to change anything in the integration to make
                    the final result exactly as you envision it, revisions are
                    your friend. Simply put, with revisions, you will be able to
                    request adjustments. Best chance you will already get
                    exactly what you need straight away.
                  </div>
                </Collapse>

                <NavLink onClick={() => setOpen2(!open2)} aria-expanded={open2}>
                  What makes you a Fiverr Pro seller?
                </NavLink>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    Fiverr Pro sellers are meticulously evaluated for elite
                    performance, only 4% out of Fiverr Pro applications (which
                    are relatively few) are accepted. The following is true: My
                    work is at the highest standard, Premium service, satisfied
                    clients, peak level communication skills, Available 24/7.
                  </div>
                </Collapse>

                <NavLink
                  className={styles.thirdFAQ}
                  onClick={() => setOpen3(!open3)}
                  aria-expanded={open3}
                >
                  Can I purchase a robust development, even if it's not in
                  available packages?
                </NavLink>
                <Collapse in={open3}>
                  <div id="example-collapse-text">
                    Absolutely yes. I am here to create your digital vision,
                    please let me know what you need, and I will create a custom
                    offer for you, tailored to your needs.
                  </div>
                </Collapse>
              </div>
              <div id="RatingBreakdown" className={styles.ratingBreakdown}>
                <div className={styles.reviewers}>
                  <h4>Reviewers</h4>
                  <span className="me-2">
                    {item.congViec.danhGia} reviews for this Gig
                  </span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className={styles.soSao}>5</span>
                </div>
                <div className={styles.rating}>
                  <div className="col-12 col-sm-6">
                    <table className="">
                      <tbody>
                        <tr>
                          <td>
                            <button className={styles.topNotch}>5 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar1}></div>
                            </div>
                          </td>
                          <td className={styles.topNotch}>
                            ({item.congViec.danhGia})
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button>4 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>3 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>2 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>1 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className={styles.breakdown}>
                      <h6>Rating Breakdown</h6>
                      <div className={styles.ratingCategory}>
                        <span>Seller communication level</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>5</span>
                        </div>
                      </div>
                      <div className={styles.ratingCategory}>
                        <span>Recommend to a friend</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>5</span>
                        </div>
                      </div>
                      <div className={styles.ratingCategory}>
                        <span>Seller communication level</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SellerComment" className={styles.sellerComment}>
                {comments?.map((item, index) => {
                  return (
                    <div key={index} className={styles.commentGroup}>
                      <Avatar
                        name={item.tenNguoiBinhLuan}
                        round
                        size={avatarSize}
                        color="#007bff"
                        textSizeRatio={2}
                      >
                        {item.tenNguoiBinhLuan
                          .split(" ")
                          .map((name) => name.charAt(0))
                          .join("")}
                      </Avatar>
                      <div className={styles.comment}>
                        <h6>{item.tenNguoiBinhLuan}</h6>
                        <p className={styles.saoBinhLuan}>
                          {renderStars(item.saoBinhLuan)} {item.saoBinhLuan}
                        </p>
                        <p>{item.noiDung}</p>
                        <p>{dayjs(item.ngayBinhLuan).format("DD/MM/YYYY")}</p>
                        <b className={styles.helpful}>Helpful?</b>
                        <div className={styles.reactGroup}>
                          <span
                            className="fa-solid fa-thumbs-up"
                            role="button"
                            onClick={handleLike}
                          ></span>
                          <span
                            className="fa-solid fa-thumbs-down"
                            role="button"
                            onClick={handleDisLike}
                          ></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="PostComment" className={styles.postComment}>
                <div className={styles.postGroup}>
                  <img
                    src="https://www.linkpicture.com/q/Vuong-Tu-Ky.jpg"
                    alt=""
                  />
                  <textarea
                    name="Add Comment"
                    id="feedbackCustomer"
                    cols="80"
                    rows="7"
                  ></textarea>
                </div>
                <button
                  className={`${styles.addComment} btn btn-primary`}
                  onClick={handlePostComment}
                >
                  Add Comment
                </button>
              </div>
            </div>

            <div className={styles.packageCost}></div>
          </div>
        );
      })}
    </div>
  );
}
export default ServiceInfo;
