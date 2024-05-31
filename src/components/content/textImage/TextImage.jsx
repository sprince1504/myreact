import data from '../../../content.json';
import Button from "../button/Button";
import components from "../../../assets/components.png";

export default function TextImage() {
    return (
        <section class="text-image-section">
            <div class="container">
            <div class="text-content">
                    <h2>{data.content.heading}</h2>
                    <p>{data.content.description}</p>
                    <p>{data.content.description}</p>
                </div>
                <div class="image-content">
                    <img src={components} alt="Sample Image" />
                </div>
            </div>
            <Button buttonText="Click here"/>
        </section>
    );
}