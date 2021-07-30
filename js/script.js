console.log(Vue);
const app = new Vue({
    el: "#app",
    data: {
        images: [
            "img/image1.jpg",
            "img/image2.jpg",
            "img/image3.jpg",
            "img/image4.jpg",
        ],
        currentIndex: 0,
    },
    methods: {
        isActive(i){
            return this.currentIndex == i ? "active" : "";
        },
        increaseIndex(){
            this.currentIndex === this.images.length-1 ? this.currentIndex = 0 : this.currentIndex++
        },
        decreaseIndex(){
            this.currentIndex === 0 ? this.currentIndex = this.images.length-1 : this.currentIndex--

        },
    }
});