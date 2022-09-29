<template>
    <div class="form-group">
        <h3 v-if="title">{{ title }}</h3>
        <p v-if="subtitle">{{ subtitle }}</p>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FormGroup',
    props: {
        title: {
            type: String,
            required: false
        },
        subtitle: {
            type: String,
            required: false
        }
    }
};
</script>

<style lang="scss"></style>
