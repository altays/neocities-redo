/* .eleventy.js */
const Image = require("@11ty/eleventy-img");
const pageHeading = require("./src/_includes/shortcodes/pageHeading")
const currentDate = require("./src/_includes/shortcodes/currentDate");
const postDate = require("./src/_includes/shortcodes/postDate");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  
    eleventyConfig.addFilter("postDate",postDate);
    eleventyConfig.addShortcode("pageHeading",pageHeading);
    eleventyConfig.addShortcode("currentDate",currentDate);
  
    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };