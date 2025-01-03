import sm from './assets/pink.jpg';
import './About.css'; 
import secim from './assets/craftgirl.jpg';
const About = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
        <div className="about-content">
          <h2>My Story</h2>
          <p style={{textAlign:'justify'}}>Ennangal Vannangalaka is more than just a website;
            it's a reflection of my lifelong passion for crafting
            and creativity. My journey as a solo entrepreneur began
            with a simple dream: to create a space where I could share my
            love for craftsmanship and connect with fellow enthusiasts
            who appreciate the beauty of handmade goods.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-image">
          <img src={sm} alt="about" width='350px' height='500px' style={{borderRadius:'6px'}}/>
        </div>
      </div>
    </div>
    <div>
    <div className="row">
    <div className="col-md-5">
    <div className="about-image" style={{ position: 'relative', marginLeft: '100px' }}>
  <img 
    src={secim} 
    alt="about" 
    width="350px" 
    height="500px" 
    style={{ borderRadius: '6px' }} 
  />
  <div 
    className="overlay-text" 
    style={{
      position: 'absolute',
      top: '40%',
      left: '44%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      width: '90%', /* Adjust width to prevent text from overflowing */
      textAlign: 'justify',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      textAlignLast: 'center', /* Optional: Center-align the last line */
    }}
  >
    "Crafting Dreams into Reality"<br/>
    Empowering artisans to weave <br/>their magic into every creation
  </div>
  </div>

      </div>
      <div className="col-md-7">
        <div className="about-content" >
          <h2 style={{color: '#00764e'}}>Empowering Creativity</h2>
          <p style={{textAlign: 'justify',color:'#845057'}}>Ennangal Vannangalaka isn't just about selling crafts; 
            it's about inspiring others to embrace their creative instincts. 
            By celebrating the intricacies of handmade goods, I hope to motivate
             fellow artisans to share their talents and craft their stories. 
             Together, we can create a world that cherishes individuality and values 
             creativity as a force for connection and change.
          </p>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <center>
    <table 
  className="bg-image" 
  border="1px" 
  width="700" 
  height="400" 
  style={{ 
    backgroundImage: "url('https://img.freepik.com/free-photo/pretty-flowers-waffle-cone_23-2147766645.jpg?size=626&ext=jpg&ga=GA1.1.2008645636.1676467708&semt=ais')", 
    backgroundSize: '100% 100%', 
    backgroundRepeat: 'no-repeat' 
  }}
>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <br/>
      <h1 
        style={{ 
          fontFamily: 'sans-serif', 
          fontSize: '30px', 
          textAlign: 'center',
          fontWeight:'bold'
        }}
      >
        Growth Through Passion
      </h1>
    </td>
  </tr>
  <tr>
    <td 
      style={{ 
        fontSize: '18px', 
        width: '50%', 
        padding: '20px', /* Adds spacing around text */
      }}
    >
      <p 
        style={{ 
          textAlign: 'right', /* Aligns the paragraph text to the right */
          maxWidth: '70%', /* Limits the width of the paragraph */
          marginLeft: 'auto', /* Pushes the content to the right */
          marginRight: '0', 
          fontWeight: 'bold',
          textAlign:'justify'
        }}
      >
        What started as a humble endeavor has blossomed 
        into a vibrant platform that bridges creators and
        admirers of handmade crafts. Each product represents
        hours of dedication, imagination, and a commitment
        to preserving the essence of handcrafted artistry.
        My growth as a crafter and entrepreneur is a testament 
        to the beauty of pursuing one’s passion and the incredible 
        support from a community that values uniqueness.
      </p>
    </td>
  </tr>
</table>

            <br/><br/>
          </center>
    </div>
    </>
  );
}

export default About;
