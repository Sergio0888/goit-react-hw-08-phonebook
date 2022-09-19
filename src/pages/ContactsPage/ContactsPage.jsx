import Form from 'pages/ContactsPage/Form/Form';
import Section from 'shared/components/Section/Section';
import Users from 'pages/ContactsPage/Users/Users';
import s from './contact-page.module.scss'

const ContactsPage = () => {
  return (
    <>
    <div className='container'>
      <div className={s.container}>
        <div>
          <Section title={'Phonebook'}>
            <Form />
          </Section>
        </div>
        <div>
          <Section title={'Contancts'}>
            <Users />
          </Section>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactsPage;
