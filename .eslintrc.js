module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'react/jsx-indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    },
};
