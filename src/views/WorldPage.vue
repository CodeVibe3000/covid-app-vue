<template>
    <div>
        <div class="ion-padding">
            <ion-button @click="sendToCountryPage">See Country Data</ion-button>
        </div>
        <CountryInfo v-bind:info="info" />
    </div>
</template>

<script>
import CountryInfo from '@/views/CountryInfo.vue'

export default {
    name:"WorldPage",
    components:{
        CountryInfo
    },
    data() {
        this.getData()
        return {
            info: ""
        }
    },
    methods:{
        async getData() {
            this.info = await (await fetch(`https://coronavirus-19-api.herokuapp.com/countries/world`)).json()
        },
        sendToCountryPage() {
            window.location.pathname = "/country"
        }
    },

}
</script>

<style>

</style>
