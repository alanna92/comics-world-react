module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', 'js'] },
        ],
    },
};
