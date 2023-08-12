import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import bgImage from '../photos/backgroundImg.png';
import { Button } from '@mui/material';

const Search = () => {
    return (
        <div className="search flex jus-cent" style={{ backgroundImage: `url(${bgImage})`, minHeight: '8.625rem', color: 'grey', borderRadius: '10px', backgroundPosition: '-29rem -1rem' }}>
            <div className='flex algn-cen' style={{ position: 'relative', width: '90%' }}>
                <WorkOutlineIcon style={{ position: 'absolute', left: '.8rem' }} />
                <input type='text' style={{ height: '3.438rem', width: '100%', borderRadius: '9px', borderColor: 'transparent' }} placeholder='Title, companies, experti...' />
                <Button variant="contained" size="large" style={{ position: 'absolute', right: '.4rem', textTransform: 'capitalize' }}>Search</Button>
            </div>
        </div>
    )
}

export default Search
