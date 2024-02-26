import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        {/* logo */}
        <div className={classes.logo_container}>
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </a>
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

          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="usa flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>
          {/* three component */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & list</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/* carts */}
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
