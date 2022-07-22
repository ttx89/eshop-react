import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "admin",
            email: "admin@gmail.com",
            password: bcrypt.hashSync('admin'),
            isAdmin: true
        },
        {
            name: "test",
            email: "test@gmail.com",
            password: bcrypt.hashSync('test'),
            isAdmin: false
        },
    ],
    sliderItems: [
        {
            //_id:1,
            image:"/images/slider/1.jpg"
        },
        {
            //_id:2,
            image:"/images/slider/2.jpg"
        },
        {
            //_id:3,
            image:"/images/slider/3.jpg"
        },
    ],
    category: [
        {
            //_id:1,
            title:"shoe1",
            image:"/images/category/shoe1.png"
        },
        {
            //_id:2,
            title:"shoe2",
            image:"/images/category/shoe2.png"
        },
        {
            //_id:3,
            title:"shoe3",
            image:"/images/category/shoe3.png"
        },
    ],
 products: [
    {
        //_id:"1",
        title:"Product 1",
        slug: "product1",
        desc:"Descriptions for Product1",
        category:"shoe1",
        image:"/images/products/1.png",
        countInStock:0,
        price:"51.99",
    },
    {
        //_id:"2",
        title:"Product 2",
        slug: "product2",
        desc:"Descriptions for Product2",
        category:"shoe2",
        image:"/images/products/2.png",
        countInStock:31,
        price:"49.99",
    },
    {
        //_id:"3",
        title:"Product 3",
        slug: "product3",
        desc:"Descriptions for Product3",
        category:"shoe3",
        image:"/images/products/3.png",
        countInStock:13,
        price:"36.99",
    },
    {
        //_id:"4",
        title:"Product 4",
        slug: "product4",
        desc:"Descriptions for Product4",
        category:"shoe1",
        image:"/images/products/4.png",
        countInStock:2,
        price:"27.99", 
    }  
]  
}

export default data;