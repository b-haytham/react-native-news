import { createSlice } from "@reduxjs/toolkit";
import { ArticaleType } from "../../types/News";
import { BUSINESS_NEWS, de_news, ENTERTAINMENT_NEWS, GENERAL_NEWS, news_ar, POLITICS_NEWS, SCIENCE_NEWS, TECH_NEWS } from "../../FAKE_DATA";


type InitialState = {
    loading: boolean
    error: string | null
    data: ArticaleType[] 
}

const initialState: InitialState = {
    loading: false,
    error: null,
    data: [
        ...BUSINESS_NEWS ,
        ...ENTERTAINMENT_NEWS,
        ...GENERAL_NEWS, 
        ...POLITICS_NEWS,
        ...SCIENCE_NEWS, 
        ...TECH_NEWS
    ]  as ArticaleType[]
}

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: initialState,
    reducers: {
      arabicNews(state) {
        state.data = [
            ...news_ar.data.businessNews,
            ...news_ar.data.entertainmentNews,
            ...news_ar.data.generalNews,
            ...news_ar.data.politicsNews,
            ...news_ar.data.scienceNews,
            ...news_ar.data.techNews,
        ] as ArticaleType[]
      },
      englishNews(state) {
        state.data = [
            ...BUSINESS_NEWS ,
            ...ENTERTAINMENT_NEWS,
            ...GENERAL_NEWS, 
            ...POLITICS_NEWS,
            ...SCIENCE_NEWS, 
            ...TECH_NEWS
        ]  as ArticaleType[]
      },
      deutschNews(state) {
        state.data = [
            ...de_news.data.businessNews,
            ...de_news.data.entertainmentNews,
            ...de_news.data.generalNews,
            ...de_news.data.politicsNews,
            ...de_news.data.scienceNews,
            ...de_news.data.techNews,
        ] as ArticaleType[]
      }
    } 
})

export const { arabicNews,deutschNews,englishNews } = newsSlice.actions

export default newsSlice.reducer