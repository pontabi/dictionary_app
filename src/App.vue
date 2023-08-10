<template>
  <Search @get-data-from-search="getData" />
  <Result :target-word="targetWord" :target-defs="targetDefs" />
</template>

<script>
export default {
  data() {
    return {
      targetWord: null,
      targetDefs: null,
    };
  },
  methods: {
    getData(data) {
      this.targetWord = data[0].word;
      this.targetDefs = data[0].meanings[0].definitions;
    },
  },
};
</script>

<style></style>
