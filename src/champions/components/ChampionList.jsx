import PropTypes from 'prop-types';
import { ChampionCard } from './ChampionCard';
import { getChampionsByRegion } from '../helpers';
import { useMemo } from 'react';

export const ChampionList = ({ region }) => {
     const champions = useMemo(() => getChampionsByRegion(region), [region]);
     
     return (
     <div className='row rows-col-1 row-cols-md-3 g-3'>
          {
               champions.map(champion => (
                    <ChampionCard 
                         key={ champion.id }
                         { ...champion }
                    />
               ))
          }
     </div>
     )
}

ChampionList.propTypes = {
     region: PropTypes.string.isRequired,
};