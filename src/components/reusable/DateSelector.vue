<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title"> {{ title }} </label>
            <input
                class="input__field form-control"
                type="date"
                :min="minDate"
                :max="maxDate"
                @change="handleChange"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DateSelector',
    props: {
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
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('dateChange', e.target.value);
        }
    }
};
</script>

<style lang="scss"></style>
