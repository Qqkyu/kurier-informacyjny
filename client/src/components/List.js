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
                {/*
                <div className="lg:flex items-center justify-center w-full">
                    <Article
                        source="krytykapolityczna.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://krytykapolityczna.pl/"
                        position="left"
                    />
                    <Article
                        source="oko.press"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://oko.press/"
                        position="right"
                    />
                </div>
                <div className="lg:flex items-center justify-center w-full mt-7">
                    <Article
                        source="polsatnews.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://www.polsatnews.pl/"
                        position="left"
                    />
                    <Article
                        source="interia.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://www.interia.pl/"
                        position="right"
                    />
                </div>
                <div className="lg:flex items-center justify-center w-full mt-7">
                    <Article
                        source="dorzeczy.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://dorzeczy.pl/"
                        position="left"
                    />
                    <Article
                        source="wprost.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://www.wprost.pl/"
                        position="right"
                    />
                </div>
                <div className="lg:flex items-center justify-center w-full mt-7">
                    <Article
                        source="tvn24.pl"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                        link="https://tvn24.pl/"
                        position="center"
                    />
                </div>
            */}
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
    console.log(articlesArray, type);
    return articlesArray;
}

export default Index;
