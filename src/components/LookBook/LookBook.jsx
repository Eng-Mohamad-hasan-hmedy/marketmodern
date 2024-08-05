import person from "../../assets/person.jpg";
import Footer from "../Footer/Footer";
import "./lookbook.css";
const LookBook = () => {
  return (
    <div className="container lookbook__main breadCrumbs link__look">
      <img src={person} alt="teshirt" className="lookbook_image" />
      <Footer />
    </div>
  );
};

export default LookBook;
