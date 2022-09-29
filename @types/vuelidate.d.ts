import { Validation, ValidationRule, ValidationRuleCollection } from "@vuelidate/core";

declare module 'vue/types/options' {
    type RuleDecl = Record<string, ValidationRule | ValidationRuleCollection>;

    interface ComponentOptions<V extends Vue$1> {
        validations?: RuleDecl | (() => RuleDecl);
    }
}

declare module 'vue/types/vue' {
    type ValidationProperties<V> = {
        [P in Exclude<keyof V, '$v'>]?: Validation & ValidationProperties<V[P]> & ValidationEvaluation
    }

    interface ValidationGroups {
        [groupName: string]: Validation & ValidationProperties<any>;
    }

    interface ValidationEvaluation {
        [ruleName: string]: boolean;
    }

    interface Vue {
        $v: ValidationProperties<Vue> & ValidationGroups & Validation;
    }
}
