import React from "react";
import { useParams } from "react-router-dom";
import MenuService from "../../services/MenuSerevice";

export const MenuDetail = () => {
  const { id } = useParams();
   
  const [menu, setMenu] = React.useState();

  //const [menuId, setMenuId] = React.useState("");

  React.useEffect(() => {
    MenuService.getMenu(id).then((response) => {
      setMenu(response.data);
    });
  }, []);

  return (
    <div className="w-full h-full">
      <h1>Menus</h1>

      <div className="container mx-auto">
       <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
              Top Selling
            </h1>
          </div>
          {menu ? (
            <div className=" items-center content-center   ">
              <div className="" key={menu.menuId}>
                <div
                  className="
        p-8 max-w-xs  loginShadow  m-4 rounded-lg"
                >
                  <div className="">
                    <h2 className="text-xxl font-bold ">{menu.menuName} </h2>
                    <p className="text-xl text-gray-800 dark:text-white mt-2"></p>
                  </div>
                  <div
                    className="relative justify-center text-red  rounded-lg dark:bg-blue-700 w-60 h-56 max-h-56  mt-8 md:mt-24 "
                    style={{
                      backgroundImage: `url(${menu.menuImage})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                 <div className="">
                   <button className="text-red bg-red-700">ADD TO CART</button>
                    <h2 className="text-xxl font-bold ">{menu.menuName} </h2>
                 <h2 className="text-xxl font-bold ">Price :${menu.price} </h2>  
		<h2 className="text-xxl font-bold ">{menu.ingredients} </h2>  
                 </div> 
               </div>
            </div>
          ) : (
            <div>
              <h1>Loading</h1>
            </div>
          )}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,133.3C480,128,600,128,720,112C840,96,960,64,1080,90.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      
    </div>
  );
};
