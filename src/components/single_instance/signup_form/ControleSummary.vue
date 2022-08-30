<template>
    <section>
        <h2 class="mt-5">Controleren</h2>
        <form-group title="Gekozen pakket"> </form-group>
        <form-group title="Totaalpremie"> </form-group>
        <form-group title="Adres en contactgegevens"> </form-group>
    </section>
</template>

<script>
import FormGroup from '@/components/reusable/FormGroup.vue';

export default {
    name: 'ControleSummary',
    components: {
        FormGroup
    },
    computed: {}
};
</script>

<style lang="scss"></style>
