import React, {useEffect} from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

const MainPage = () => {
    const dispatch = useTypedDispatch();
    const newsList = useTypedSelector(selectList);

    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch])

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