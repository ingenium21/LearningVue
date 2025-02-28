<template>
    <div class="results">
        <h2>Your reaction time is {{ score }}ms</h2>
        <h3 class="rank">Your rank is {{ rank }}</h3>
        <button @click="$emit('restart')">Restart</button>
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            showResults: false,
            rank: null
        }
    },
    methods: {
        restartGame() {
            this.$emit('restart')
        }
    },
    mounted() {
        if (this.score < 200) {
            this.rank = 'Godlike'
        } else if (this.score < 300) {
            this.rank = 'Pro'
        } else if (this.score < 400) {
            this.rank = 'Average'
        } else {
            this.rank = 'Noob'
        }
    }
}

</script>

<style>
    .results {
        width: 400px;
        border-radius: 20px;
        background: white;
        color: #0faf87;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
    .rank {
        color: #0faf87;
    }
</style>