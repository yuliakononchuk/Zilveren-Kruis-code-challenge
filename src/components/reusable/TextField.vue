<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label v-if="title.length" class="input__title">{{ title }}</label>
            <input
                :class="[
                    'input__field',
                    'form-control',
                    { 'is-invalid': !isValid }
                ]"
                type="text"
                @blur="handleBlur"
                @focus="handleFocus"
                @input="handleChange"
            />
        </div>
        <div
            v-if="!isValid"
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
        title: {
            type: String,
            default: ''
        },
        errorMessage: {
            type: String,
            default:
                'Helaas is de ingevoerde waarde niet geldig. Probeer het opnieuw.'
        },
        isValid: {
            type: Boolean,
            default: true
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
