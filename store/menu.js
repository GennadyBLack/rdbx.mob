import { makeAutoObservable, runInAction } from "mobx";
import { availableLinks } from "../helpers/menuHelper";

export default class Menu {

  left_menu = [];
  all_routes = [...availableLinks];
  data = {};
  left_menu_data = {};
  user_menu = {};
  activeRoute = null;

  get leftRoutes(){
      return this.left_menu
  }

 setLeftRoutes() {
    const auth = this.root.auth.isAuth;
    this.left_menu =  [...this.all_routes.filter((item) => {
  if(!item.auth && item.leftMenu){
      return true
  }
  if(!auth && item.auth && item.leftMenu){
    return true
  }

  else {return false}
    })]
  }

  get allRoutes() {
    return this.all_routes
  }

  get filteredRoutes() {
    return this.all_routes.filter((item) => {
      const auth = this.root.auth.isAuth;
      try {
   
        if (
        auth && item?.auth ) {
          return true;
        }
        if (!auth && !item.auth) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
  }
}
