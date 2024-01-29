import { champions } from "../data/champions";

export const getChampionsByName = (name) => {
     name = name.toLowerCase().trim();
     
     if (name.length === 0) return [];
     
     return champions.filter(
          champion => champion.name.toLowerCase().includes(name)
     );
};