module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
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
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'object-curly-newline': 'error',
        'react/jsx-indent': ['error', 4],
        'react/prop-types': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
    },
};
