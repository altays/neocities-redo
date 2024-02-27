/**
 *@param {string} status
*@param {string} reading
*@param {string} projects
*@return {string}
*/

const noteList = (status, reading, projects) => {
    return `
        <section>
        <h2>Now</h2>
        <p class="now-heading">Currently</p>
        <p class="now-text">${status}</p>
        <p class="now-heading">Reading</p>
        <p class="now-text">${reading}</p>
        <p class="now-heading">Working on</p>
        <p class="now-text">${projects}</p>
        </section>
        `;
    };
    
module.exports = noteList;