<template>
    <div class="card card--filled-secondary h-auto">
        <div class="card-body">
            <div class="sf-contactblok-content">
                <h3 v-if="header.length" class="mb-2">{{ header }}</h3>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InfoCard',
    props: {
        header: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss"></style>
