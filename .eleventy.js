module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/photos");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/script");

  return {
    dir: {
      input: "src",                                     
      output: "public",
    }
  }  
};
