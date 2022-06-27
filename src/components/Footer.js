import twitter from './../images/twitter-icon.png';
import facebook from './../images/facebook-icon.png';
import instagram from './../images/instagram-icon.png';
import linkedin from './../images/linkedin-icon.png';
import github from './../images/github-icon.png';
export default function Footer() {
  return (
    <div className='footer'>
      <img src={twitter} alt='logo' />
      <img src={facebook} alt='logo' />
      <img src={instagram} alt='logo' />
      <img src={linkedin} alt='logo' />
      <img src={github} alt='logo' />
    </div>
  );
}