<template>
  <ion-card v-if="info">
    <ion-card-header>
        <ion-card-subtitle>
            {{ info.country }}
        </ion-card-subtitle>
        <ion-card-title>
            Live Coronavirus Data
        </ion-card-title>
        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-label>
                        <strong>Cases: </strong>
                        {{ info.cases }} people
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <strong>Deaths: </strong>
                        {{ info.deaths }} people
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <strong>Recovered: </strong>
                        {{ info.recovered }} people
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card-header>
  </ion-card>
</template>

<script>
export default {
    name:"CountryInfo",
    props: ["info"]
}
</script>

<style>

</style>