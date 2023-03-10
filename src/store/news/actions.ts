import {Dispatch} from 'redux';

import getNews from 'services/getNews';

import { IStore } from './types';

export const setNewsActions = (list: IStore['list']) => {
    return {
        type: 'news/setNews',
        payload: list,
    }
}

export const loadNews = () => async (dispatch: Dispatch) => {
    try {
        const response = await getNews();
        dispatch(setNewsActions(response.data.articles))
    } catch(e) {
        alert('An error has occurred');
    }
}