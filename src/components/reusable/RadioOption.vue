<template>
    <div class="radio custom-radio radio__option">
        <input
            :id="id"
            :value="id"
            :checked="checked"
            class="radio__input custom-control-input"
            type="radio"
            :name="name"
            @change="handleChange"
        />
        <label class="radio__label custom-control-label" :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioOption',
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('optionChange', e.target.value);
        }
    }
};
</script>

<style lang="scss"></style>
