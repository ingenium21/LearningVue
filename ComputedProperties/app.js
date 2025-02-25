const app = Vue.createApp({
    // template: '<h2> I am the template </h2>'
    data () {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
});

app.mount('#app'); //mounts the app to the div with id app
