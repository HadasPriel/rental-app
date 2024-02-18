<template>
  <table class="rental-table">
    <thead>
      <rental-headers v-for="tHead in tHeads" :key="tHead.txt" :tHead="tHead" />
    </thead>
    <tbody>
      <rental-row
        v-for="rental in rentals"
        :key="rental.recordid"
        :rental="rental"
        @removeRental="removeRental"
        @centerRental="centerRental"
      />
    </tbody>
  </table>
</template>

<script >
import { rentalService } from "@/services/rental.service";
import rentalRow from "./rental-row.vue";
import rentalHeaders from "./rental-headers.vue";
export default {
  props: ["rentals"],
  components: { rentalRow, rentalHeaders },
  methods: {
    removeRental(rentalId) {
      this.$emit("removeRental", rentalId);
    },
    centerRental(rentalCoor) {
      this.$emit("centerRental", rentalCoor);
    },
  },
  computed: {
    tHeads() {
      return rentalService.getFields();
    },
  },
};
</script>