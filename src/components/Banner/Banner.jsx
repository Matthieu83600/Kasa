import BannerImgHome from '../../assets/images/ImageHome.png'
import BannerImgAbout from '../../assets/images/ImageAbout.png'
import './Banner.scss'

function Banner({ page, content }) {
    const imageSrc = page === "home" ? BannerImgHome : BannerImgAbout
   
    return (
        <div className='banner-container'>
            <img src={imageSrc} alt="Paysage" />
            <div className='banner-content'>
                <p>{content}</p>
            </div>
        </div>
    )
    
}

export default Banner