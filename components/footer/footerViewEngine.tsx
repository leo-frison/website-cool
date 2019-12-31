import Link from 'next/link';

const view = () => {
  return (
    <small className="engine">
      <span>Powered by</span>
      <img src="/assets/junekim_192x192.png" alt="Developer logo" className="engine__logo" />
      <span>
        <Link href="//github.com/JuneKimDev" as="//github.com/JuneKimDev">
          <a>June Kim</a>
        </Link>
      </span>
    </small>
  );
};

export default view;