const app = Vue.createApp({
    // template: '<h2> I am the template </h2>'
    data () {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: '45',
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
});

app.mount('#app'); //mounts the app to the div with id app
