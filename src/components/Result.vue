<template>
  <section class="card">
    <h2>{{ targetWord }}</h2>
    <h3>
      <span class="def_label">Def:&nbsp;&nbsp;</span>
      {{ targetDefinition }}
    </h3>
  </section>
</template>

<script>
export default {
  props: {
    targetWord: {
      type: String,
      required: true,
    },
    targetDefinition: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card {
  display: box;
  width: 400px;
  color: #fff;
  text-align: left;
}
.def_label {
  opacity: 70%;
  font-size: 0.9em;
}
</style>
