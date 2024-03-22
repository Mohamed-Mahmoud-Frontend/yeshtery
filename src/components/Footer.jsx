import face from "../assets/Group 1432.svg";
import inst from "../assets/Group 1433.svg";
import twitter from "../assets/Group 1434.svg";
import Ln from "../assets/Group 1435.svg";
import logo from "../assets/logo (2).svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="All__Section-footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="left_section" style={{ flex: 1 }}>
          <img src={logo} />
          <ul>
            <li
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <p style={{ marginBottom: "10px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, <br />
              </p>
              <p className="">
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit
              </p>
              <br />
              <p>
                vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit
              </p>
            </li>
          </ul>
        </div>
        <div
          style={{
            flex: 1,
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <p style={{ color: "#fff", fontSize: "18px" }}>
            Subscribe to our newsletter
          </p>
          <input
            className="input_footer"
            type="text"
            placeholder="Enter Your Mail"
          />
          <div className="section__right">
            <div>
              <ul className="ul_left">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy </li>
                <li>Sell With Us </li>
              </ul>
            </div>
            <div className="line"></div>
            <div>
              <ul className="ul_right">
                <li>
                  <img src={face} alt="" />
                  /YESHTERY
                </li>
                <li>
                  <img src={inst} alt="" />
                  /YESHTERY
                </li>{" "}
                <li>
                  <img src={twitter} alt="" />
                  /YESHTERY
                </li>
                <li>
                <img src={Ln} alt="" />
                /YESHTERY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
