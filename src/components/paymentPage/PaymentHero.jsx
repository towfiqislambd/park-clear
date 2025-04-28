import Container from "../container/Container";
import paymentImage from "../../assets/images/payment.png"

const PaymentHero = () => {
  return (
    <section className="pt-12 pb-[208px]">
      <Container>
        <div className="grid grid-cols-2 gap-[163px]">
          <div>
            <div>
              <p className="title--sm">Secure and Transparent Transactions</p>
              <h1 className="title--xxl">Payment</h1>
              <p className="mt-6 text-text-gray">
                Our payment page ensures that all transactions are conducted
                securely and transparently. We provide detailed information on
                payment methods, processing times, and any associated fees to
                guarantee a smooth and trustworthy payment experience for our
                users.
              </p>
              <img className="w-[344px] h-[328px] mx-auto mt-[44px]" src={paymentImage} alt="paymentImage" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentHero;
