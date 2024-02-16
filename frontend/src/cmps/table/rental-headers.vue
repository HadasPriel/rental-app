<template>
  <th :colspan="tHead.span">{{ tHead.txt }}</th>
</template>

<script>
export default {
  props: ["tHead"],
  data() {
    return {};
  },
};
</script>



