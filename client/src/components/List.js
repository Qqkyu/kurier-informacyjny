import React from "react";

/* Miscellaneous */
import Article from "./Article";
import SourcesContext from "../SourcesContext";

function Index({ type }) {
    return (
        <div className="py-8 w-full">
            <SourcesContext.Consumer>
                {(value) => {
                    const articles = getArticlesArray(value, type);
                    let prevArticle;

                    return articles.map((article, i) => {
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
                    });
                }}
            </SourcesContext.Consumer>
        </div>
    );
}

function getArticlesArray(articles, type) {
    var articlesArray = [];
    for (const source in articles) {
        if (articles[source]["type"] === type) {
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
    return articlesArray;
}

export default Index;
