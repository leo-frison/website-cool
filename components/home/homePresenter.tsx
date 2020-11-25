import './home.scss';

const Presenter = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <video
          className="home__video"
          src="/assets/a-group-of-people-have-their-eyes-focused-on-a-laptop-screen-3248784.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="home__pitch">
          <h1>Busca en Looking web tu solucion</h1>
          <h1>para resolver todos tus problemas</h1>
          <p> a un click de distancia</p>
        </div>
      </div>
    </section>
  );
};

export default Presenter;
