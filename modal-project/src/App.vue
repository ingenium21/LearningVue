<template>
  <div>
    <h1>{{ title }}</h1>
    <teleport to=".modals" v-if="showModal"> 
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
    </teleport>
    <teleport to=".modals" v-if="showModal2">
      <Modal theme="easter" @close="toggleModal2">
        <template v-slot:links>
          <h1>Sign up for the Easter Egg Hunt</h1>
          <p>Win prizes and have fun</p>
        </template>
        <h1>Easter Givaway!</h1>
        <p>Grab your easter swag for half price!</p>
      </Modal>
    </teleport>
      <div>
        <button @click="toggleModal">Sign up</button>
        <button @click="toggleModal2">Easter</button>
      </div>
  </div>
</template>

<script>
import Modal from './components/MainModal.vue'
// challenge
// - create an extra button to open a different modal
// - use the same modal component but pass in a different template
// - use a different method (.e.g. toggleModal2) to open the modal and data (e.g. showModal2) to control the modal
export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      title: 'Welcome to My Vue.js App',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleModal2 () {
      this.showModal2 = !this.showModal2
    }
  }
}

</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
