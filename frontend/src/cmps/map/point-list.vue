<template>
  <ol-vector-layer>
    <ol-source-vector>
      <ol-feature>
        <ol-geom-multi-point :coordinates="coordinates"></ol-geom-multi-point>
        <ol-style>
          <ol-style-circle :radius="radius">
            <ol-style-fill :color="fillColor"></ol-style-fill>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
          </ol-style-circle>
        </ol-style>
      </ol-feature>
    </ol-source-vector>
  </ol-vector-layer>
</template>

<script >
export default {
  props: ["rentals"],
  data() {
    return {
      radius: 5,
      strokeWidth: 2,
      strokeColor: "red",
      fillColor: "white",
    };
  },
  computed: {
    coordinates() {
      return this.rentals.map((rental) => {
        return [
          rental.fields.geom.coordinates[0],
          rental.fields.geom.coordinates[1],
        ];
      });
    },
  },
};
</script>


