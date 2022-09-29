<template>
    <div :class="['radio__tile', { 'radio__tile--choice': selected }]">
        <div v-if="badgeTitle.length" class="badge radio__tile-badge">
            {{ badgeTitle }}
        </div>
        <radio-option
            :id="id"
            :name="name"
            @optionChange="handleChange"
            :checked="checked"
        >
            <p class="radio__description">
                {{ title }}
            </p>
            <p class="radio__price">
                {{ price }}
            </p>
        </radio-option>
    </div>
</template>

<script lang="ts">
import RadioOption from '@/components/reusable/RadioOption.vue';

export default {
    name: 'RadioTile',
    components: {
        RadioOption
    },
    methods: {
        handleChange(value: string): void {
            this.$emit('radioTileChange', value);
        }
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        badgeTitle: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss"></style>
