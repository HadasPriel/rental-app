<template>
  <tr class="rental-add">
    <td>
      <input
        type="text"
        v-model="rentalToAdd.businessoperator"
        placeholder="Business operator"
      />
    </td>
    <td>
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
    </td>
    <td>
      <input
        type="number"
        class="lat"
        v-model="rentalToAdd.lat"
        placeholder="Latitude"
      />
    </td>
    <td>:</td>
    <td>
      <input
        type="number"
        class="long"
        v-model="rentalToAdd.long"
        placeholder="Longitude"
      />
    </td>
    <td>
      <input
        type="number"
        v-model="rentalToAdd.totalunits"
        placeholder="Units"
        class="units"
      />
    </td>
    <td>
      <input
        type="number"
        v-model="rentalToAdd.totaloutstanding"
        placeholder="Outstanding"
        class="outstanding"
      />
    </td>
    <td>
      <input
        type="text"
        v-model="rentalToAdd.detailurl"
        placeholder="Link about"
      />
    </td>
    <td>
      <button class="btn action" @click="onAddRental">Save</button>
    </td>
  </tr>
</template>

<script>
export default {
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
    onAddRental() {
      this.$emit("addRental", this.rentalToAdd);

      this.rentalToAdd = {
        businessoperator: "",
        street: "",
        streetnumber: "",
        geo_local_area: "",
        lat: null,
        long: null,
        totalunits: null,
        totaloutstanding: null,
        detailurl: "",
      };
    },
  },
};
</script>

<style>
</style>