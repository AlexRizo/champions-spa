import PropTypes from 'prop-types';
import { getChampionsByRegion } from '../helpers';

export const ChampionList = ({ region }) => {
     const champions = getChampionsByRegion(region);
     
     return (
     <div className='row rows-col-1 row-cols-md-3 g-3'>
          {
               champions.map(champion => (
                    <li key={ champion.id }>
                         { champion.name }
                    </li>
               ))
          }
     </div>
     )
}

ChampionList.propTypes = {
     region: PropTypes.string.isRequired,
};