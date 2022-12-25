import React, {useState, useEffect} from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNews from "services/getNews";

import { INewsDetail } from "types/INewsDetail";

import './styles.scss';

const MainPage = () => {
    const [newsList, setNewsList] = useState<INewsDetail[]>([]);

    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return (
        <section className="mainPage">
            <PageTitle 
                title={
                    <h2>Always<br/>the latest <span>news</span></h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0,6)}/>}
        </section>
    )
}

export {routeMain};

export default MainPage;