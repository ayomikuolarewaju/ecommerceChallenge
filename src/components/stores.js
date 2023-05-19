import { writable } from "svelte/store";

export const count = writable(0)

export const product = writable({
    img:'$lib/img/image-product-1-thumbnail.jpg',
    price:125.00,
    name:'fall limited edition sneaker'
})