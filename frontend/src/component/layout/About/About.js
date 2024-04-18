import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
<>
<section className="about-us-section py-10bg-gray-100">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl lg:text-4xl font-semibold mb-8 text-gray-800 text-center">About Us</h2> */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="max-w-lg lg:mr-8 mb-8 lg:mb-0">
            <div className="about-member mb-6">
              <img src="https://tse1.mm.bing.net/th?id=OIP._PL_-AiN2n0zNy5EKwAhHgAAAA&pid=Api&P=0&h=180" alt="Mentor" className="rounded-full w-24 h-18 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Dr.Santosh Shah</h3>
              <p className="text-gray-600 text-center">Mentor</p>
            </div>
            <div className="about-member">
              <img src="https://media.licdn.com/dms/image/D4D03AQGVbKbUfWB4Cw/profile-displayphoto-shrink_400_400/0/1713369917982?e=1718841600&v=beta&t=h83AhRskU0iLgq4zK0HTW-GPiLEyAoYKW4JJ37hzWl4" alt="Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Nartan Tyagi</h3>
              <p className="text-gray-600 text-center">Member</p>
            </div>
          </div>
          <div className="max-w-lg lg:ml-8 lg:mr-8 mb-8 lg:mb-0">
           
          </div>
          <div className="max-w-lg lg:ml-8">
            <div className="about-member mb-6">
              <img src="https://media.licdn.com/dms/image/C4E03AQFJ18nQ-dTGCg/profile-displayphoto-shrink_400_400/0/1651290783382?e=1718841600&v=beta&t=vWhWo0A9NRF12iZpRIdVL5gNp_x_ZUwiyxB091IE1So" alt="Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Nitish Pareek</h3>
              <p className="text-gray-600 text-center">Member</p>
            </div>
            <div className="about-member">
              <img src="frontend\photo\photo.jpg" alt="Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="frontend\src\images\HARSH.jpg">Harsh Agarwal</h3>
              <p className="text-gray-600 text-center">Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default About;
