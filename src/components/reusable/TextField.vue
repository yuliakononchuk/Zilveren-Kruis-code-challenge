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

<script>
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
            validator(value) {
                return ['text', 'number'].includes(value);
            }
        }
    },
    methods: {
        handleBlur(e) {
            this.$emit('textFieldBlur', e.target.value);
        },
        handleFocus(e) {
            this.$emit('textFieldFocus', e.target.value);
        },
        handleChange(e) {
            this.$emit('textFieldChange', e.target.value);
        }
    }
};
</script>

<style lang="scss"></style>
