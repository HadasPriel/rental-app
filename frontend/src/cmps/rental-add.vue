<template>
  <form :class="`rental-add ${isAddShow ? 'open' : ''}`">
    <header class="add-rental-header">
      <h3>Add New Rental</h3>
      <button @click="onToggleIsAddShow" type="button">X</button>
    </header>

    <main>
      <input
        type="text"
        v-model="rentalToAdd.businessoperator"
        placeholder="Business operator"
      />

      <input type="text" v-model="rentalToAdd.street" placeholder="Street" />

      <input
        type="text"
        v-model="rentalToAdd.streetnumber"
        placeholder="Street number"
        class="street-number"
      />

      <input
        type="text"
        v-model="rentalToAdd.geo_local_area"
        placeholder="Area"
      />

      <input
        type="number"
        class="lat"
        v-model="rentalToAdd.lat"
        placeholder="Latitude"
      />

      <input
        type="number"
        class="long"
        v-model="rentalToAdd.long"
        placeholder="Longitude"
      />

      <input
        type="number"
        v-model="rentalToAdd.totalunits"
        placeholder="Units"
        class="units"
      />

      <input
        type="number"
        v-model="rentalToAdd.totaloutstanding"
        placeholder="Outstanding"
        class="outstanding"
      />

      <input
        type="text"
        v-model="rentalToAdd.detailurl"
        placeholder="Link about"
      />

      <button class="btn action" @click="onAddRental">Save</button>
    </main>
  </form>
</template>

<script>
export default {
  props: ["isAddShow"],
  data() {
    return {
      rentalToAdd: {
        businessoperator: "",
        street: "",
        streetnumber: "",
        geo_local_area: "",
        lat: null,
        long: null,
        totalunits: null,
        totaloutstanding: null,
        detailurl: "",
      },
    };
  },
  methods: {
    onAddRental(ev) {
      ev.preventDefault();
      this.$emit("addRental", this.rentalToAdd);
    },
    onToggleIsAddShow() {
      this.$emit("toggleIsAddShow");
    },
  },
};
</script>

<style>
</style>