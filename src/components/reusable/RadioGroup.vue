<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ title }}</label>
            <div class="form-row">
                <radio-option
                    v-for="option in options"
                    :key="option.id"
                    :id="option.id"
                    :name="name"
                    :checked="value === option.id"
                    @optionChange="handleChange"
                >
                    {{ option.title }}
                </radio-option>
            </div>
        </div>
    </div>
</template>

<script>
import RadioOption from '@/components/reusable/RadioOption.vue';

export default {
    name: 'RadioGroup',
    components: {
        RadioOption
    },
    props: {
        value: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('radioChange', value);
        }
    }
};
</script>

<style lang="scss"></style>
