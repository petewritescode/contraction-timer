module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        'comma-dangle': ['error',  {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'max-len': ['error', { code: 140 }],
        'no-confusing-arrow': 'off',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': ['error', { 'props': false }],
        'object-curly-newline': ['error', { consistent: true }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'sort-imports': ['error', {
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'multiple', 'single', 'all']
        }],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
    },
};
