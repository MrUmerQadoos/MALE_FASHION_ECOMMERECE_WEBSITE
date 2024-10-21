import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './styles.module.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Contact() {

  return (
    <div>
      <Header />
      <Navbar />


      <div className={styles.breadCrumb}>
        <div className={styles.name}>Contact</div>
        <div className={styles.parent}>
          <a href="/">Home</a>
          <span className="fa-solid fa-chevron-right text-dark"></span>
          <span>Contact</span>
        </div>
      </div>


      <div className={`${styles.contactUs}`}>
      <div className={`${styles.map}`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26582.934903757145!2d73.14608101981642!3d33.60875873483329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1729517418184!5m2!1sen!2sus" 
        width="90%"
        height="450"


         style={{border:0}}
          allowFullScreen
       loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className={styles.contactSec}>
        <div className={styles.contactData}>
         <div className={styles.contact1}>
         <span>information</span>
         <h2>Get in Touch</h2>

          <p>As you might expect of a company that began as a high-end<br/> 
          interiors contractor, we pay strict attention.</p>
         </div>
         <div className={styles.contact2}>
         <h4>Pakistan</h4>
         <p>Gulberg Green Islamabad</p>
         <p>+92 3185562461</p>
         </div>
         <div className={styles.contact3}>
         <h4>America</h4>
         <p>109 Avenue Léon, 63 Clermont-Ferrand</p>
         <p>+12 345-423-9893</p>
         </div>
        </div>
        <div className={styles.form}>
          <div className={styles.form1}>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
          </div>
          <div className={styles.form2}>
            <input type="text" placeholder='Message' />
          </div>
          <button>Send Message</button>
        </div>
      </div>
      </div>



      <Footer/>
    </div>
  );
}

export default Contact;
