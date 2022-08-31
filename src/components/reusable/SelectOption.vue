<template>
    <option :checked="checked" :disabled="disabled" :hidden="hidden">
        {{ title }}
    </option>
</template>

<script>
export default {
    name: 'SelectOption',
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
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
