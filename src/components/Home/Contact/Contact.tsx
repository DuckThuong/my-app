import { Divider } from "antd"
import './Contact.css'
import '../../components/Css/componet.css'

export const Contact = () => {
   return(
    <div>
          <section className="contact-us">
          <Divider orientation="left"><h2>Contact Us</h2></Divider>
          <p className="contact-text">
            If you have any questions or inquiries, feel free to contact us at example@example.com.
          </p>
        </section>
    </div>
   )
}