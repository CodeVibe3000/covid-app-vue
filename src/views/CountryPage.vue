<template>
  <ion-grid>
    <form @submit="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>Country: </ion-label>
          <ion-input name="zip" :value="country" @input="country = $event.target.value" placeholder="Enter Country"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button type="submit" color="primary" expand="block">Get Data</ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
export default {
  name: "CountryPage",
  data() {
    return {
      country: ""
    }
  },
  methods:{
    onSubmit(e) {
      e.preventDefault()
      this.$emit("get-data", this.country)
    }
  }
}
</script>

<style>

</style>