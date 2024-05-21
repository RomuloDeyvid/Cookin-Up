<script lang="ts">
import Tag from './Tag.vue'

export default {
    components: { Tag },
    props: {ingrediente: { type: String, required: true}},
    data(){
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button>
        <Tag class="ingrediente" :texto="ingrediente" :ativa="selecionado" @click="selecionado = !selecionado" :aria-pressed="selecionado"/>
    </button>
    
    
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>
