<template>
    <section class="section">
        <div class="container">
            <div class="add-section">
                <button class="button is-fire is-rounded add-button" @click="launchAddVolcanoes">Adicionar Vulcão</button>
            </div>
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-quarter" v-for="volcano in volcanoes" v-bind:key="volcano.id">
                    <div class="card" >
                        <div class="card-header">
                            <p class="card-header-title">
                                {{ volcano.name }}
                            </p>
                        </div>
                        <div class="card-image">
                            <figure class="image is-4by3">
                                  <img :src="`/img/${volcano.img}`">
                            </figure>
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
        </div>
        <div class="modal" :class="active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Adicionar Vulcão</p>
                        <button class="delete" aria-label="close" @click="closeAddVolcanoes"></button>
                    </header>
                    <section class="modal-card-body is-large">
                         <article v-show="hasError" class="message is-danger">
                            <div class="message-header">
                                <p>Erro</p>
                                <button class="delete" aria-label="delete" @click="hasError = false"></button>
                            </div>
                            <div class="message-body">
                                {{ errorMessage }}
                            </div>
                        </article>
                        <div class="field">
                            <label class="label">Nome</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Nome" v-model="fields.name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Descrição</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Descrição" v-model="fields.description"></textarea>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Tipo</label>
                            <div class="control">
                                <div class="select">
                                    <select name="type" v-model="fields.type">
                                        <option value="">Selecione um tipo</option>
                                        <option v-for="type in types" v-bind:key="type.id" :value="type.id">{{ type.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" @click="addVolcano">Salvar</button>
                        <button class="button" @click="closeAddVolcanoes">Cancelar</button>
                    </footer>
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
            types: [],
            fields: {
                name: '',
                description: '',
                type: '',
            },
            active: '',
            hasError: false,
            error: ''
        }
    },
    async mounted() {
        await this.getVolcanoes()
        await this.getTypes()
    },
    methods: {
        async getVolcanoes() {
            try {
                let response = await axios.get('http://192.168.0.110:3000/volcanoes')
                this.volcanoes = response.data
            } catch(error) {
                console.error("Deu Ruim: ", error)
            }
        },

        async getTypes() {
            try {
                let response = await axios.get('http://192.168.0.110:3000/volcanoes-types')
                this.types = response.data
            } catch(error) {
                console.error("Deu Ruim: ", error)
            }
        },

        async addVolcano() {
            try {
                const qs = require('qs');
                let response = await axios.post('http://192.168.0.110:3000/volcanoes',  qs.stringify(this.fields))
                this.volcanoes.push(response.data[0])
                this.active = ''
                this.hasError = false
            } catch(error) {
                this.hasError = true
                this.errorMessage = error.response.data
                console.error("Não deu pra adicionar fera, olha ai: ", error.response)

            }
        },

        launchAddVolcanoes () {
            this.active = 'is-active'
        },

        closeAddVolcanoes() {
            this.active = ''
        }
    }
}
</script>

<style scoped>

    .add-section {
        padding: 1em;
    }

    .add-button {
       font-size: 1rem;
       padding: 0px 1.2rem 0px 1.2rem;
    }

</style>