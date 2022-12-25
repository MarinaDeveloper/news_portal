import React from "react";
import NewsItem from "./components/NewsList";

import { INewsDetail } from 'types/INewsDetail';

import './styles.scss';

interface INewsListParams {
    list: INewsDetail[];
}

const NewsList: React.FC<INewsListParams> = ({list}) => {
    return (
        <div className="newsList">
            {list.map((news: INewsDetail) => (
                <NewsItem key={news._id} item={news} />
            ))}
        </div>
    )
}

export default NewsList;
