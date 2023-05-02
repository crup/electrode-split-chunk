const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (composer, options, compose) => {
    const config = compose();
    config.output = {
        ...config.output
    };

    config.plugins = [
        ...config.plugins,
        // new BundleAnalyzerPlugin()
    ]
    config.optimization = {
        splitChunks: {
            cacheGroups: {
                nodeVendors: {
                    name: "nodeVendors",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    priority: 1
                }
            }
        }
    };


    return config;
};

