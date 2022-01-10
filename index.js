// back tot top

let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

// top nav menu

let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// food category

let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})

// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

// mobile nav

let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})

function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}
const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
//CART PAGE

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Jollof rice",
        tag: "jollofrice",
        price: 1000,
        inCart: 0
    },
    {
        name: "Fried rice",
        tag: "friedfrice",
        price: 1000,
        inCart: 0
    },
    {
        name: "Ofada rice",
        tag: "ofadarice",
        price: 1000,
        inCart: 0
    },
    {
        name: "Porridge",
        tag: "porridge",
        price: 1000,
        inCart: 0
    },
    {
        name: "Amala",
        tag: "amala",
        price: 500 ,
        inCart: 0
    },
    {
        name: "Fufu",
        tag: "fufu",
        price: 500,
        inCart: 0
    },
    {
        name: "Semo",
        tag: "semo",
        price: 500,
        inCart: 0
    },
    {
        name: "Pounded Yam",
        tag: "poundedyam",
        price: 500,
        inCart: 0
    },
    {
        name: "Beef",
        tag: "beef",
        price: 300,
        inCart: 0
    },
    {
        name: "Goat Meat",
        tag: "goatmeat",
        price: 300,
        inCart: 0
    },
    {
        name: "Ponmo",
        tag: "ponmo",
        price: 300,
        inCart: 0
    },
    {
        name: "Titus Fish",
        tag: "titusfish",
        price: 300,
        inCart: 0
    },
    {
        name: "Chicken",
        tag: "chicken",
        price: 300,
        inCart: 0
    },
    {
        name: "Turkey",
        tag: "turkey",
        price: 300,
        inCart: 0,
    },
    {
        name: "Offals",
        tag: "offals",
        price:  300,
        inCart: 0,
    }
];

    for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
    });
};

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-btn h3').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-btn h3').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-btn h3').textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    console.log("inside of setItems function");
    console.log("my product is", product);
}

onLoadCartNumbers();
