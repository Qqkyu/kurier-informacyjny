/**
 *
 * @param {object} articles
 * @param {string} type
 * @returns {array} - Array of objects with source's name, link and title that match the passed-in type.
 */
export function getArticlesArray(articles, type) {
    var articlesArray = [];
    /* Iterate over sources in articles object */
    for (const source in articles) {
        /* Only add articles from sources that match passed-in type */
        if (articles[source]["type"] === type) {
            /* Iterate over articles from current source and add them to articlesArray */
            articles[source]["articles"].forEach((article) => {
                const articleObject = {
                    name: articles[source]["name"],
                    link: article["link"],
                    title: article["title"],
                };
                articlesArray.push(articleObject);
            });
        }
    }
    /* Shuffle articlesArray */
    return articlesArray.sort(() => Math.random() - 0.5);
}
