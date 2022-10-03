module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended',
        '@vue/typescript'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'vue/no-template-target-blank': 2,
        'vue/padding-line-between-blocks': 2,
        'vue/prefer-template': 2,
        'prettier/prettier': 1,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['warn', 4]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
