import { makeAutoObservable, runInAction } from "mobx";

export default class infinityScroll {
  data = null;
  currentItem = null;
  id = null;
  loading = false;
  error = null;
  pagination = null;
  limit = 20;
  offset = 0;

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    this.api = this.root.api.feed;
  }
}
