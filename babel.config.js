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
        ],
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
    ],
    ignore: ['**/*.spec.ts', 'src/migrations/*', 'src/seeders/*']
};
