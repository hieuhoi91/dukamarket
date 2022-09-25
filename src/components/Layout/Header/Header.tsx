import { FC, useState, Fragment } from 'react';
import './header.style.scss';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, Outlet } from 'react-router-dom';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    setShowList(!showList);
  };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="header-top">
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/logo_200x@2x.png?v=1635821932"
                alt=""
              />
            </Link>
          </div>
          <div className="header-search">
            <form className="form-search">
              <input type="text" placeholder="Search for products" />
              <button title="search" type="button" className="btn-search">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="header-top-meta">
            <ul className="header-control">
              <li className="header-icon">
                <a title="login" href="/">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADn0lEQVR4nO2ay2tVRwDGv0muIuITRBO1CwWLgo9quxQUSlUs6taCYtGFuPRBdaGC0C5NI+7tpo1/QLtXVz6JERVFKC4SY9RWxVgxtubXxZmLk/He5ORk5tzcdn6rQ8493/fNmfecSIlEIpFIJBKJRCLxP8SUbQgYSeskLZc03/75qaR7km4aYyg7UykAbUAn8Ij6PAJ+BBY0Om8wAAN8B7wepeA+g8AR21qiEtUAmCbpJ0k7vVsDki5K6rcZ2iVtlNTm/e68pL3GmLcxc0bB1vx5r2ZvAJuAlhq/bwE2A93eM11ltITg2Gbv0gG05niuYscKl8NlZA4GMB945RTgdAGNM96Y4HePyYtXgzfy1HwNjYrXHTpiZA2O7fvuVLdpAlpbHJ2+phgLgC+c0P21BrxxaLUAA47eupBZJalwuFH41Lm+ZIwZLipkn71URzsIMV7AQue6L4Ber3O9KIDeCGK8AHctH6LPuhrB9wkxXkC/cx2ixhbX0Z6cAJ87g9bjAIPgE0dvbcisUagxDW6ZgNZWR6e3KaZBSSLb0lbpBioFNCpAj6Mz7tVkw+DjpXBnAY2zzvODNNsZAdl+3uVMnpZga/6s9+zBMjIHxY4FXV5BusmWt/W2w1u9Zg/wc8y+X8aByDlJ33i3nujDgYiUTZcb9eGMsEqXpH1NeSBSxbaEw7Yf5+UVcDBmzZcOsIDsUKRvlIL3AqcBvyVEo1HH4p8pOxavHnIMSLovqec/eyyeSExOSh0DgKmS1khaImmOpLn21gtJLyU9lHTLGPOuzFxRAVYBPwDXgaEcU+AQcA34HljZ6PyFAKYAe4E745j763Eb+JYCG6o8BO8CwC5JpyQtrXVb0gNJdyX9oazpS1lXmCdppaRldXL9LumkMaYrdOYgAAuB32rU4CDZen4bMDuHzmxgO/ALtVePvwLtZZQpN8BXwHMv6DPgKDBjArozgGNWy+VP4MuQZSgMsAd454R7T7b1LVzwGh4zreZ7x2cI2B3Ko2iwA8CwE6oX2BDRb4P1qDIM7I/lN1aYr4G/nTB3gE9K8G1n5DfDf4AdsX39EKsZ+R8f18kxwAX0nwVcdfxfA6vKMq+QffGt0gcsHvvJ4DnmAQ+cHD3AlDKMjzumb4HV0U3rZ1kBvHHyHI9t2AL85RieiGqYL9MhryvE+No1wvCKNbtcSpMbO08rcKE6FpVhOB1YD0yPbpYTYCrZFDmz0VkSiUQikUgkmoZ/AXBgcRZAlboyAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <span>Login / Register</span>
                </a>
              </li>
              {/* Only show if user is logged in */}
              <li className="header-icon">
                <a title="wishlist" href="/">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABq0lEQVRYhe3UPWsUURTG8ZkUYVHUzi7Ej2BlHS0kjaCNL6UKRg1YpBK0Fa18ZUH9FCbYiPoBFL+DWrgRbTTNJkT42ZzFyzi7mZmdCSI5zWXuOef5P/fcy2TZXuzFvxiYwQWsYYBf+IY3uIheSU8Pl/AW36NngFWcw0xV+BF8MDm+4nTScyb2JsV7zFeBj4Q+4grmMBu5ZXxORO/gbvL9CdejdjZ6r8Y+rI81EWMfnfwVDoyp6+E2thPwNm4puZroOYjXUftO2XXgfHLyUnih/gR+4geOV6g/lEzvbFnBWiSXdhJLehawUKP+WjBelCUHkZyrKlg3MB+ML2XJrUju69DA/mBsjvbSxzCI9WhXBrIsOxbrepmB1VhXOjRwM9aXf2VwGBsxosttk7EU2sOx7yx+GqOixRbhi9gM7Rs7Fd9v00TAh6H5oGrTvWjYwqkp4Cdrw9syUYA/RF5XIMejJiYK8Ke14dOYaA3exEQB/mxqeMHE40kmOoNXMVGAP28dPsnErsELJvoBHCbwfufwgokn/kTjkzd2HMB+fC7nea6pVuOISezO2P/b+A1bklALSiZrUQAAAABJRU5ErkJggg=="
                    alt=""
                  />
                  <span>My Wishlist</span>
                </a>
              </li>
              <li className="header-icon">
                <a title="cart" href="/">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRYhe2WQY6CUBBEq41RZ6PbcY6knGfYG4/leB+3g4vBzXPTJEQbI4Y/ouEl5BOKVFU6P/ClgVcEyIAf4AgUfr/+r/AtzWxSh2ceVALfwJdfuT8DWKUssPeQPNBy13YpCxQesgy0T9d+UxYA4FE9wm6Y/UmatjG7QWlms0gYNYTPOgyXpCkQ+oUFJC18PViNSrQGIl3S4cLzrgJzX7vYUJXHPBKfXmDcpkB9zBENem8m0GoPVC+//x7ofYGigwKVx2tOYCgwfAfev0D4cwFKSZMOwuuczOzqUHI1AeAjQbgkTfykNdAvzjLOyyK76pp9AAAAAElFTkSuQmCC"
                    alt=""
                  />

                  <span>Your Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <div
            className={
              !showList ? 'header-menu' : 'header-menu header-menu-active'
            }
            onClick={handleShowList}
          >
            <div className="header-icon">
              {!showList ? <MenuIcon /> : <CloseIcon />}
            </div>
            <span>SHOP BY DEPARTMENT</span>
          </div>
          {showList && <div></div>}
          <div className="header-nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="header-bottom-meta">
            <span className="title-menu">
              Spend $120 more and get free shipping!
            </span>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
