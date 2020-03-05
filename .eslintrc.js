module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'import/order': 'error',
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'react/jsx-indent': ['error', 4],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    },
};
