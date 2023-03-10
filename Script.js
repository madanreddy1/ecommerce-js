let items=[
    {pic_id:0,pic:"Images/3.webp",p_name:"SE-OYSTEER",p_d:"Oyster,36mm and green",price:1000},
    {pic_id:1,pic:"Images/2.webp",p_name:"SUBMARINER",p_d:"Oyster,46mm and green",price:2000},
    {pic_id:2,pic:"Images/3.webp",p_name:"AIR-KINNGG",p_d:"Oyster,46mm and green",price:4000},
    {pic_id:3,pic:"Images/4.webp",p_name:"OYSTEERR-I",p_d:"Oysteer,36mm and green",price:1000},
    {pic_id:4,pic:"Images/5.webp",p_name:"SUBMARINER-I",p_d:"Oyssteer,36mm and greeen",price:2000},
    {pic_id:5,pic:"Images/4.webp",p_name:"AIR-KING-I",p_d:"Oyster,36mm and green",price:4000},
    {pic_id:6,pic:"Images/7.webp",p_name:"OYSTER-II",p_d:"Oyster,16mm and green",price:1000},
    {pic_id:7,pic:"Images/6.webp",p_name:"SUBMARINER-II",p_d:"Oyyssterr,26mm and grreen",price:2000},
    {pic_id:8,pic:"Images/8.webp",p_name:"AIR-KING-II",p_d:"Oystter,16mm and green",price:4000},
];

const cart = document.querySelector('.header1 span')

function insert_img()
{
    temp="";
    for(let i=0;i<items.length;i++)
    {
        temp+=
        `<div class="main">
            <div class="card1">
                <img class="card-img" src=${items[i].pic}>
                <div class="card-body">
                <h1 class="card-title">${items[i].p_name}</h1>
                <p class="card-text">${items[i].p_d}</p>
                <h2 class="hc">$${items[i].price}</h2>
                <button class="add_cart">+ CART</button>
                </div>
            </div>
        </div>`
    }
    document.getElementById("content").innerHTML=temp;

    let store = [];
    function get_data()
    {
        store=JSON.parse(localStorage.getItem('shop-data'));
        if ( store == null)
        {
            store=[];

        }
        else
        {
            cart.innerHTML=store.length;
        }
    }
    get_data();

    function entering_data(n)
    {
        store_item = items[n].pic_id;
        store.push(store_item);

        localStorage.setItem('shop-data',JSON.stringify(store));
        get_data();
    }

    const element = document.getElementsByClassName("add_cart");

    for(let i=0;i<element.length;i++)
    {
        element[i].addEventListener('click',function(){entering_data(items[i].pic_id)});
    }
    
    
    
}

insert_img()