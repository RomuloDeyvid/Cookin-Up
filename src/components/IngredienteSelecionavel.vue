<script lang="ts">
import Tag from './Tag.vue';


export default {
    components: { Tag },
    props: {ingrediente: { type: String, required: true}},
    data(){
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar(){
            this.selecionado = !this.selecionado

            if(this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente)
            }
            else{
                this.$emit('removerIngrediente', this.ingrediente) 
                // Adicionando a função de remover os ingredientes da lista
            }
        }
    }, 
    emits: ['adicionarIngrediente', 'removerIngrediente']
    //Essa é uma boa prática quando se faz emissão de evento
}
</script>

<template>
    <button class="ingrediente" @click="aoClicar()" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
    
    
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>
