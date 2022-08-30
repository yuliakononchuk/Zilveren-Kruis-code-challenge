<template>
    <div id="app" class="main-placeholder">
        <page-header />

        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>
                    <router-view></router-view>
                </div>
                <div class="col-4">
                    <contact-card />
                </div>
            </div>
        </div>

        <page-footer />
    </div>
</template>

<script>
import PageHeader from '@/components/single_instance/PageHeader.vue';
import PageFooter from '@/components/single_instance/PageFooter.vue';
import ContactCard from '@/components/single_instance/ContactCard.vue';
import options from '@/constants/options.js';

export default {
    name: 'App',
    components: {
        PageHeader,
        PageFooter,
        ContactCard
    },
    computed: {
        options() {
            return options;
        },
        dateToday() {
            const today = new Date();
            return today.toISOString().split('T')[0];
        }
    }
};
</script>

<style lang="scss"></style>
