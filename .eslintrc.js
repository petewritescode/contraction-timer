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
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: [
                    'builtin',
                    'external',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'never',
            }
        ],
        'import/prefer-default-export': 'off',
        'max-len': ['error', { code: 140 }],
        'no-confusing-arrow': 'off',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'object-curly-newline': ['error', { consistent: true }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
    },
};
