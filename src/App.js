import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="content">
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Services' && <Services />}
        {currentPage === 'Bookings' && <Bookings />}
      </div>
      <Footer />
    </div>
  );
}

function Navbar({ currentPage, onPageChange }) {
  return (
    <nav>
      <img src="data:image/png;base64,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" alt="Navbar Image" className="navbar-image" />
      <ul>
        <li className={currentPage === 'Home' ? 'active' : ''}>
          <button onClick={() => onPageChange('Home')}>Home</button>
        </li>
        <li className={currentPage === 'About' ? 'active' : ''}>
          <button onClick={() => onPageChange('About')}>About Us</button>
        </li>
        <li className={currentPage === 'Services' ? 'active' : ''}>
          <button onClick={() => onPageChange('Services')}>Services</button>
        </li>
        <li className={currentPage === 'Bookings' ? 'active' : ''}>
          <button onClick={() => onPageChange('Bookings')}>Bookings</button>
        </li>
      </ul>
    </nav>
  );
}


function Home() {
  return (
    <div className="title">
      <h1>HoopCity</h1>
      <div className="home-content">
        <div className="home-left-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWv2cLYTEqrL6NHB29rXKnxcafBFzVvoAnww&usqp=CAU" alt="Left Image" />
        </div>
        <div className="rectangle">
          <p className="box-text">
            HoopCity is a very helpful organization that focuses on the famous sport of basketball.
            We aim to help everyone improve their ability on the court, as well as provide reservations for some pick-up fun!
          </p>
        </div>
        <div className="home-right-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AiXNEQjbsqeSKogGYYKRdrl14-wwMokS2A&usqp=CAU" alt="Right Image" />
        </div>
        <div className="home-center-image">
          <img src="https://t4.ftcdn.net/jpg/04/37/10/57/240_F_437105709_CWOEQ93pyOalvJCkLNaNtXwutarkDc3F.jpg" alt="Center Image" />
        </div>
      </div>
    </div>
  );
}



function About() {
  return (
    <div className="about-page">
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-section">
          <div className="about-center">
            <div className="about-images">
              <img className="about-image about-image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xHKgHpw5p_3XOb9--jfAkgzAHFWOyxYvCA&usqp=CAU" alt="Image 1" />
            </div>
            <div className="about-rectangle">
              <p className="about-box-text">
                Looking to have a thrilling basketball match with your friends and family? Look no further! Our facility offers the perfect solution for basketball enthusiasts of all group sizes. With our flexible court reservation options, you can reserve a court for intense 1v1 showdowns, dynamic 2v2 competitions, fast-paced 3v3 battles, exhilarating 4v4 matchups, or the classic full-court action of 5v5 games. Gather your loved ones, bring your A-game, and enjoy some quality time while showcasing your skills on the hardwood. Reserve your preferred court now and let the friendly competition begin!
              </p>
            </div>
            <div className="about-images">
              <img className="about-image about-image3" src="data:image/jpeg;base64,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" alt="Image 3" />
              </div>
            <div className="about-rectangle about-rectangle-right">
              <p className="about-box-text">
                Level up your basketball skills with our expert coaching! Whether you're a beginner or experienced player, we welcome everyone looking to sharpen their game. Coach Carter specializes in the art of shooting and passing, while Coach Dave is an expert in defending and mobility!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function Services({ onPageChange }) {
  return (
    <div className="title2">
      <h1>Services</h1>
      <div className="service-row">
        <div className="service-description">
          <h1>1v1</h1>
          <p>Experience the thrill of one-on-one basketball matchups and put your skills to the test in intense 1v1 battles on the court. Book now and show off your moves!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOFAFwrk5KwVy26oRVE0WbZ5QX1t1mGhNYw&usqp=CAU" alt="Image 1" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-description">
          <h1>2v2</h1>
          <p>Grab a teammate and dive into the action-packed world of 2v2 basketball. Double the excitement, teamwork, and strategy. Reserve your spot now for exhilarating 2v2 matchups!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkiOVqVtA4bkPEC8m1uH3Ctrj4dXxoNUqOgg&usqp=CAU" alt="Image 2" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-description">
          <h1>3v3</h1>
          <p>Experience the thrill of 3v3 basketball, where teamwork, coordination, and fast-paced gameplay come together. Join us on the court for intense 3v3 battles and showcase your skills. Book your game now and embrace the excitement!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIY-OrjlPi7oW12WP1ENc6PoAPWZLc4MuGw&usqp=CAU" alt="Image 3" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-description">
          <h1>4v4</h1>
          <p>Experience intense 4v4 basketball battles. Gather your team, showcase your skills, and compete for victory on the court. Book now for an action-packed game!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1zt73fjcYoMTMK2XVMS7K3RosPSSaZxYAQ&usqp=CAU" alt="Image 4" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-description">
          <h1>5v5</h1>
          <p>Unleash the thrill of 5v5 basketball. Join forces with your squad, dominate the court, and engage in exhilarating full-court action. Reserve your spot now for an epic game!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTL1NzKfFBCvFZ9eEe8aRm5s0pju2WkF8lZg&usqp=CAU" alt="Image 5" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-description">
          <h1>Training Session</h1>
          <p>Elevate your basketball skills to new heights with our intensive training course. Unlock your full potential, master essential techniques, and take your game to the next level. Enroll today and become a basketball powerhouse!</p>
        </div>
        <div className="service-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Es1_oySZt6ZPfBJfrpHNnwNh5uJyAq-cHA&usqp=CAU" alt="Image 6" />
        </div>
      </div>
    </div>
  );
}


function Bookings() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setBookingData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="content bookings-content">
      <div className="title2">
        <h1>Bookings</h1>
        <div className="orange-rectangle">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service:</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="1v1">1v1</option>
                  <option value="2v2">2v2</option>
                  <option value="3v3">3v3</option>
                  <option value="4v4">4v4</option>
                  <option value="5v5">5v5</option>
                  <option value="Training Session">Training Session</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dateTime">Date and Time:</label>
                <input type="datetime-local" id="dateTime" name="dateTime" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="confirmation-message">
              <p>Congratulations! You have booked {bookingData.service} at {bookingData.dateTime}.</p>
              <p>We will send you an email at {bookingData.email}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





function Footer() {
  return (
    <footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <div class="gray-rectangle">
        <h3>Address</h3>
        <p>1122 Conroy Dr.</p>
        <p>Ottawa, ONT, K1G 4E2</p>
        <p>hoopcity@gmail.com</p>
        <p>(613)-111-2234</p>
      </div>
    </div>
    <div class="footer-section">
      <div class="gray-rectangle">
        <h3>Hours</h3>
        <p>Monday-Friday: 9am-6pm</p>
        <p>Saturday: 10am-4pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    <div class="footer-section">
      <div class="gray-rectangle">
        <h3>Owner</h3>
        <p>FlightReacts</p>
        <p>flightreacts@yahoo.com</p>
        <p>(613) 157-9674</p>
      </div>
    </div>
    <div class="footer-section logo-container">
      <div class="logo-rectangle">
        <p class="logo-text">HoopCity</p>
      </div>
    </div>
  </div>
</footer>
  );
}


export default App;
