<template>
  <span :title="date | humanFriendlyDate">{{ date | diffForHumans }}</span>
</template>
<script>
import moment from "moment";

export default {
  name: "AppDate",
  props: {
    date: {
      type: [String, Number],
      required: true
    }
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },

    diffForHumans(date) {
      return moment.unix(date).fromNow();
    }
  }
};
</script>

<style scoped></style>
