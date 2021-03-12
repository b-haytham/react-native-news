
export type ArticaleType = {
    _id: string
    topic :'entertainment' | 'science' | 'tech' | 'business' | 'politics' | 'news' 
    //topic: string
    author: string | null
    title: string
    media: string | null
    published_date: string
    summary: string | null
    country: string
    clean_url: string
    link: string
    language: string
    media_content: string | null
    rights: string
    rank : string
    isInFavourite?: boolean

}


export type AllNews = {
    generalNews: ArticaleType[] | []
    politicsNews: ArticaleType[] | []
    businessNews: ArticaleType[] | []
    techNews: ArticaleType[] | []
    scienceNews: ArticaleType[] | []
    entertainmentNews: ArticaleType[] | []
}

type ApiResponseSuccess = {
    isOk: boolean
    data: AllNews
} 

type ApiResponseFailure = {
    isOK: boolean
    message: string
}


export type ApiResponseType = ApiResponseSuccess | ApiResponseFailure