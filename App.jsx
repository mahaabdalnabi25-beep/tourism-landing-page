import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  const services = [
    { title: 'Flexible Flights', desc: 'Get the best rates for international flights with easy and flexible modification options.', img: '/service1.jpg' },
    { title: 'Hotel Bookings', desc: 'Enjoy a luxurious and comfortable stay at top-rated hotels and resorts worldwide.', img: '/service2.jpg' },
    { title: 'Group Tours', desc: 'Organized, fun-filled travel programs accompanied by professional local tour guides.', img: '/service3.jpg' },
    { title: 'Visa Assistance', desc: 'We help you easily clear all government paperwork to secure your travel visa.', img: '/service4.jpg' }
  ];

  const testimonials = [
    { name: 'Sarah Ahmed', role: 'Business Consultant', text: 'Excellent scheduling and wonderful hotel selections. I will absolutely book my next holiday with Afaq Travel again.', img: '/woman.png' },
    { name: 'Sami Ahmed', role: 'Marketing Director', text: 'Professional team and creative trip planning! I had an unforgettable travel experience with my family. Highly recommended.', img: '/man.png' }
  ];

  return (
    <div>
      <header>
         <img src="/tourism-landing-page/logo.png" alt="Logo" />
        <nav id="header">
          <a href="#box1">Home</a>
          <a href="#section-about">About</a>
          <a href="#service">Services</a>
          <a href="#Testimonials">Testimonials</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>

      <div id="box1">
        <h1>Discover the world in your own way</h1>
        <p>We provide the best travel deals, tailored tour packages, and unforgettable experiences worldwide at competitive prices.</p>
        <a href="#Contact">
          <button className="button">Contact Us Now</button>
        </a>
      </div>

      <main>
<section id="section-about">
  <h2>About Us</h2>
  <div className="about-container">
    <div className="about-content">
      <p>We are "Afaq Travel & Tourism," and since our founding...</p>
      <ul>
        <li>More than 10 years of experience in the tourism industry.</li>
        <li>Strategic partnerships with top international hotels.</li>
        <li>24/7 dedicated customer support and travel assistance.</li>
      </ul>
    </div>
  <img src="/tourism-landing-page/about.png" alt="About Us" />
  </div>
</section>


<section id="section-services">
          <h2>Our Services</h2>
          <div className="services-container">
            {services.map((item, index) => (
              <div className="service-card" key={index}>
                <img src={`/tourism-landing-page/${item.img}`} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div id="banner">
          <h1>Limited Time Offer!</h1>
          <h2>Book your next destination today and get up to a 20% discount on all summer packages.</h2>
        </div>

       <section id="testimonials">
  <h2>What Our Clients Say</h2>
  <div className="testimonials-container">
    
    
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p className="testimonial-text">
        "Excellent scheduling and wonderful hotel selections. I will absolutely book my next holiday with Afaq Travel again."
      </p>
      <div className="client-info">
        <img src="/tourism-landing-page/woman.png" alt="Sarah Ahmed" className="client-avatar" />
        <div>
          <h3>Sarah Ahmed</h3>
          <span>Business Consultant</span>
        </div>
      </div>
    </div>

   
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p className="testimonial-text">
        "Professional team and creative trip planning! I had an unforgettable travel experience with my family. Highly recommended."
      </p>
      <div className="client-info">
        <img src="/tourism-landing-page/man.png" alt="Sami Ahmed" className="client-avatar" />
        <div>
          <h3>Sami Ahmed</h3>
          <span>Marketing Director</span>
        </div>
      </div>
    </div>

  </div>
</section>

        <section id="Contact">
          <h2>Contact Us</h2>
          <form id="form-group" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea name="message" rows="5" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" id="sendbutton">Send Message</button>
          </form>

          <div id="box2"> 
<div class="box2"> 
  <h4>Email Us </h4> 
  <p> info@Afaq-travel.com</p> 
</div>
</div>

<div id="box2"> 
<div class="box2"> 
  <h4> Call Us</h4> 
  <p> +966 500 000 000</p>
</div>
</div>

<div id="box2"> 
<div class="box2"> 
  <h4> Our Location</h4> 
  <p> King Fahd Road, Riyadh, Saudi Arabia</p> 
</div>
</div>

<div id="icon"> 
<a href="https://www.Location.com" class=" fa fa-location-dot"></a>
<a  href="https://www.phone.com" class="fa fa-phone"></a> 
<a href=" mailto:info@Afaq-travel.com" class="fa-solid fa fa-envelope"></a>
</div>
        </section>
      </main>

     <footer>
  <div id="container">
    <div id="left">
    <img src="/tourism-landing-page/logo.png" alt="Logo" width="100" />
      <p>Your reliable and secure gateway to exploring the world's most beautiful landmarks and making memories.</p>
    </div>

    <div id="middle">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#box1">Home</a></li>
        <li><a href="#section-about">About</a></li>
        <li><a href="#service">Services</a></li>
      </ul>
    </div>

    <div id="social">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>

  <hr />
  <p style={{ textAlign: 'center' }}>Copyright © 2026 Afaq Travel Company. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default App;
