<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title"> {{ title }} </label>
            <input
                :value="value"
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
