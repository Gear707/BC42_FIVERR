import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiServiceInfo } from "../../apis/jobAPI";
import { Collapse, Nav, NavLink } from "react-bootstrap";
import styles from "./ServiceInfo.module.scss";
import "./ServiceInfo.scss";
import { apiPostComment, apiSellerComment } from "../../apis/commentAPI";
import dayjs from "dayjs";
import Avatar from "react-avatar";
import Rating from "react-rating";
import { useSelector } from "react-redux";
import { apiCreateHiredJob } from "../../apis/hiredJobAPI";
import { alertSuccess2 } from "../../helpers/sweeAlert2";
import { alertError2 } from "../../helpers/sweeAlert2";

function ServiceInfo() {
  const { keyword, MaCongViec } = useParams();
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();

  const [comment, setComment] = useState([]);

  const [info, setInfo] = useState();
  const [comments, setCommets] = useState();
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [rating, setRating] = useState(null);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const avatarSize = 35;

  const getServiceInfo = async () => {
    try {
      const data = await apiServiceInfo(MaCongViec);
      setInfo(data.content);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(info);
  const getSellerComment = async () => {
    try {
      const data = await apiSellerComment(MaCongViec);
      setCommets(data.content);
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

  const handleChange = (evt) => {
    const { value } = evt.target;
    setComment(value);
  };

  const handlePostComment = async () => {
    const currentTime = new Date().toLocaleString();
    const payload = {
      id: 1003,
      maCongViec: +MaCongViec,
      maNguoiBinhLuan: +user.user.user.id,
      ngayBinhLuan: currentTime,
      noiDung: comment,
      saoBinhLuan: rating,
    };
    try {
      const data = await apiPostComment(payload);
      if (data.statusCode === 200 || data.statusCode === 201) {
        alertSuccess2(data.message);
      }
    } catch (error) {
      alertError2(error.response.data.content);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleContinue = async () => {
    if (user) {
      const currentTime = new Date().toLocaleString();
      const payload = {
        id: 0,
        maCongViec: MaCongViec,
        maNguoiThue: user.user.user.id,
        ngayThue: currentTime,
        hoanThanh: true,
      };
      try {
        const data = await apiCreateHiredJob(payload);
        alertSuccess2(data.message);
      } catch (error) {
        alertError2(error.response.data.content);
      }
    } else {
      navigate("./login");
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
                  <img src={user.user.user.avatar} alt={user.user.user.name} />
                  <textarea
                    name="comment"
                    id="feedbackCustomer"
                    cols="80"
                    rows="7"
                    value={comment}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className={styles.addComment}>
                  <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    fractions={1}
                    initialRating={0}
                    onChange={handleRatingChange}
                  />
                  <p>You've rated: {rating} (stars)</p>
                  <button
                    className="btn btn-primary"
                    onClick={handlePostComment}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>

            <div id="PackageCost" className={styles.packageCost}>
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Basic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Standard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Premium</Nav.Link>
                </Nav.Item>
                <div className={styles.packageContent}>
                  <div className={styles.standard}>
                    <b>Standard</b>
                    <b>{item.congViec.giaTien}$</b>
                  </div>
                  <p>Create a simple web application for business</p>
                  <div className={styles.addtionalInfo}>
                    <div className="delivery-wrapper">
                      <span
                        className="glAQDp5 delivery-icon"
                        aria-hidden="true"
                        style={{ width: "16px", height: "16px" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                          <path d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                      </span>
                      <b className="delivery">30 Days Delivery</b>
                    </div>
                    <div className="revisions-wrapper">
                      <span
                        className="glAQDp5 revisions-icon"
                        aria-hidden="true"
                        style={{ width: "16px", height: "16px" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                          <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                        </svg>
                      </span>
                      <b className="revisions">Unlimited Revisions</b>
                    </div>
                  </div>
                  <b>What's included?</b>
                  <p className={styles.description}>{item.congViec.moTaNgan}</p>
                  <div className={styles.continue}>
                    <button
                      className="btn btn-success d-flex justify-content-center"
                      onClick={handleContinue}
                    >
                      Continue (${item.congViec.giaTien})
                    </button>
                    <Link>Compare packages</Link>
                  </div>
                </div>
              </Nav>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ServiceInfo;

{
  /* <ul>
<li>
  <i className="fa-solid fa-check"></i>
  <span>Design Customization</span>
</li>
<li>
  <span className={styles.noCheck}>Content upload</span>
</li>
<li>
  <i className="fa-solid fa-check"></i>
  <span>Responsive Design</span>
</li>
<li>
  <i className="fa-solid fa-check"></i>
  <span>Include Source Code</span>
</li>
<li>
  <span className={styles.noCheck}>1 Page</span>
</li>
</ul> */
}
