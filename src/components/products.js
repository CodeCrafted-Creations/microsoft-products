import * as React from 'react'; // Correct import for React
import './product.scss'; // Updated to match the .scss file name

const services = [
    {
        id: 1,
        title: 'Cloud solutions for Microsoft Azure',
        description: 'Connect your applications faster using Microsoft world-class suite of cloud services',
        link: 'https://50mbps.com/products/index.html',
        image: 'https://50mbps.com/wp-content/uploads/2023/08/service02.webp'
    },
    {
        id: 2,
        title: 'WhatsApp Business, Toll free Services and Bulk SMS.',
        description: 'Boost your productivity with our comprehensive suite of Digital Marketing Solutions',
        link: 'https://50mbps.com/products/index.html',
        image: 'https://50mbps.com/wp-content/uploads/2023/08/service03.webp'
    },
    {
        id: 3,
        title: 'Cloud solutions for Microsoft Azure',
        description: 'Secure your data with our top-notch security services',
        link: 'https://50mbps.com/products/index.html',
        image: 'https://50mbps.com/wp-content/uploads/2023/08/service01.webp'
    },
    {
        id: 4,
        title: 'Get Faster and Flexible with SD WAN',
        description: 'Enhance your business with our cutting-edge technology solutions.',
        link: 'https://50mbps.com/products/index.html',
        image: 'https://50mbps.com/wp-content/uploads/2023/08/service04.webp'
    },
];

const ServiceBox = ({ title, description, link, image }) => (
    <div className="mb-4 col-md-6 d-flex justify-content-center">
        <div className="product-service-box"> {/* Updated class name */}
            <div className="service-content-wrapper">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={image} alt={title} className="img-fluid" />
                        </div>
                        <div className="flip-card-back">
                            <div className="p-3 product-content"> {/* Updated class name */}
                                <h3><a href={link}>{title}</a></h3>
                                <p>{description}</p>
                                <button href={link} className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const App = () => (
    <section className="container py-5 product-banner"> {/* Updated class name */}
        <div className="mb-5 text-center">
            <span className="text-uppercase">Digital experience</span>
            <h2 className="split-in-right">Services We’re offering</h2>
        </div>
        <div className="row">
            {services.map(service => (
                <ServiceBox key={service.id} {...service} />
            ))}
        </div>
    </section>
);

export default App;
