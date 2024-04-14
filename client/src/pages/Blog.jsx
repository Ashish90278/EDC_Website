import { NavLink } from "react-router-dom";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <div className="blog_img">
        <div id="blog_img1">
          {/* <!-- <img src="./imgs/blog/Rectangle 176.png" alt=""> --> */}
        </div>
        <div id="blog_img2">
          {/* <!-- <img src="./imgs/blog/Rectangle 177.png" alt=""> --> */}
        </div>
        <div id="blog_img3">
          {/* <!-- <img src="./imgs/blog/Rectangle 178.png" alt=""> --> */}
        </div>
      </div>

      <div className="container">
        <div className="blog-page">
          {/* <!-- Speaker session with Sandeep jain --> */}
          <section className="blog-page">
            <div className="speaker">
              <div className="speaker-info">
                <h2>Speaker session with Mr.Sandeep Jain</h2>
                <div className="details">
                  <div className="venue">
                    <img src="../imgs/calender.png" alt="" />
                    <p>Friday, 10 Nov 2023</p>
                  </div>
                  <div className="venue">
                    <img src="../imgs/clock.png" alt="" />
                    <p>03:45 PM - 04:45 PM</p>
                  </div>
                  <div className="venue" id="location">
                    <img src="../imgs/location.png" alt="" />
                    <p>Multi-Purpose Hall</p>
                  </div>
                </div>
              </div>
              <div className="speaker_img">
                <img src="../imgs/blog/speaker_img.png" alt="" />
              </div>
            </div>
          </section>

          {/* <!-- Code for Inaugration Ceremony Section --> */}
          <section className="blog-page">
            <div className="ceremony">
              <div className="ceremony_info">
                <h2>Inauguration ceremony</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
                  elit lectus in sapien massa. Et senectus hac lectus congue at
                  tempus. Massa pellentesque orci pellentesque nulla porta neque
                  amet. Tincidunt aliquam amet consequat odio amet nunc. Lorem
                  elit enim ligula. Tincidunt aliquam amet consequat odio amet
                  nunc. Lorem elit enim ligula. Lorem ipsum dolor sit amet
                  consectetur. Senectus sit tincidunt elit lectus in sapien
                  massa. Et senectus hac lectus congue at tempus. Massa
                  pellentesque orci pellentesque nulla porta neque amet.
                  Tincidunt aliquam amet consequat odio amet nunc. Lorem elit
                  enim ligula. Tincidunt aliquam amet consequat odio amet nunc.
                  Lorem elit enim ligula. Lorem elit enim ligula. Tincidunt
                  aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                </p>
              </div>
              <div>
                <img src="../imgs/blog/ceremony.png" alt="" />
              </div>
            </div>
          </section>

          {/* <!-- Code for MrSpeaker Speech Section --> */}
          <section className="blog-page">
            <div className="speech">
              <h2>Mr. Sandeep Jain Speech</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
                elit lectus in sapien massa. Et senectus hac lectus congue at
                tempus. Massa pellentesque orci pellentesque nulla porta neque
                amet. Tincidunt aliquam amet consequat odio amet nunc. Lorem
                elit enim ligula. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Lorem ipsum dolor sit amet
                consectetur. Senectus sit tincidunt elit lectus in sapien massa.
                Et senectus hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula.Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac lectus
                congue at tempus. Massa pellentesque orci pellentesque nulla
                porta neque amet. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Tincidunt aliquam amet consequat
                odio amet nunc. Lorem elit enim ligula.Lorem ipsum dolor sit
                amet consectetur. Senectus sit tincidunt elit lectus in sapien
                massa. Et senectus hac lectus congue at tempus. Massa
                pellentesque orci pellentesque nulla porta neque amet. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                Tincidunt aliquam amet consequat odio amet nunc.
              </p>
              <p>
                Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
                Senectus sit tincidunt elit lectus in sapien massa. Et senectus
                hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
                elit lectus in sapien massa. Et senectus hac lectus congue at
                tempus. Massa pellentesque orci pellentesque nulla porta neque
                amet. Tincidunt aliquam amet consequat odio amet nunc. Lorem
                elit enim ligula. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula.Lorem ipsum dolor sit amet
                consectetur. Senectus sit tincidunt elit lectus in sapien massa.
                Et senectus hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula.Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac lectus
                congue at tempus. Massa pellentesque orci pellentesque nulla
                porta neque amet. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Tincidunt aliquam amet consequat
                odio amet nunc.
              </p>
              <p>
                Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
                Senectus sit tincidunt elit lectus in sapien massa. Et senectus
                hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
                elit lectus in sapien massa. Et senectus hac lectus congue at
                tempus. Massa pellentesque orci pellentesque nulla porta neque
                amet. Tincidunt aliquam amet consequat odio amet nunc. Lorem
                elit enim ligula. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula.Lorem ipsum dolor sit amet
                consectetur. Senectus sit tincidunt elit lectus in sapien massa.
                Et senectus hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula.Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac lectus
                congue at tempus. Massa pellentesque orci pellentesque nulla
                porta neque amet. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Tincidunt aliquam amet consequat
                odio amet nunc.
              </p>
              <div className="speech_images">
                <img src="../imgs/blog/speech1.png" alt="" />
                <img src="../imgs/blog/speech2.png" alt="" />
              </div>
            </div>
          </section>

          {/* <!-- Code for Key Takeaways Section --> */}
          <section className="blog-page">
            <div className="keys">
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- Code of Conclusion Section --> */}
          <section className="blog-page">
            <div className="conclusion">
              <h2>Conclusion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
                elit lectus in sapien massa. Et senectus hac lectus congue at
                tempus. Massa pellentesque orci pellentesque nulla porta neque
                amet. Tincidunt aliquam amet consequat odio amet nunc. Lorem
                elit enim ligula. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Lorem ipsum dolor sit amet
                consectetur. Senectus sit tincidunt elit lectus in sapien massa.
                Et senectus hac lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula.Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac lectus
                congue at tempus. Massa pellentesque orci pellentesque nulla
                porta neque amet. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Tincidunt aliquam amet consequat
                odio amet nunc. Lorem elit enim ligula.Lorem ipsum dolor sit
                amet consectetur. Senectus sit tincidunt elit lectus in sapien
                massa. Et senectus hac lectus congue at tempus. Massa
                pellentesque orci pellentesque nulla porta neque amet. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                Tincidunt aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac lectus
                congue at tempus. Massa pellentesque orci pellentesque nulla
                porta neque amet. Tincidunt aliquam amet consequat odio amet
                nunc. Lorem elit enim ligula. Tincidunt aliquam amet consequat
                odio amet nunc. Lorem elit enim ligula. Lorem ipsum dolor sit
                amet consectetur. Senectus sit tincidunt elit lectus in sapien
                massa. Et senectus hac lectus congue at tempus. Massa
                pellentesque orci pellentesque nulla porta neque amet. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula.
                Tincidunt aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula.Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidu
              </p>
              <div className="conclusion_img">
                <img src="../imgs/blog/conclusion.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
