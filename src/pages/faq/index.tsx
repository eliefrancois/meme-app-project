import { Accordion } from "react-bootstrap";


const FAQ = () => {

    const faqs = [
        {
          id: 1,
          question: 'How often are new memes added to the collection?',
          answer: 'We add new memes to our collection regularly! You can visit our website anytime to discover fresh and hilarious memes to enjoy.'
        },
        {
          id: 2,
          question: 'Can I customize the text on the memes?',
          answer: 'Absolutely! While the memes come with default text, you have the option to customize the top and bottom text according to your preferences. Add your personal touch and make the meme even funnier!'
        },
        {
          id: 3,
          question: 'How do I download or share the memes?',
          answer: 'Downloading or sharing the memes is a breeze! Each meme comes with options to download it directly to your device or share it on various social media platforms. Spread the laughter with your friends and followers!'
        },
        {
          id: 4,
          question: 'How can I stay updated with new memes?',
          answer: 'You can visit our website regularly or subscribe to our newsletter to receive updates on the latest memes. Our newsletter is filled with fresh content, meme trends, and other fun surprises.'
        },
        {
          id: 5,
          question: 'Can I submit my own memes to be featured on your website?',
          answer: 'We love user contributions! While our collection is curated by our team, we appreciate the creativity of our users. Feel free to submit your memes, and if selected, they might be featured on our website for everyone to enjoy!'
        },
        {
          id: 6,
          question: 'Are the memes appropriate for all ages?',
          answer: 'We strive to provide a wide range of memes suitable for all ages. However, humor can be subjective, and some memes may contain references or humor that may be more suitable for mature audiences. We encourage users to exercise their judgment when sharing memes with younger audiences.'
        },
        {
          id: 7,
          question: 'How can I report an issue or provide feedback?',
          answer: 'Your feedback is valuable to us! If you encounter any issues, have suggestions, or want to report inappropriate content, please visit our Contact Us page or email us at feedback@example.com. We appreciate your input!'
        }
      ];
      

      
    return ( <>

    {faqs.map((faq, index) => (
        <Accordion key={index}>
            <Accordion.Item eventKey={faq?.id.toString()}>
                <Accordion.Header>{faq?.question}</Accordion.Header>
                <Accordion.Body>{faq?.answer}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    ))}
    
    
    </> );
}
 
export default FAQ;