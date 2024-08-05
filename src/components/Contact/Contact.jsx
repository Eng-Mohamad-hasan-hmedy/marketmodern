import "./contact.css";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact__content">
        <div className="text__content">
          <h3>Contact us.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Clothing Courtesy of Lauren Winter, Kinem and ULIHU
          </p>
        </div>
        <div className="contact__inputs">
          <label>
            Name <span className="required">*</span>
          </label>
          <div className="nameInputForm">
            <div className="inputName">
              <label htmlFor="www">First Name </label>
              <input type="text" required />
            </div>
            <div className="inputName">
              <label htmlFor="www">Last Name</label>
              <input type="text" required />
            </div>
          </div>
          <label htmlFor="sasx">
            Email <span className="required">*</span>
          </label>
          <div className="emailForm">
            <input type="email" required />
          </div>
          <label htmlFor="sasx">
            Subject <span className="required">*</span>
          </label>
          <div className="subject">
            <input type="text" required />
          </div>
          <label htmlFor="sasx">
            Message <span className="required">*</span>
          </label>
          <div className="message">
            <textarea type="text" required />
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
