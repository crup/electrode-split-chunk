module.exports = {
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: "vendor",
              chunks: "all"
            }
          }
        }
    }
  };
