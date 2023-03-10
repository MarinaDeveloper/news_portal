import React, {useEffect} from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

const NewsListPage = () => {
    const dispatch = useTypedDispatch();
    const newsList = useTypedSelector(selectList);

    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch])

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