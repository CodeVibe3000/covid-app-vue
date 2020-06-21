<template>
    <div>
        <div class="ion-padding">
            <ion-button @click="sendToWorld">See World Data</ion-button>
        </div>
        <CountryPage v-on:get-data="getData" />
        <CountryInfo v-bind:info="info" />
    </div>
</template>

<script>
import CountryPage from '@/views/CountryPage.vue'
import CountryInfo from '@/views/CountryInfo.vue'

export default {
    name:"CoutryPageContainer",
    components:{
        CountryPage,
        CountryInfo
    },
    data() {
        return {
            info: ""
        }
    },
    methods:{
        async getData(zip) {
            this.info = await (await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${zip}`)).json()
        },
        sendToWorld(){
            window.location.pathname = "/"
        }
    }

}
</script>

<style>

</style>