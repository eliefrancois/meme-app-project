import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";

export const Hero = () => {

    const notify = () => toast('Here is your toast.');

    return ( 
        <div className="container-fluid text-sm-center p-5 bg-light">
            <h1 className="display-2">MEMEADAY</h1>
            <p className="lead">Your daily source of laughter with AI-generated memes. Explore our collection of classic memes, purchase your favorites, and receive a hilarious meme delivered straight to your inbox every day. Join the meme-loving community and let the laughter begin!</p>
            <Button onClick={notify}>Notify !</Button> 
        </div>
      
      );
}
 