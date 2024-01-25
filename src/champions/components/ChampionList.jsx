import PropTypes from 'prop-types';
import { ChampionCard } from './ChampionCard';
import { getChampionsByRegion } from '../helpers';

export const ChampionList = ({ region }) => {
     const champions = getChampionsByRegion(region);
     
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