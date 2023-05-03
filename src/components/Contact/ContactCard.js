import './ContactCard.css';

function ContactCard({ id, icon, heading, text, link, link_text }) {
    return <div className="contact-card" id={id}>
        <i class={icon}></i>
        <h2>{heading}</h2>
        <p>{text}</p>
        <a href={link} target="_blank" rel="noreferrer">{link_text}</a>
    </div>
}

export default ContactCard;