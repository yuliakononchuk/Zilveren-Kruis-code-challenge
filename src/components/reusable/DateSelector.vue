<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title"> {{ title }} </label>
            <input
                :value="value"
                :class="[
                    'input__field',
                    'form-control',
                    { 'is-invalid': hasError }
                ]"
                type="date"
                :min="minDate"
                :max="maxDate"
                @change="handleChange"
            />
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

<script lang="ts">
export default {
    name: 'DateSelector',
    props: {
        value: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        minDate: {
            type: String,
            default: ''
        },
        maxDate: {
            type: String,
            default: ''
        },
        errorMessage: {
            type: String,
            default: 'Kies een datum'
        },
        hasError: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChange(e: Event): void {
            const target = e.target as HTMLInputElement;
            this.$emit('dateChange', target.value);
        }
    }
};
</script>

<style lang="scss"></style>
