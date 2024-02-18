<template  >
  <div ref="mapRef" style="width: 100%; height: 300px"></div>
</template>

<script setup >
import { ref, onMounted, computed, watch } from "vue";

import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Map, View } from "ol";
import { fromLonLat, transform } from "ol/proj";
import "ol/ol.css";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import { Vector as VectorSource } from "ol/source";

import { FullScreen, defaults as defaultControls } from "ol/control.js";

import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from "ol/interaction.js";

const props = defineProps({
  rentals: Object,
  mapCenter: Object,
});

const mapRef = ref(null);
var pointLayer = ref(null);

var map = ref(
  new Map({
    target: mapRef.value,
    controls: defaultControls().extend([new FullScreen()]),
    interactions: setInteractions(),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      setRentalPoints(),
    ],

    view: new View({
      center: fromLonLat(props.mapCenter),
      zoom: 13,
    }),
  })
);

onMounted(() => {
  map?.value.setTarget(mapRef.value);
});

watch(
  () => props.mapCenter,
  () => {
    console.log("hi! mapCenter changed");
    map.setView(
      new View({
        center: fromLonLat(props.mapCenter),
        zoom: 13,
      })
    );
  }
);

function setRentalPoints() {
  const pointSource = new VectorSource();
  const features = [];

  props.rentals.forEach((rental) => {
    var [lat, long] = rental.fields.geom.coordinates;
    const coords = fromLonLat([parseFloat(lat), parseFloat(long)]);
    features.push(
      new Feature({
        mass: 0,
        year: 0,
        geometry: new Point(coords),
      })
    );
  });
  pointSource.addFeatures(features);
  const rentalPoints = new VectorLayer({
    source: pointSource,
  });

  pointLayer = rentalPoints;
  return rentalPoints;
}

function setInteractions() {
  return defaultInteractions({
    doubleClickZoom: true,
    dragAndDrop: false,
    dragPan: false,
    keyboardPan: false,
    keyboardZoom: true,
    mouseWheelZoom: false,
    pointer: false,
    select: false,
  });
}
</script>

