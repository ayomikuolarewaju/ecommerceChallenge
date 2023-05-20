<script>
  import {count} from '../components/stores'
  import Head from "../components/head.svelte";
  import img1 from '$lib/img/image-product-1.jpg'
  import img2 from '$lib/img/image-product-2.jpg'
  import img3 from '$lib/img/image-product-3.jpg'
  import img4 from '$lib/img/image-product-4.jpg'
  import img5 from '$lib/img/image-product-1-thumbnail.jpg'
  import img6 from '$lib/img/image-product-2-thumbnail.jpg'
  import img7 from '$lib/img/image-product-3-thumbnail.jpg'
  import img8 from '$lib/img/image-product-4-thumbnail.jpg'
  import img9 from '$lib/img/icon-plus.svg'
  import img10 from '$lib/img/icon-minus.svg'
  import img11 from '$lib/img/icon-cart.svg'
  import img12 from '$lib/img/icon-close.svg'
  import img13 from '$lib/img/icon-next.svg'
  import img14 from '$lib/img/icon-previous.svg'
  let img = [{id:1,im:img1},{id:2,im:img2},{id:3,im:img3},{id:4,im:img4}]
  let rev = false
  let deed = img1;
  let imgrev = img[0].im;
  let id = 0

  const incre =()=>{
    if($count === 10){
    return
   }else{
    $count++
   }
  }

  const decre =()=>{
    if($count === 0){
      return
    }else{
      $count--
    }
  }
  
  const imgs1 =()=>{
    if(id == 0){
      id++
      imgrev = img[id].im
      id = 1
      console.log(id)
    }else if(id == 1){
      id++
      imgrev = img[id].im
      id = 2
      console.log(id)
    }else if(id == 2){
      id++
      imgrev = img[id].im
      id = 3
      console.log(id)
    }else if(id == 3){
      imgrev = img[id].im
      id = 3
      console.log(id)
    }
  }

  const imgs2 =()=>{
    if(id == 0){
      return
    }else if(id == 1){
      id--
      id = 0
      imgrev = img[id].im
      console.log(id)
    }else if(id == 2){
      id--
      id = 1
      imgrev = img[id].im
      console.log(id)
    }else if(id == 3){
      id--
      id = 2
      imgrev = img[id].im
      console.log(id)
    } 
  }
  
</script>

<Head/>

<div class="container md:flex md:flex-row mx-auto pl-10 space-x-10 relative">

  <div class="flex flex-col w-full">
    <img src="{deed}" alt="" width="450" height="450" class="rounded-xl" on:dblclick={()=>{rev = !rev}}>
    <div class="md:flex md:flex-row space-x-5 pt-5 hidden">
      <img src="{img5}" alt="" width="100" height="100" class="rounded-xl hover:border-4 hover:border-orange-500" on:click={()=>{deed = img1}} on:keydown>
      <img src="{img6}" alt=""  width="100" height="100" class="rounded-xl hover:border-4 hover:border-orange-500" on:click={()=>{deed = img2}} on:keydown>
      <img src="{img7}" alt="" width="100" height="100" class="rounded-xl hover:border-4 hover:border-orange-500" on:click={()=>{deed = img3}} on:keydown>
      <img src="{img8}" alt="" width="100" height="100" class="rounded-xl hover:border-4 hover:border-orange-500" on:click={()=>{deed = img4}} on:keydown>
    </div>
  </div>

  <div class="flex flex-col pt-10 space-y-5 w-full">
    <h1 class="font-bold text-orange-500">SNEAKER COMPANY</h1>
    <h3 class="text-5xl capitalize font-bold">fall limited edition<br> sneaker</h3>
    <p class=" pb-5">
      These low-profile sneakers are your perfect casual wear
       companion. Featuring a durable rubber outter sole,they will
        withstand anything the weather throw at them
    </p>
    <div class="flex flex-row space-x-3">
      <h4 class="font-bold text-3xl">$125.00</h4>
      <p class="bg-orange-200 p-2 text-red-800 rounded-md">50%</p>
    </div>
    <p class="">$250.00</p>
    <div class="flex flex-row space-x-5 overflow-hidden">
      <div class="flex flex-row bg-gray-200 text-white rounded-lg md:w-1/3 w-1/3 md:items-center items-start md:mx-auto md:justify-around">
        <img src="{img9}" alt="" width="10" height="5" class="text-orange-400 cursor-pointer" on:click={incre} on:keydown>
        <p class="text-black p-2 rounded-md font-bold">{$count}</p>
        <img src="{img10}" alt="" width="10" height="5" class="text-orange-400 cursor-pointer" on:click={decre} on:keydown>
      </div>
      <div class="flex flex-row bg-orange-500 text-white rounded-lg  md:w-1/3 w-1/3 md:items-center items-start md:mx-auto md:justify-around">
        <p class = 'p-2'><span>{$count}</span><img src="{img11}" alt="" width="20" height="20" class ="text-white" ></p>
        <p>Add To Cart</p>
      </div>
    </div>
  </div>
  {#if rev === true}
    <div class="w-80 h-80 p-3 z-50 shadow-2xl absolute left-32 top-10">
      <img src="{img12}" alt="" width="5" height="5" class="w-10 h-10 relate top-5 rounded-full bg-white p-2 
      cursor-pointer left-10"on:click={()=>{rev = false}} on:keydown>
        <div class="flex flex-row space-x-2 w-full h-full mx-auto justify-around">
            <img src="{img13}" alt="" width="5" height="5" class="w-10 h-10 relative top-36 rounded-full bg-white p-2 
            cursor-pointer" on:click={()=>{imgs1()}} on:keydown>
            <img src="{imgrev}" alt="" width="50" height="50" class="w-full rounded-md">
            <img src="{img14}" alt="" width="5" height="5" class="w-10 h-10 relative top-36 rounded-full bg-white p-2
            cursor-pointer" on:click={()=>{imgs2()}} on:keydown>> 
        </div>
    </div>   
{/if}
</div>



