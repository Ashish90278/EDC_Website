import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Aboutus } from "./pages/Aboutus.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Events } from "./pages/Events.jsx";
import { Team } from "./pages/Team.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Register } from "./pages/Register.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
// import { AdminLayout } from "./components/layouts/Admin-Layout.jsx";
import { AdminUsers } from "./components/layouts/AdminUsers.jsx";
import { AdminSidebar } from "./components/layouts/AdminSidebar.jsx";
import { AdminStudentsRegister } from "./components/layouts/AdminStudentsRegister.jsx";
import { AdminMembers } from "./components/layouts/AdminMembers.jsx";
import { AdminEvents } from "./components/layouts/AdminEvents.jsx";
import { EventPage } from "./components/EventPage.jsx";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1500);
  }

  return (
    !loading && (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="edc-website-ashy.vercel.app/events" element={<Events />} />
            <Route
              path="edc-website-ashy.vercel.app/events/mr.sandeepjain"
              element={
                <EventPage
                  eventName="Speaker session with Mr.Sandeep Jain"
                  eventDate="Friday, 10 Nov 2023"
                  eventTime="03:45 PM - 04:45 PM"
                  eventVenue="Multi-Purpose Hall"
                  eventPoster="../imgs/EDC_GFG.png"
                  eventSpeakerName="Mr. Sandeep Jain"
                  eventInaugration="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula."
                  eventInaugrationImage="../imgs/blog/ceremony.png"
                  eventSpeechPara1="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                Tincidunt aliquam amet consequat odio amet nunc."
                  eventSpeechPara2="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechPara3="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechImage1="../imgs/blog/speech1.png"
                  eventSpeechImage2="../imgs/blog/speech2.png"
                  eventKeyTakeaways1="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventKeyTakeaways2="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways3="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways4="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventConclusion="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                tincidu"
                  eventConclusionImage="../imgs/blog/conclusion.png"
                />
              }
            />
            <Route
              path="edc-website-ashy.vercel.app/events/lakshya"
              element={
                <EventPage
                  eventName="Speaker session with Mr.Sandeep Jain"
                  eventDate="Friday, 10 Nov 2023"
                  eventTime="03:45 PM - 04:45 PM"
                  eventVenue="Multi-Purpose Hall"
                  eventPoster="../imgs/EDC_Lakshya.png"
                  eventSpeakerName="Lakshya"
                  eventInaugration="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula."
                  eventInaugrationImage="../imgs/blog/ceremony.png"
                  eventSpeechPara1="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                Tincidunt aliquam amet consequat odio amet nunc."
                  eventSpeechPara2="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechPara3="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechImage1="../imgs/blog/speech1.png"
                  eventSpeechImage2="../imgs/blog/speech2.png"
                  eventKeyTakeaways1="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventKeyTakeaways2="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways3="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways4="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventConclusion="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                tincidu"
                  eventConclusionImage="../imgs/blog/conclusion.png"
                />
              }
            />
            <Route
              path="edc-website-ashy.vercel.app/events/stockgrow"
              element={
                <EventPage
                  eventName="Speaker session with Mr.Sandeep Jain"
                  eventDate="Friday, 10 Nov 2023"
                  eventTime="03:45 PM - 04:45 PM"
                  eventVenue="Multi-Purpose Hall"
                  eventPoster="../imgs/EDC_Stockgrow.png"
                  eventSpeakerName="StockGrow"
                  eventInaugration="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                aliquam amet consequat odio amet nunc. Lorem elit enim ligula."
                  eventInaugrationImage="../imgs/blog/ceremony.png"
                  eventSpeechPara1="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                Tincidunt aliquam amet consequat odio amet nunc."
                  eventSpeechPara2="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechPara3="Lorem elit enim ligula. Lorem ipsum dolor sit amet consectetur.
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
                odio amet nunc."
                  eventSpeechImage1="../imgs/blog/speech1.png"
                  eventSpeechImage2="../imgs/blog/speech2.png"
                  eventKeyTakeaways1="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventKeyTakeaways2="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways3="Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus. Massa pellentesque orci
                    pellentesque nulla porta neque amet. Tincidunt aliquam amet
                    consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                    aliquam amet consequat odio amet nunc. Lorem elit enim
                    ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                    tincidunt elit lectus in sapien massa. Et senectus hac
                    lectus congue at tempus."
                  eventKeyTakeaways4="Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus. Massa pellentesque orci
                pellentesque nulla porta neque amet. Tincidunt aliquam amet
                consequat odio amet nunc. Lorem elit enim ligula. Tincidunt
                aliquam amet consequat odio amet nunc. Lorem elit enim
                ligula. Lorem ipsum dolor sit amet consectetur. Senectus sit
                tincidunt elit lectus in sapien massa. Et senectus hac
                lectus congue at tempus."
                  eventConclusion="Lorem ipsum dolor sit amet consectetur. Senectus sit tincidunt
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
                tincidu"
                  eventConclusionImage="../imgs/blog/conclusion.png"
                />
              }
            />
            <Route path="edc-website-ashy.vercel.app/blog" element={<Blog />} />
            <Route path="edc-website-ashy.vercel.app/contact" element={<Contact />} />
            <Route path="edc-website-ashy.vercel.app/aboutus" element={<Aboutus />} />
            <Route path="edc-website-ashy.vercel.app/login" element={<Login />} />
            <Route path="edc-website-ashy.vercel.app/register" element={<Register />} />
            <Route path="edc-website-ashy.vercel.app/signup" element={<Signup />} />
            <Route path="edc-website-ashy.vercel.app/team" element={<Team />} />
            <Route path="edc-website-ashy.vercel.app/admin" element={<AdminUsers />} />
            <Route path="edc-website-ashy.vercel.app/admin/users" element={<AdminUsers />} />
            <Route
              path="/admin/students-register"
              element={<AdminStudentsRegister />}
            />
            <Route path="/admin/members" element={<AdminMembers />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            {/* <Route path="/admin"element={<AdminLayout/>} >
            <Route path="users" element={<AdminUsers/>} />
            <Route path="registrations" element={<AdminRegistrations/>} />
          </Route> */}
            {/* <Route path="/admin"element={<AdminLayout/>} >
            <Route path="users" element={<AdminUsers/>} />
            <Route path="registrations" element={<AdminRegistrations/>} />
          </Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  );
};
