module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/typedef": "error",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline"
        }],
        "semi": "error"
    }
};
