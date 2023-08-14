import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import imagetext from '../photos/imageText.jpg'
import starbuck from '../../photos/starbuck.jpg'


const Card = () => {
    return (
        <article className="card flex gap-2 flow-2" style={{ color: '#334680' }}>
            <div className='flex' style={{ width: '5.625rem', height: '5.625rem', alignSelf: 'flexStart' }}>
                <img style={{ width: '100%', objectFit: 'cover' }} src={starbuck} alt="" className="src" />
            </div>
            <div>
                <h4>Kasito</h4>
                <p>Front-End Software Engineer</p>
                <div>
                    <p>Fulltime</p>
                    <div className='flex sp-btw gap-05 sp-btw' style={{ fontSize: '.75rem', color: '#B7BCCE' }}>
                        <p className='flex gap-05 algn-cen'><PublicIcon fontSize='small' /><span>New York</span></p>
                        <p className='flex gap-05 algn-cen'><AccessTimeIcon fontSize='small' /> <span>5 days ago</span></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card
