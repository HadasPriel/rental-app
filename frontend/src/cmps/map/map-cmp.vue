<template  >
  <div
    ref="mapRef"
    style="width: 100%; height: 400px; margin-bottom: 30px"
  ></div>
</template>

<script >
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Map, View } from "ol";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import { Vector as VectorSource } from "ol/source";

import { FullScreen, defaults as defaultControls } from "ol/control.js";

import { defaults as defaultInteractions } from "ol/interaction.js";

export default {
  props: ["rentals", "mapCenter"],

  data() {
    return {
      map: new Map({
        target: this.$refs.mapRef,
        controls: defaultControls().extend([new FullScreen()]),
        interactions: this.setInteractions(),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          this.setRentalPoints(),
        ],

        view: new View({
          center: fromLonLat(this.mapCenter),
          zoom: 13,
        }),
      }),
    };
  },

  mounted() {
    this.map?.setTarget(this.$refs.mapRef);
  },

  methods: {
    setRentalPoints() {
      const pointSource = new VectorSource();

      const features = this.rentals.map((rental) => {
        var [lat, long] = rental.fields.geom.coordinates;
        const coords = fromLonLat([parseFloat(lat), parseFloat(long)]);
        return new Feature({
          mass: 0,
          year: 0,
          geometry: new Point(coords),
        });
      });

      pointSource.addFeatures(features);
      const rentalPoints = new VectorLayer({
        source: pointSource,
      });

      return rentalPoints;
    },

    setInteractions() {
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
    },
  },

  watch: {
    mapCenter: function () {
      this.map.setView(
        new View({
          center: fromLonLat(this.mapCenter),
          zoom: 13,
        })
      );
    },

    rentals: function () {
      this.map.setLayers([
        new TileLayer({
          source: new OSM(),
        }),
        this.setRentalPoints(),
      ]);
    },
  },
};
</script>

