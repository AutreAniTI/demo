import { PRICING } from "./pricingData";
import PricingCard from "./PricingCard";

const PricingContainer = () => {
    const list = PRICING.map((item, index) => (
        <PricingCard
            key={index}
            price={item.price}
            title={item.title}
            details={item.details}
            product={item.product}
            label={item.label}
        />
    ))

    return (
        <div
            className="pricing">
            <div className="container">
                <h3>Total Interaction Pricing</h3>
                <div
                    className="pricing-cards-container">
                    {list}
                </div>
            </div>
        </div>
    );
}

export default PricingContainer;