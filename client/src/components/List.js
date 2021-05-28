/* React */
import React, { useContext } from "react";

/* Miscellaneous */
import Article from "./Article";
import SourcesContext from "../SourcesContext";

/* Utils */
import { getArticlesArray } from "../utils/Articles";

/**
 *
 * @param {string} type - "Lewica", "Centrum" or "Prawica"
 */
function Index({ type }) {
    const { sources } = useContext(SourcesContext);

    const articles = getArticlesArray(sources, type);
    let prevArticle;

    return (
        <div className="py-8 w-full">
            {articles.map((article, i) => {
                if (i % 2 === 1) {
                    return (
                        <div
                            className={
                                i === 1
                                    ? "lg:flex items-center justify-center w-full"
                                    : "lg:flex items-center justify-center w-full mt-7"
                            }
                        >
                            <Article
                                source={prevArticle["name"]}
                                title={prevArticle["title"]}
                                link={prevArticle["link"]}
                                sourceLink={`https://${prevArticle["name"]}/`}
                            />
                            <Article
                                source={article["name"]}
                                title={article["title"]}
                                link={article["link"]}
                                sourceLink={`https://${article["name"]}/`}
                            />
                        </div>
                    );
                } else {
                    prevArticle = article;
                    return <></>;
                }
            })}
        </div>
    );
}

export default Index;
