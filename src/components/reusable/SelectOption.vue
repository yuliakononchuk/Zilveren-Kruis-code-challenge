<template>
    <option
        :value="value"
        :selected="selected"
        :disabled="disabled"
        :hidden="hidden"
    >
        {{ title }}
    </option>
</template>

<script>
export default {
    name: 'SelectOption',
    props: {
        value: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hidden: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss"></style>
