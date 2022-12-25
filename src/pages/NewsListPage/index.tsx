import React, {useState, useEffect} from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNews from "services/getNews";

import { INewsDetail } from "types/INewsDetail";

import './styles.scss';

const NewsListPage = () => {
    const [newsList, setNewsList] = useState<INewsDetail[]>([]);

    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return (
        <section className="newsListPage">
            <PageTitle 
                title={
                    <h2>Keep up<br/>to date <span>with events</span></h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}

export {routeMain};

export default NewsListPage;