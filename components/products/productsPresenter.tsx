import './products.scss';
import Item from './productsViewItem';

const lorem = (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
    <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </>
);

const presenter = () => {
  return (
    <section className="products hash" id="products">
      <div className="products__container">
        <h1 className="products__title page-title">Products</h1>
        <Item
          imgSrc="//unsplash.it/512/512?random=1"
          imgDesc="product1"
          descTitle="Product 1"
          descContent={lorem}
        />
        <Item
          imgSrc="//unsplash.it/512/512?random=2"
          imgDesc="product2"
          descTitle="Product 2"
          descContent={lorem}
        />
        <Item
          imgSrc="//unsplash.it/512/512?random=3"
          imgDesc="product3"
          descTitle="Product 3"
          descContent={lorem}
        />
        <div className="email"></div>
      </div>
    </section>
  );
};

export default presenter;
