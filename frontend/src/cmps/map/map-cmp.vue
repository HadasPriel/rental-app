<template>
  <section class="rental-map-container">
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 400px"
    >
      <ol-view
        ref="view"
        :center="mapCenter"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />
      <ol-fullscreen-control />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <point-list :rentals="rentals" />

      <ol-vector-layer>
        <ol-source-vector>
          <!-- <ol-interaction-dragrotate /> -->
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </section>
</template>

<script >
import pointList from "./point-list.vue";

export default {
  components: { pointList },
  props: ["rentals", "mapCenter"],
  data() {
    return {
      projection: "EPSG:4326",
      zoom: 14,
      rotation: 0,
    };
  },
};
</script>


