import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <div>
          <h2>Contact</h2>
          <h3>Director</h3>
          <a href="mailto:vincentmaina0@gmail.com">vincentmaina0@gmail.com</a>
          <p>+2547123456789</p>

          <p>More</p>
        </div>

        <div>
          <h2>Contacts</h2>
          <h3>Manager</h3>
          <a href="mailto:addymwangi@gmail.com">addymwangi@gmail.com</a>
          <p>+2547123456789</p>
          <p>More</p>
        </div>

        <div>
          <h2>Contacts</h2>
          <h3>Feedback</h3>
          <a href="mailto:feedback@penda.com">feedback@penda.com</a>
          <p>+2547187654321</p>

          <p>More</p>
        </div>
      </div>
      <div className="date">&copy; {date}</div>
    </div>
  );
};

export default Footer;
