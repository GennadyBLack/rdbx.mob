import Auth from "./auth";
import Tools from "./tools";
import apis from "../api/api";
import Modal from "./modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Menu from "./menu";
import User from "./users";
import Feed from "./feed";
import InfinityScroll from "./infinityScroll";
import storage from "../helpers/storage";
import { makeAutoObservable } from "mobx";

const initialvalue = {
  touch: false,
  light: false,
  single: false,
  vibration: false,
  pin: false,
};
export default class store {
  errors = [];
  main_spiner = false;
  request_stack = [];
  internet_connection = false;
  settings = null;
  notify = null;
  pin = null;
  token = null;

  //stack of ids like ['quiz','questions'] you to add in request_stack and show main spiner if error - delete from stack
  setSpinerValue = (value) => {
    this.spiner = value;
  };
  fetchNotify = async () => {
    this.notify = await apis.cabinet.get_multiple_notification_by_filter();
  };

  get getSettings() {
    return this.settings;
  }

  setSettings = async () => {
    const data = await storage.get("settings");
    const pre = { ...initialvalue, ...data };
    this.settings = pre;
  };

  setPin = async () => {
    const data = await storage.get("pin");

    this.pin = data;
  };
  setToken = async () => {
    const data = await storage.get("token");
    this.token = data;
  };

  addInStack = ([requests]) => {
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

  get getErrors() {
    return this.errors;
  }

  setError = (error, methodName) => {
    console.log(this.errors, "errors");
    this.errors.push({
      message: `${error?.message ?? error} from: ${methodName ?? ""}`,
    });
  };

  removeError = (index) => {
    this.errors = this.errors.filter((item, ind) => ind !== index);
  };

  constructor() {
    makeAutoObservable(this);
    this.api = apis;
    this.feed = new Feed(this);
    this.modal = new Modal(this);
    this.storage = AsyncStorage;
    this.auth = new Auth(this);
    this.tools = new Tools(this);
    this.menu = new Menu(this);
    this.users = new User(this);
    this.infinityScroll = new InfinityScroll(this);
  }
}
