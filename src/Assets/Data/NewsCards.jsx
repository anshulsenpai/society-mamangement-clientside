import img1 from "../Images/electricity.jpg"
import img2 from "../Images/solar-panel.jpg"
import img3 from "../Images/security-system.jpg"

import product1 from "../Images/cookies.jpg"
import product2 from "../Images/milk.jpg"
import product3 from "../Images/wheat-flour.jpg"




export const NEWSTYPE = {
    NEWS : 'news',
    PRODUCT : 'product'
}


export const NewsCards = [{
    id : 1,
    image : img1,
    title : "Nam massa lectus, ultricies nec nunc quis, ullamcorper tincidunt nisi.",
    desc : "",
    type : NEWSTYPE.NEWS
},
{
    id : 2,
    image : img2,
    title : "Integer commodo lorem turpis. Aenean tincidunt lorem vestibulum elit luctus.",
    desc : "",
    type : NEWSTYPE.NEWS
},{
    id : 3,
    image : img3,
    title : "augue gravida neque is sollici vitae nulla. Nulla ultricies vitae sapien porttitor blandit.",
    desc : "",
    type : NEWSTYPE.NEWS
}]


export const ProductsList = [{
    id : 1,
    image : product1,
    title : "Sweet Cookies",
    desc : "",
    price: 150,
    type : NEWSTYPE.PRODUCT
},
{
    id : 2,
    image : product2,
    title : "Cow Milk 1L",
    desc : "",
    price: 100,
    type : NEWSTYPE.PRODUCT
},{
    id : 3,
    image : product3,
    title : "Wheat flour fresh",
    desc : "",
    price: 120,
    type : NEWSTYPE.PRODUCT
}]