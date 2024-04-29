import "./EventPage.css";
import React from "react";

export const EventPage = (props) => {
  return (
    <>
      <div className="blog_img">
        <div id="blog_img1"></div>
        <div id="blog_img2"></div>
        <div id="blog_img3"></div>
      </div>

      <div className="container">
        <div className="blog-page">
          {/* <!-- Speaker session with Sandeep jain --> */}
          {/* <section className="blog-page">
            <div className="speaker">
              <div className="speaker-info">
                <h2>{props.eventName}</h2>
                <div className="details">
                  <div className="venue">
                    <img src="../imgs/calender.png" alt="" />
                    <p>{props.eventDate}</p>
                  </div>
                  <div className="venue">
                    <img src="../imgs/clock.png" alt="" />
                    <p>{props.eventTime}</p>
                  </div>
                  <div className="venue" id="location">
                    <img src="../imgs/location.png" alt="" />
                    <p>{props.eventVenue}</p>
                  </div>
                </div>
              </div>
              <div className="speaker_img">
                <img src={`${props.eventPoster}`} alt="" />
              </div>
            </div>
          </section> */}

          {/* <!-- Code for Inaugration Ceremony Section --> */}
          <section className="blog-page">
            <div className="ceremony">
              <div className="ceremony_info">
                <h2>Inauguration ceremony</h2>
                <p>{props.eventInaugration}</p>
              </div>
              <div>
                <img src={`${props.eventInaugrationImage}`} alt="" />
              </div>
            </div>
          </section>

          {/* <!-- Code for MrSpeaker Speech Section --> */}
          <section className="blog-page">
            <div className="speech">
              <h2>{props.eventSpeakerName} Speech</h2>
              <p>{props.eventSpeechPara1}</p>
              <p>{props.eventSpeechPara2}</p>
              <p>{props.eventSpeechPara3}</p>
              <div className="speech_images">
                <img src={`${props.eventSpeechImage1}`} alt="" />
                <img src={`${props.eventSpeechImage2}`} alt="" />
              </div>
            </div>
          </section>

          {/* <!-- Code for Key Takeaways Section --> */}
          {/* <section className="blog-page">
            <div className="keys">
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <p>{props.eventKeyTakeaways1}</p>
                </li>
                <li>
                  <p>{props.eventKeyTakeaways2}</p>
                </li>
                <li>
                  <p>{props.eventKeyTakeaways3}</p>
                </li>
                <li>
                  <p>{props.eventKeyTakeaways4}</p>
                </li>
              </ul>
            </div>
          </section> */}

          {/* <!-- Code of Conclusion Section --> */}
          {/* <section className="blog-page">
            <div className="conclusion">
              <h2>Conclusion</h2>
              <p>{props.eventConclusion}</p>
              <div className="conclusion_img">
                <img src={`${props.eventConclusionImage}`} alt="" />
              </div>
            </div>
          </section> */}
        </div>
      </div>
      <hr />
    </>
  );
};
