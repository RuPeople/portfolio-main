import {makeAutoObservable} from "mobx";


export default class PortfolioStore{
    constructor() {
        this._works = []
        this._categories = []
        makeAutoObservable(this)
    }



    setWorks(works){
        this._works = works
    }
    get works(){
        return this._works
    }


    setCategories(categories){
        this._categories = categories
    }
    get categories(){
        return this._categories
    }


    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    get selectedCategory() {
        return this._selectedCategory
    }

}