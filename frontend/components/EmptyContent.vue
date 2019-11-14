<template>
  <div class="is-empty has-text-grey has-text-centered">
    <p>
      <b-icon
        icon="emoticon-sad"
        size="is-large">
      </b-icon>
    </p>

    <p>Não há {{ emptyType }} cadastrados ainda.</p>
  </div>
</template>

<script>
export default {
  props: {
    emptyType: String
  }
}
</script>