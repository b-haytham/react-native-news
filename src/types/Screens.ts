import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationParamList, StackNavigationParamList } from "./NavigationParamLists";

// bottom tab navigation props

export type SettingsScreenNavigationProps = BottomTabNavigationProp<BottomTabNavigationParamList, 'Setting'>
export type SearchScreenNavigationProps = BottomTabNavigationProp<BottomTabNavigationParamList, 'Search'>
export type FavouriteScreenNavigationProps = BottomTabNavigationProp<BottomTabNavigationParamList, 'Favourite'>

//bottom tab route props

export type SettingsScreenRouteProps = RouteProp<BottomTabNavigationParamList, 'Setting'>
export type SearchScreenRouteProps = RouteProp<BottomTabNavigationParamList, 'Search'>
export type FavouriteScreenRouteProps = RouteProp<BottomTabNavigationParamList, 'Favourite'>

// stack navigation props

export type GeneralNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'General'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type PoliticsNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'Politics'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type BusinessNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'Business'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type TechNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'Tech'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type ScienceNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'Science'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type EntertainmentNewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'Entertainment'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
export type SingleNewsPostScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<StackNavigationParamList, 'SinglePost'>,
    BottomTabNavigationProp<BottomTabNavigationParamList>
>
// stack route props

export type GeneralNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'General'>
export type PoliticsNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'Politics'>
export type BusinessNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'Business'>
export type TechNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'Tech'>
export type ScienceNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'Science'>
export type EntertainmentNewsScreenRouteProps = RouteProp<StackNavigationParamList, 'Entertainment'>
export type SingleNewsPostScreenRouteProps = RouteProp<StackNavigationParamList, 'SinglePost'>
