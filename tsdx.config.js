const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;
module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                inject: true,
                extract: !!options.writeMeta,
            }),
            url(),
            svgr(),
        );
        return config;
    },
};
