/**
 *@param {string} title
*@param {string} subtitle
*@return {string}
*/

const pageHeading = (title, subtitle) => {
return `
    <h2>${title}</h1>
        <p class="intro-text">${subtitle}</p>
    `;
};

module.exports = pageHeading;