import {makeAutoObservable} from "mobx";


export default class PortfolioStore{
    constructor() {
        this._works = []
        makeAutoObservable(this)
    }


    setWorks(works){
        this._works = works
    }
    get works(){
        return this._works
    }



}