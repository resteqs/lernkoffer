module.exports = {
    plugins: ["@typescript-eslint", "eslint-comments", "jest", "promise", "unicorn"],
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jest/recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        "no-prototype-builtins": "off",
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        "import/prefer-default-export": "off",
        "import/no-default-export": "warn",
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/destructuring-assignment": "off",
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        "react/jsx-filename-extension": "off",
        // Use function hoisting to improve code readability
        "no-use-before-define": "off",
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        // Common abbreviations are known and readable
        "unicorn/prevent-abbreviations": "off",
        "@typescript-eslint/naming-convention": "off",
        "import/no-useless-path-segments": "off",
        "unicorn/filename-case": [
            "warn",
            {
                cases: {
                    pascalCase: true,
                    camelCase: true,
                },
            },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "promise/no-return-wrap": "off",
        "no-console": "off",
        "jsx-a11y/label-has-associated-control": [
            "warn",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        "no-plusplus": "off",
        "unicorn/no-null": "off",
        "import/no-cycle": "off",
        "import/order": "warn",
        "react/static-property-placement": "off",
        "unicorn/prefer-query-selector": "off",
    },
};
