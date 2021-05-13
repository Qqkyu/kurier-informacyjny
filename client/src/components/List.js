import React from "react";

/* Miscellaneous */
import Article from "./Article";

const Index = () => {
    return (
        <div className="py-8 w-full">
            <div className="lg:flex items-center justify-center w-full">
                <Article
                    source="KrytykaPolityczna"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://krytykapolityczna.pl/"
                    position="left"
                />
                <Article
                    source="OkoPress"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://oko.press/"
                    position="right"
                />
            </div>
            <div className="lg:flex items-center justify-center w-full mt-7">
                <Article
                    source="PolsatNews"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://www.polsatnews.pl/"
                    position="left"
                />
                <Article
                    source="Interia"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://www.interia.pl/"
                    position="right"
                />
            </div>
            <div className="lg:flex items-center justify-center w-full mt-7">
                <Article
                    source="DoRzeczy"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://dorzeczy.pl/"
                    position="left"
                />
                <Article
                    source="Wprost"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://www.wprost.pl/"
                    position="right"
                />
            </div>
            <div className="lg:flex items-center justify-center w-full mt-7">
                <Article
                    source="Tvn24"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat libero, blandit vitae tempor at, venenatis eu eros. Proin at ipsum quam. Donec lobortis sodales erat, non ultrices dui interdum ac."
                    link="https://tvn24.pl/"
                    position="center"
                />
            </div>
        </div>
    );
};

export default Index;
