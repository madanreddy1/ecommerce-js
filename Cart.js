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

const cart = document.querySelector(".cart span");
const total_value=document.querySelector('.total span');
const cancel = document.getElementsByClassName('cancel');
const check = document.getElementById('out');


let store=[];

function cart_num()
{
    store=JSON.parse(localStorage.getItem('shop-data'));
    if (store == null)
    {
        store= [];
    }
    else
    {
        cart.innerHTML=store.length;
    }
}

export {cart_num};



function img()
{
    let d_temp="";
    let s_num=0;
    for(let j=0;j<store.length;j++)
    {
        for(let i=0;i<items.length;i++)
        {
            if(items[i].pic_id == store[j])
            {
                d_temp+=
                        `<div class="img_box">
                            <div class="img_sno">${s_num+1}.</div>
                            <div class="img_pname">${items[i].p_name}</div>
                            <img class="img_img" src=${items[i].pic}>
                            <div class="img_price">$${items[i].price}</div>
                            <div class="cancel">&#128473</div>
                        </div>`
                        
                        
                        s_num+=1;
            }

        }
    }
    document.getElementById("products").innerHTML=d_temp;

    for(let i=0;i<cancel.length;i++)
    {
        cancel[i].addEventListener('click',function(){delete_img(items[i].pic_id)});
    }
}
export {img};

function total_val()
{
    let total=[];
    let sum=0;

    for(let i=0;i<store.length;i++)
    {
        let get_store=store[i];
        total.push(items[get_store].price);
    }
    for(let i=0;i<total.length;i++)
    {
        sum+=total[i];
    }
    total_value.innerHTML=sum;
}
export{total_val};

function delete_img(n)
{
    store.splice(n,1);
    localStorage.setItem('shop-data',JSON.stringify(store));

    cart_num();
    img();
    total_val();
}

function checkout()
{
    store=[];
    localStorage.setItem('shop-data',JSON.stringify(store));
    cart_num();
    img();
    total_val();
}

check.addEventListener("click",checkout);

export{checkout};

