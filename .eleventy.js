module.exports = function(eleventyConfig) {
    // Output directory: _site

    eleventyConfig.addPassthroughCopy("./src/images");

    return {
        dir: { input: 'src', output: '_site' }
    };
};