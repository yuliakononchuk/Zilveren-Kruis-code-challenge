<template>
    <div class="form-input my-4">
        <label id="aanmeldreden-label" class="input__title">
            {{ title }}
        </label>
        <div class="input__group">
            <select
                :disabled="disabled"
                class="form-control"
                @change="handleChange"
            >
                <select-option
                    v-if="placeholder.length"
                    value=""
                    :title="placeholder"
                    disabled
                    selected
                    hidden
                />
                <select-option
                    v-for="option in options"
                    :key="option.id"
                    :value="option.id"
                    :title="option.title"
                    :selected="option.selected"
                />
            </select>
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
