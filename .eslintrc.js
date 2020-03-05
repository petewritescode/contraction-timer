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
                'newlines-between': 'always',
            }
        ],
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'react/jsx-indent': ['error', 4],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
    },
};
