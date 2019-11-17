<template>
  <div class="columns">
    <div class="column">
      <h4 v-if="title" class="title is-5 has-text-primary">{{title}}</h4>
      <p v-if="subtitle" class="subtitle is-6">{{subtitle}}</p>
    </div>
    <div class="column is-four-fifths">
      <p v-if="infoTitle">
        <strong>{{infoTitle}}</strong>
      </p>
      <p v-if="location" class="has-text-grey">
        <b-icon type="is-grey" icon="map-marker-alt" size="is-small" />
        {{location}}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLineElement',
  props: ['title', 'subtitle', 'infoTitle', 'location']
}
</script>