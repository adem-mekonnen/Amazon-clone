import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        {/* logo */}
        <div className={classes.logo_container}>
          <Link to="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
          {/* delivery */}
          {/* <br /> */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
            <option value="">deals</option>
            <option value="">software</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          <BsSearch size={25} />
        </div>

        <div className={classes.order_container}>
          {/* right side link */}

          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="usa flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          {/* three component */}
          <Link to="/auth" className={classes.hoverable_link}>
            <div>
              <p>Sign In</p>
              <span>Account & list</span>
            </div>
            <div className={classes.hover_content}>
              <p>New customer? Start here.</p>
              <ul>
                <li>Your Lists</li>
                <li>Create a List</li>
                <li>Find a List or Registry</li>
                <li>Your Account</li>
                <li>Account</li>
                <li>Orders</li>
                <li>Recommendations</li>
                <li>Browsing History</li>
                <li>Watchlist</li>
                <li>Video Purchases & Rentals</li>
                <li>Kindle Unlimited</li>
                <li>Content & Devices</li>
                <li>Subscribe & Save Items</li>
                <li>Memberships & Subscriptions</li>
                <li>Music Library</li>
              </ul>
            </div>
          </Link>

          {/* orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/* carts */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </Link>
        </div>
      </section>
      {/* <LowerHeader /> */}
    </>
  );
};

export default Header;
