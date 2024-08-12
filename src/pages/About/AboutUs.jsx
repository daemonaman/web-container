import React from 'react';
import './About.css';
import teamImage from '../../Assets/kidztrymainlogo.png'
function AboutUs() {
  return (
    <div className='about_main'>
      <div className="about-us">
      <h1>About Us</h1>
      <section>
        <h2>Welcome to Kidtryz!</h2>
        <p>
          At Kidtryz, we believe in creating a world where every baby thrives. As a newly established baby product e-commerce site, our mission is to provide parents with a one-stop shop for all their baby needs, ensuring safety, comfort, and joy for the little ones.
        </p>
      </section>
      <section>
        <h2>Our Story</h2>
        <p>
          Kidtryz was founded by a group of passionate parents and baby product experts who understand the challenges of finding reliable, high-quality baby products. With firsthand experience and extensive research, we realized the need for a dedicated platform that offers only the best for babies and peace of mind for parents. Hence, Kidtryz was born—a place where quality meets convenience.
        </p>
      </section>
      <section>
        <h2>What We Offer</h2>
        <p>
          Our carefully curated selection of baby products includes everything from essentials like diapers, feeding bottles, and clothing to specialized items like strollers, car seats, and educational toys. We partner with trusted brands known for their commitment to safety and innovation, ensuring that every product on our site meets the highest standards.
        </p>
      </section>
      <section>
        <h2>Our Commitment</h2>
        <ul>
          <li>
            <strong>Quality and Safety:</strong> We prioritize products that adhere to rigorous safety standards and are made from non-toxic, baby-friendly materials.
          </li>
          <li>
            <strong>Convenience:</strong> Our user-friendly website and efficient delivery services are designed to make shopping for baby products as stress-free as possible.
          </li>
          <li>
            <strong>Customer Support:</strong> Our dedicated support team is here to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience.
          </li>
          <li>
            <strong>Sustainability:</strong> We are committed to promoting eco-friendly products and practices, helping to create a better world for our children.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Kidtryz?</h2>
        <ul>
          <li>
            <strong>Expert Selection:</strong> Every product is handpicked by our team of experts who are also parents, ensuring practicality and excellence.
          </li>
          <li>
            <strong>Competitive Pricing:</strong> We offer competitive prices and regular promotions, making top-quality baby products accessible to all families.
          </li>
          <li>
            <strong>Community Focus:</strong> Kidtryz is more than just a store, it's a community. We provide valuable resources, tips, and advice to support parents on their parenting journey.
          </li>
        </ul>
      </section>
      <div className="team-message">
        <p>Warm regards,</p>
        <p>The Kidtryz Team</p>
        <img src={teamImage} alt="The Kidtryz Team" />
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
