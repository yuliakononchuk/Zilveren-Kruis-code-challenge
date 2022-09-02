<template>
    <div class="form-input my-4">
        <label id="aanmeldreden-label" class="input__title">
            {{ title }}
        </label>
        <div class="input__group">
            <select
                :disabled="disabled"
                :class="['form-control', { 'is-invalid': hasError }]"
                @change="handleChange"
                :value="value"
            >
                <select-option
                    v-if="placeholder.length"
                    value=""
                    :title="placeholder"
                    disabled
                    hidden
                />
                <select-option
                    v-for="option in options"
                    :key="option.id"
                    :value="option.id"
                    :title="option.title"
                />
            </select>
            <div
                v-if="hasError"
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>{{ errorMessage }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import SelectOption from '@/components/reusable/SelectOption.vue';

export default {
    name: 'SimpleSelect',
    components: {
        SelectOption
    },
    props: {
        value: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Er is nog niets geselecteerd'
        },
        hasPlaceholder: {
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hasError: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: 'Kies een optie'
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('selectChange', e.target.value);
        }
    }
};
</script>

<style lang="scss"></style>
