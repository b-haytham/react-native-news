import { ArticaleType } from "./News"

export type BottomTabNavigationParamList = {
    Home: undefined
    Search: undefined
    Favourite: undefined
    Setting: undefined
}

export type StackNavigationParamList = {
    General: undefined
    Politics: undefined
    Business: undefined
    Tech: undefined
    Science: undefined
    Entertainment: undefined
    SinglePost: {
        article: ArticaleType
    }
}