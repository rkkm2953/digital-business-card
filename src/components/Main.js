import email from './../images/mail-icon.png';

export default function Main() {
  return (
    <div>
      <div className='main'>
        <h2>Laura Smith</h2>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
        <div className='mail--btn'>
          <img src={email} alt='mail' />
          Email
        </div>
      </div>
      <div className='about-interests--container'>
        <div className='about'>
          <h3 className='h3--title'>About</h3>
          <p className='paragraph'>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className='interests'>
          <h3 className='h3--title'>Interests</h3>
          <p className='paragraph'>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}