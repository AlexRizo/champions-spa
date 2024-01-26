import { champions } from "../data/champions"

export const getChampionById = (id) => {
     return champions.find(champion => champion.id === parseInt(id));
}