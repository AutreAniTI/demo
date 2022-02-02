import Button from "../../components/Button/Button";

const PricingCard = ({
    price,
    title,
    details,
    product,
    label
}) => {
    return (
        <div
            className="pricing-card">
            <div
                className="price">
                <p>{price.amount}</p>
                <p>{price.detail}</p>
            </div>
            <p
                className="title">
                {title}
            </p>
            <div
                className="details">
                <p>
                    {details}
                </p>
            </div>
            <div 
            className="product">
            <p dangerouslySetInnerHTML = {{__html: product}}/>
            </div>
            <Button
                label={label}
            />
        </div>
    );
}

export default PricingCard;