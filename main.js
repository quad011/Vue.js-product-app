var app = new Vue({
	el: '#app',
	data: {
		brand: 'Vue Mastery',
		product: 'Socks',
		// description: 'Water resistant'
		selectedVariant: 0,
		// link: 'https://www.happysocks.com/'
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants:[
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: './img/socks-green.jpg',
				variantQuantity: 10,
				variantSale: 1
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: './img/socks-blue.png',
				variantQuantity: 0,
				variantSale: 0
			}
		],
		sizes: ["40", "41", "43", "44"],
		cart: 0,
		onSale: true
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		deleteFromCart() {
			this.cart -= 1
		},
		updateProduct(index) {
			this.selectedVariant = index
			console.log(index)
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		},
		sale() {
			if (this.onSale) {
	            return this.brand + ' ' + this.product + ' are on sale!'
	          } 
	            return  this.brand + ' ' + this.product + ' are not on sale'
		}
	}
})
