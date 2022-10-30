import { makeAutoObservable, runInAction } from "mobx";
import { Text } from "react-native";

export default class Layout {
    layout = 'default';

  get getLayout() {
    return this.layout;
  }

  setLayout = (val) => {
    this.data = val;
  };


  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
  }
}
