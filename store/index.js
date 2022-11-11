import Auth from "./auth";
import Tools from "./tools";
import apis from "../api/api";
import Modal from "./modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Menu from "./menu";
import User from "./users";
import Feed from "./feed";

export default class store {
  errors = [{ message: "asdsasds" }];
  main_spiner = false;
  request_stack = [];
  internet_connection = false;

  //stack of ids like ['quiz','questions'] you to add in request_stack and show main spiner if error - delete from stack
  setSpinerValue = (value) => {
    this.spiner = value;
  };

  addInStack = ([requests]) => {
    // requests.forEach(element => {
    //   this[element.name][element.method]()
    // });
    const id = Math.floor(Math.random()) * 100;
    this.request_stack.push(id);
    this.main_spiner = true;
    console.log("addInStack", this.getSpiner);
    return id;
  };

  removeFromStack = (value) => {
    this.request_stack = this.request_stack.filter((item) => item !== value);
    this.main_spiner = this.request_stack.length > 0;
  };

  setInternetConnection = (value) => {
    this.internet_connection = value;
  };

  get getInternet_connection() {
    return this.internet_connection;
  }

  get getSpiner() {
    return { spiner: this.main_spiner, stack: this.request_stack.length };
  }

  setError = (error, methodName) => {
    this.errors.push({
      message: `${error?.message} from: ${methodName ?? ""}`,
    });
  };

  removeError = (index) => {
    this.errors = this.errors.filter((item, ind) => ind !== index);
  };

  constructor() {
    this.api = apis;
    this.feed = new Feed(this);
    this.modal = new Modal(this);
    this.storage = AsyncStorage;
    this.auth = new Auth(this);
    this.tools = new Tools(this);
    this.menu = new Menu(this);
    this.users = new User(this);
  }
}
