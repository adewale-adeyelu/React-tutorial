import About2 from "./About-2";
import About3 from "./About-3";
import About1 from "./About-1";

const About = () => {
    return (  
        <div>
            <About1 />
            <About2 />
            <About3 />
            <p>
                In components About const is named according to the file which is still about, In pages the const will be named according to the folder name which will still be called about because we are dealing with about generally.
            </p>
        </div>
    );

    
}
 
export default About;