import axios from "axios";
import * as ApiUrl from "../constants/ApiUrl";

class MenuService {
  static async getMenus() {
    return await axios.get(ApiUrl.menus);
  }
  static async setMenu(menu) {
    return await axios.post(ApiUrl.menus, menu);
    }
    static async getMenu(id) {
      return await axios.get(ApiUrl.menus+ "/"+id);
      }
    static async setMenuType(menuType) {
        return await axios.post(ApiUrl.menuTypes, menuType);

    }


 static async getMenuTypes() {
    return await axios.get(ApiUrl.menuTypes);
  }



}
export default MenuService;
