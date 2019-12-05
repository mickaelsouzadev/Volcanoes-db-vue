<template>
    <section class="section">
        <div class="container">
            <div class="column" v-for="volcano in volcanoes" v-bind:key="volcano.id">
                <div class="card" >
                    <div class="card-header">
                        <p class="card-header-title">
                            {{ volcano.name }}
                        </p>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            {{ volcano.description }}
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">
                            Tipo:  <strong>{{ volcano.type.name }}</strong>
                        </p>
                    </div>      
                </div>
            </div>    
        </div>
    </section>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            volcanoes: [],
        }
    },
    async mounted() {
        await this.getVolcanoes()
    },
    methods: {
        async getVolcanoes() {
            try {
                let response = await axios.get('http://192.168.0.110:3000/volcanoes')
                this.volcanoes = response.data
            } catch(error) {
                console.error("Deu Ruim: ", error)
            }
        }
    }
}
</script>