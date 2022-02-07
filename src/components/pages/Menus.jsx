import React from "react";
import { Link } from "react-router-dom";
import MenuService from "../../services/MenuSerevice";
//cart icon

export const Menus = () => {
  const [menus, setMenus] = React.useState([]);
  const [menuTypes, setMenuTypes] = React.useState([]);

  React.useEffect(() => {
    MenuService.getMenus().then((response) => {
      setMenus(response.data);
    });
    MenuService.getMenuTypes().then((response) => {
      setMenuTypes(response.data);
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div>
        <div className="flex space-x-4" style={{ margin: "2px" }}>
          {menuTypes.map((menuType) => {
            return (
              <div key={menuType.menuTypeId} className="item ">
                <button>{menuType.typeName}</button>
              </div>
            );
          })}
        </div>
      </div>
      <h1>Menus</h1>

      <div className="container mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
              Top Selling
            </h1>
          </div>
          <div className=" items-center content-center   ">
            {menus.map((menu) => {
              return (
                <div className="" key={menu.menuId}>
                  <div
                    className="  
      p-8 max-w-xs  loginShadow  m-4 rounded-lg"
                  >
                    <div className="">
                      <h2 className="text-xxl font-bold ">{menu.menuName} </h2>

                      {/* <p className="text-xl text-gray-800 dark:text-white mt-2"></p> */}
                    </div>
                    <div
                      className="relative justify-center text-red  rounded-lg dark:bg-blue-700 w-60 h-56 max-h-56  mt-8 md:mt-24 "
                      style={{
                        backgroundImage: `url(${menu.menuImage})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        className="absolute top-1 right-0"
                        style={{ color: "red" }}
                      >
                        <button className=" ">
                          <Link to={`/menu/${menu.menuId}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-blue-700 dark:text-blue-700 hover:h-8 hover:w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </Link>
                        </button>
                      </div>
                      <div
                        className="absolute bottom-0  "
                        style={{ color: "red" }}
                      >
                        <button className=" ">
                          <Link to={`/menus/menudetail/${menu.menuId}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </button>
                      </div>

                      <div
                        className="absolute w-full"
                        style={{ backgroundColor: `#cf3e34`, bottom: 0 }}
                      >
                        <div className="text-center text-bold text-2xl">
                          Price : $ {menu.price}
                        </div>
                        <div>Ingredients : {menu.ingredients}</div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex h-screen"></div>
        </div>
      </div>
    </div>
  );
};
