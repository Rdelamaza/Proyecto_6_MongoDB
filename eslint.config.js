import js from '@eslint/js'

export default [
    
    js.configs.recommended,

    {

        files: [ '**/*.js'],
        ignores: ['node_modules', 'dist', 'public','eslint.config.js'],
        languageOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                globals: {
                    process: 'readonly',
                    console: 'readonly',
                    __dirname: 'readonly',
                }

            },
        rules: {
            indent: ['warn', 4],
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'no-undef': 'error',
            semi:['error', 'always'],
            'quotes': ['error', 'single'],
            'no-console': 'off',

            }
        },


    
]
    
