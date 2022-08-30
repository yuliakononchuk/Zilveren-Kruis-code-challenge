<template>
    <info-card header="We staan voor je klaar">
        <p class="mb-5">Twijfel je? Heb je een vraag?</p>
        <div class="phonenumber mb-2">
            <a href="tel:0900 040 03 09">
                <span class="sr-only"> Telefoonnummer </span>
                0900 040 03 09
            </a>
            <div class="popover__container ml-1">
                <button
                    id="info-phone"
                    type="button"
                    class="btn popover__btn btn--popover btn-none"
                >
                    <span class="sr-only"> Informatie weergeven </span>
                </button>
            </div>
        </div>
        <small> Open op maandag t/m vrijdag van 08:00 tot 17:00 </small>
    </info-card>
</template>

<script>
import InfoCard from '@/components/reusable/InfoCard.vue';

export default {
    name: 'ContactCard',
    components: {
        InfoCard
    }
};
</script>

<style lang="scss"></style>
