<script>
    import img1 from '$lib/img/logo.svg'
    import img2 from '$lib/img/icon-cart.svg'
    import img3 from '$lib/img/image-avatar.png'
    import img4 from '$lib/img/icon-delete.svg'
    import img5 from '$lib/img/image-product-1-thumbnail.jpg'
    import {count} from "../components/stores"
    $: sum = 125.00 * $count
    let rev = false
</script>

<div class="container flex flex-row mx-auto justify-between pr-10 pl-10 pt-10 relative">
    <div>
        <img src="{img1}" alt="">
    </div>
    <div class="md:flex md:flex-row space-x-5 text-gray-800 hidden">
        <a class="hover:border-b-4 hover:pb-10 hover:border-orange-500 hover:text-black" href="/">Collections</a>
        <a class="hover:border-b-4 hover:pb-10 hover:border-orange-500 hover:text-black" href="/">Men</a>
        <a class="hover:border-b-4 hover:pb-10 hover:border-orange-500 hover:text-black" href="/">Women</a>
        <a class="hover:border-b-4 hover:pb-10 hover:border-orange-500 hover:text-black" href="/">About</a>
        <a class="hover:border-b-4 hover:pb-10 hover:border-orange-500 hover:text-black" href="/">Contact</a>
    </div>
    <div class="flex flex-row space-x-5 p-5">
        <p><span>{$count}</span><img src="{img2}" alt="" width="30" height="30" class ="text-white cursor-pointer" on:click={()=>{rev = !rev}} on:keydown></p>
        <img src="{img3}" alt="" width="30" height="30" class="hover:border-2 rounded-full hover:border-orange-500 -p-5" >
    </div>
    {#if rev === true}
<div class="w-60 h-50 p-3 bg-white rounded-md z-50 shadow-2xl absolute -right-10 top-32">
    <p>Cart</p>
    <hr class="container w-full mx-auto pb-5">
    {#if $count > 0 }
    <div class="flex flex-row p-2 space-x-2">
        <img src="{img5}" alt="" width="40" height="40">
        <div class="flex flex-col">
            <small>fall limited edition sneaker</small>
            <div>
                <small>$125.00</small>
                <small>x</small>
                <small>{$count}</small>
                <small class="font-bold">${sum}</small>
                <small><img src="{img4}" alt="" width="10" height="10"></small>
            </div>
        </div>
    </div>
        
    {/if}
    <button class="bg-orange-500 rounded-md p-2 text-white w-full">Check Out</button>
</div>   
{/if}
</div>
<hr class="container w-full mx-auto pb-16">

