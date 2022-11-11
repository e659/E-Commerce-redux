import React, { useCallback, useState, useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { BiCategory } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "../Filters/styles/filter.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterProductsByCategory } from "../../Redux/actions/productAction";
import { filterProducts } from "../../Redux/reducers/productReducer";
export default function Filters(props) {
  const { onFilterChange } = props;
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleSidebar = (value) => {
    setMenuToggle(true);
  };
  const Product = useSelector((state) => state.product);
  // console.log(Product);
  // getCategory
  const getCategory = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log("err", err);
      });
    setCategory(response.data);
  };
  // useEffect
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="col-lg-2 ProSideBar">
        <div
          className="btn-toggle d-none"
          onClick={() => handleToggleSidebar(true)}
        >
          <FaBars />
        </div>
        <ProSidebar
          className="pb-5"
          collapsed={menuCollapse}
          breakPoint={"md"}
          onToggle={handleToggleSidebar}
          toggled={menuToggle}
        >
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            {menuCollapse ? (
              <BiSearch size={20} />
            ) : (
              <form className="d-flex pt-2" role="search">
                <input
                  className="form-control  filterSearch"
                  type="search"
                  placeholder="Search by name"
                  aria-label="Search"
                />
              </form>
            )}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" style={{ fontWeight: "Bold" }}>
              <SubMenu
                title="Categories"
                defaultOpen={true}
                icon={<BiCategory />}
                className="fs-4"
              >
                <form>
                  {category.map((cat) => (
                    <MenuItem key={cat}>
                      <div className="form-check">
                        <input
                          className="form-check-input categoryInput"
                          type="checkbox"
                          value={cat}
                        />
                        <label className="form-check-label">{cat}</label>
                      </div>
                    </MenuItem>
                  ))}
                  <button className="btn filterBtn catBtn px-5 mt-3 ">
                    <span>Clear Filter</span>
                  </button>
                </form>
              </SubMenu>
            </Menu>

            <Menu iconShape="square">
              <SubMenu
                title="Price"
                icon={<ImPriceTags />}
                style={{ fontWeight: "Bold" }}
                className="fs-4"
              >
                <MenuItem>
                  <form className="filter-form">
                    <div className="row">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          min="10"
                          max="10000"
                          placeholder="Min"
                          aria-label="First name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          min="10"
                          max="10000"
                          placeholder="Max"
                          aria-label="First name"
                        />
                      </div>
                    </div>

                    <button
                      className="btn filterBtn px-5 mt-3 "
                      style={{ paddingRight: "4.5rem" }}
                    >
                      <span>Set Price</span>
                    </button>
                  </form>
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
}
