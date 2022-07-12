import {makeAutoObservable} from "mobx";

export default class PortfolioStore{
    constructor() {
        this._works = [
            {id:1, name: "sprint", smallDescription: "An online store of goods for fishing from outdoor activities", thumbnail: "./static/Work1.png" , bigDescription: "An online store of goods for fishing from outdoor activities. An online store of goods for fishing from outdoor activities", website: "https://sprint.tk/", stack: "MODX, Bootstrap, Swiper",
                images: [
                    {id:1, href:"./static/Work1.png"},
                    {id:2, href:"./static/Work1.png"}
                ]
            }
        ]
        makeAutoObservable(this)
    }


    setWorks(works){
        this._works = works
    }
    get works(){
        return this._works
    }



}