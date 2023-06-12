module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@models': './src/models',
                    '@config': './src/config',
                    '@controllers': './src/controllers',
                    '@routes': './src/routes',
                    '@middlewares': './src/middlewares',
                    '@interfaces': './src/interfaces',
                    '@helpers': './src/helpers',
                    '@enums': './src/enums',
                    '@api': './src/api',
                    '@data': './src/data',
                    '@utils': './src/utils'
                }
            }
        ]
    ],
    ignore: ['**/*.spec.ts', 'src/migrations/*', 'src/seeders/*', 'moment-random.d.ts']
};
