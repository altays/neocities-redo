/**
 *@param {string} title
*@param {string} subtitle
*@return {string}
*/

const pageHeading = (title, subtitle) => {
return `
    <h2>${title}</h1>
        <p>${subtitle}</p>
    `;
};

module.exports = pageHeading;