import React from "react";
import { Link } from "react-router-dom";

import DateView from "components/DateView";

import { INewsDetail } from "types/INewsDetail";

import './styles.scss';

interface INewsItemParams {
    item: INewsDetail;
}


const NewsItem: React.FC<INewsItemParams> = ({item }) => {
    return (
        <Link className="newsItem" to={"/newsDetail/" + item._id}>
            <div className="title">
                {item.title}
            </div>
            <div className="bottomWrapper">
                <p className="sourse">{item.clean_url}</p>
                <DateView value={item.published_date} />
            </div>
        </Link>
    )
}

export default NewsItem;