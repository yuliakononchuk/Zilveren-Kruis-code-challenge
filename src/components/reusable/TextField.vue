<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label v-if="title.length" class="input__title">{{ title }}</label>
            <input
                :class="[
                    'input__field',
                    'form-control',
                    { 'is-invalid': hasError }
                ]"
                :type="type"
                :value="value"
                @blur="handleBlur"
                @focus="handleFocus"
                @input="handleChange"
            />
        </div>
        <div
            v-if="hasError"
            class="input__feedback invalid-feedback mt-1"
            aria-live="polite"
        >
            <span>{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TextField',
    props: {
        value: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        errorMessage: {
            type: String,
            default: 'Dit veld is verplicht'
        },
        hasError: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text',
            validator(value: string): boolean {
                return ['text', 'number'].includes(value);
            }
        }
    },
    methods: {
        handleBlur(e: Event): void {
            const target = e.target as HTMLInputElement;
            this.$emit('textFieldBlur', target.value);
        },
        handleFocus(e: Event): void {
            const target = e.target as HTMLInputElement;
            this.$emit('textFieldFocus', target.value);
        },
        handleChange(e: Event): void {
            const target = e.target as HTMLInputElement;
            this.$emit('textFieldChange', target.value);
        }
    }
};
</script>

<style lang="scss"></style>
