import {makeAutoObservable} from "mobx";

export default class PortfolioStore{
    constructor() {
        this._works = [
            {id:1, name: "sprint", smallDescription: "An online store of goods for fishing from outdoor activities", thumbnail: "https://picsum.photos/250/160" , bigDescription: "An online store of goods for fishing from outdoor activities. An online store of goods for fishing from outdoor activities", website: "https://sprint.tk/", stack: "MODX, Bootstrap, Swiper", year: "2022",
                images: [
                    {id:1, href:"./static/Work1.png"},
                    {id:2, href:"./static/Work1.png"}
                ]
            },
            {id:2, name: "Truckstore", smallDescription: "A pat-project of Online truck store with constructor", thumbnail: "https://picsum.photos/250/160" , bigDescription: "A pat-project of Online truck store with constructor/ A pat-project of Online truck store with constructor/", website: "https://truck-store.tk/", stack: "React, React-Bootstrap, Axios, MobX, Node.js, Express, PostgreSQL, Sequelize",
                images: [
                    {id:1, href:"./static/Work1.png"},
                    {id:2, href:"./static/Work1.png"}
                ]
            },
            {id:3, name: "My portfolio", smallDescription: "U’re here rn", thumbnail: "https://picsum.photos/250/160" , bigDescription: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", website: "https://sprint.tk/", stack: "React, React-Bootstrap, Chakra, Framer, Three/Fiber Axios, MobX, Node.js",
                images: [
                    {id:1, href:"./static/Work1.png"},
                    {id:2, href:"./static/Work1.png"}
                ]
            },
            {id:4, name: "Digital Craft", smallDescription: "A website for in-University community", thumbnail: "https://picsum.photos/250/160" , bigDescription: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", website: "https://sprint.tk/", stack: "React, React-Bootstrap, Chakra, Framer, Three/Fiber Axios, MobX, Node.js",
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