import { champions } from "../data/champions";

export const getChampionsByRegion = (region) => {
     const validRegions = ['Noxus', 'Demacia'];
     
     if (!validRegions.includes(region)) {
          throw new Error(`Publisher "${region}" no existe`);
     };

     return champions.filter(champion => champion.region === region);
};