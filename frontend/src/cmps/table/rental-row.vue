<template>
  <tr class="rental-preview">
    <td>{{ rental.fields.businessoperator }}</td>
    <td>
      {{ rental.fields.street }} {{ rental.fields.streetnumber }},
      {{ rental.fields.geo_local_area }}
    </td>
    <td>{{ lat }}</td>
    <td class="no-padding">:</td>
    <td>{{ long }}</td>
    <td>{{ rental.fields.totalunits }}</td>
    <td>{{ rental.fields.totaloutstanding }}</td>
    <td><a :href="rental.fields.detailurl">More Info</a></td>
    <td>
      <button class="btn" @click="onCenterRental">Focus</button>
      <button class="btn danger" @click="onRemoveRental">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["rental"],
  methods: {
    onRemoveRental() {
      this.$emit("removeRental", this.rental.recordid);
    },
    onCenterRental() {
      this.$emit("centerRental", [this.lat, this.long]);
    },
  },
  computed: {
    lat() {
      return this.rental.fields.geom.coordinates[0];
    },
    long() {
      return this.rental.fields.geom.coordinates[1];
    },
  },
};
</script>

<style>
</style>