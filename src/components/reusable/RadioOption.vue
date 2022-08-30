<template>
    <div class="radio custom-radio radio__option">
        <input
            :id="id"
            :value="id"
            class="radio__input custom-control-input"
            type="radio"
            :name="name"
            @change="handleChange"
        />
        <label class="radio__label custom-control-label" :for="id">
            {{ value }}
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
        value: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
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
