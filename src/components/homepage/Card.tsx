import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import imagetext from '../photos/imageText.jpg'
import starbuck from '../../photos/starbuck.jpg'
import { timeConverter } from '../../utility/timeConverter';

const Card = ({companyLogo,companyName,title,minSalary,locationRestrictions,pubDate}) => {



    return (
        <article className="card flex gap-2 flow-2" style={{ color: '#334680' }}>
            <div className='flex' style={{ width: '5.625rem', height: '5.625rem', alignSelf: 'flexStart' }}>
                <img style={{ width: '100%', objectFit: 'cover' }} src={companyLogo} alt="" className="src" />
            </div>
            <div>
                <h4>{companyName}</h4>
                <p>{title}</p>
                <div>
                    <p>{minSalary || "Full time"}</p>
                    <div className='flex sp-btw gap-05 sp-btw' style={{ fontSize: '.75rem', color: '#B7BCCE' }}>
                        <p className='flex gap-05 algn-cen'><PublicIcon fontSize='small' /><span>{locationRestrictions[0]}</span></p>
                        <p className='flex gap-05 algn-cen'><AccessTimeIcon fontSize='small' /> <span>{`${timeConverter(pubDate)} days ago`}</span></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card
