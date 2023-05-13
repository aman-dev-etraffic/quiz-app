import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div class="container">
          <div className="navbar custom_nav">
            <div className="nav_item">
              <Link to="/"><img src="/quiz-fav.png" alt=""/></Link>
            </div>
            <div className="custom_nav_item">
              <span>Who Wants to Be a Millionaire?</span>
            </div>
          </div>
        </div>
        <hr className="divider"/>
      </div>
    </>
  );
};

export default Header;
