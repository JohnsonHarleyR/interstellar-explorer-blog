
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("footer", function(year, author) {
    return `
    <footer>
      <img class="logo" alt="ufo" src="/images/ufo.png" />
      <p class="copyright">© ${year} ${author}</p>
    </footer>
    `;
  });
};