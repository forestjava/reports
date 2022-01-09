import React from "react";
import { makeAutoObservable } from "mobx";
import { ReportType } from "../data/types";

const selection = {
  selected: false, // selected item presents on the page 

  id: '', // id of selected item
  
  select(id: string) { // action to select item
    this.selected = true
    this.id = id
  },
  
  unselect() { // action to unselect items
    this.selected = false
    this.id = ''
  }
}

const filter = {
  search: '',
  setFilter(search: string) {
    this.search = search
    //this.unselect()
  },
  clearFilter() {
    this.search = ''
  }
}

const pagination = {
  limit: 9, // records on one page

  pagesCount: 1, // pages count for pagination

  currentPage: 0, // current page index ( 0.. based )

  hasPreviousPage: true,
  hasNextPage: true,

  setSize(records: number) { // set new count of pages
    this.pagesCount = Math.floor(records / this.limit) + 1
    if (this.currentPage >= this.pagesCount) this.setCurrentPage(this.pagesCount - 1)
  },

  setCurrentPage(page: number) { // select the page
    this.currentPage = page
    this.hasPreviousPage = this.currentPage > 0
    this.hasNextPage = this.currentPage < this.pagesCount - 1
    //this.unselect()
  },

  goPreviousPage() {
    if (this.hasPreviousPage) this.setCurrentPage(this.currentPage - 1)
  },

  goNextPage () {
    if (this.hasNextPage) this.setCurrentPage(this.currentPage + 1)
  },

}

const modals = {
  active: false, // is there a modal window on app's top
  
  action: '', // what modal window is, TODO refactor to some <Component />
  
  show(action: string) { // action to show
    this.active = true
    this.action = action
  },

  close() { // action to close
    this.active = false
    this.action = ''
  }
}

const errors = {
  toasts: [] as string[],
  push(error: unknown) {
    const toast = error instanceof Error ? error.message : String(error)
    if (!this.toasts.includes(toast)) {
      this.toasts.push(toast)
      setTimeout(() => this.pop(), 2500)
    }
  },
  pop() {
    this.toasts.pop()
  },
  clear() {
    this.toasts = []
  }
}

type Tab = {
  id: string
  name: string
}

const framing = {
  iframes: false,

  tabs: [] as Tab[],
  open(tab: Tab) {
    const me = (item: Tab) => item.id == tab.id;
    if (!this.tabs.some(me)) this.tabs.push(tab);
    this.iframes = true; 
    this.select(this.tabs.findIndex(me))
  },
  close(i: number) {
    this.tabs.splice(i, 1)
    if (this.tabs.length == 0) this.iframes = false; 
    else if (this.tabs.length <= this.selected) this.select(this.tabs.length - 1)
  },
  closeAll() {
    this.tabs = []
    this.iframes = false; 
    this.compact = false;
  },

  selected: 0,
  select(i: number) {
    this.selected = i
  },

  compact: false,
  arrange(compact: boolean) {
    this.compact = compact
  }
} 

export const ui = {

  app: makeAutoObservable({
    mode: '', // 'admin' | 'user'
    setMode(mode: string) {
      this.mode = mode
    }
  }),

  roles: makeAutoObservable({...selection, ...filter, ...pagination}),
  reports: makeAutoObservable({...selection, ...filter, ...pagination}),
  user: makeAutoObservable({...framing, ...filter, ...pagination}),
  
  modals: makeAutoObservable({...modals}),
  errors: makeAutoObservable({...errors})

}

export const UIStateContext = React.createContext(ui)

export const useUI = () => {
  return React.useContext(UIStateContext)
}
