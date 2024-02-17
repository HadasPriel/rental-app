<template>
  <section class="rental-map-container">
    <ol-map
      ref="mapRef"
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
        <ol-source-vector> </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </section>
</template>

<script setup >
import pointList from "./point-list.vue";
import DragRotate from "ol/interaction/DragRotate.js";
import { ref, onMounted } from "vue";
import { defaults as defaultInteractions } from "ol/interaction.js";

const props = defineProps({
  rentals: Object,
  mapCenter: Object,
});

const projection = ref("EPSG:4326");
const zoom = ref(14);
const rotation = ref(0);
const mapRef = ref(null);

onMounted(() => {
  console.log("DragRotate:", DragRotate);
  DragRotate.Interaction_default = null;
  mapRef.value.map.interactions = defaultInteractions({
    dragAndDrop: false,
    doubleClickZoom: true,
    dragPan: false,
    keyboardPan: false,
    keyboardZoom: false,
    mouseWheelZoom: true,
    pointer: false,
    select: false,
  });
});
</script>


