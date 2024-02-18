<template>
  <section>
    <rental-add
      @addRental="addRental"
      :isAddShow="isAddShow"
      @toggleIsAddShow="toggleIsAddShow"
    />
    <div class="rentals-title-container flex align-center">
      <h2 class="rentals-title">Rentals</h2>
      <button class="add-btn btn action" @click="toggleIsAddShow">
        Add Rental
      </button>
    </div>
    <rental-table
      :rentals="rentals"
      @removeRental="removeRental"
      @centerRental="centerRental"
    />
    <map-cmp :rentals="rentals" :mapCenter="mapCenter" />
  </section>
</template>

<script>
import { rentalService } from "../services/rental.service.js";

import rentalTable from "@/cmps/table/rental-table.vue";
import rentalAdd from "@/cmps/rental-add.vue";
import mapCmp from "@/cmps/map/map-cmp.vue";

export default {
  components: { mapCmp, rentalTable, rentalAdd },

  data() {
    return {
      rentals: [],
      mapCenter: [-123.10664756, 49.28],
      isAddShow: false,
    };
  },

  async created() {
    this.rentals = await rentalService.query();
  },
  methods: {
    async removeRental(rentalId) {
      try {
        await rentalService.remove(rentalId);
        this.rentals = this.rentals.filter(
          (rental) => rental.recordid !== rentalId
        );
      } catch (err) {
        console.log("err:", err);
      }
    },

    async addRental(rentalToAdd) {
      try {
        var rental = await rentalService.add(rentalToAdd);
        this.rentals.push(rental);
        this.rentals = JSON.parse(JSON.stringify(this.rentals));
        this.mapCenter = rental.fields.geom.coordinates;
        this.toggleIsAddShow();
      } catch (err) {
        console.log("err:", err);
      }
    },

    centerRental(rentalCoor) {
      this.mapCenter = rentalCoor;
    },

    toggleIsAddShow() {
      this.isAddShow = !this.isAddShow;
    },
  },
};
</script>
