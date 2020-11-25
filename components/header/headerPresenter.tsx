import { MouseEvent } from 'react';
import './header.scss';
import Item from './headerViewItem';
import Brand from './headerViewBrand';

const presenter = (props: { pathname: string; toggleMenu: () => void }) => {
  const { pathname, toggleMenu } = props;
  const isRoot = pathname === '/';
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__toggle-btn" onClick={toggleMenu}>
          <span></span>
        </div>
        <Brand logo="/assets/logo.png" name="TuNotebookLP" />
        <nav className="header__nav">
          <ul>
            <Item path="/" name="Inicio" onClicked={toggleMenu} />
            <Item
              path={isRoot ? '#products' : '/#products'}
              name="Productos"
              onClicked={toggleMenu}
            />
            <Item path={isRoot ? '#pricing' : '/#pricing'} name="Precios" onClicked={toggleMenu} />
            <Item
              path={isRoot ? '#features' : '/#features'}
              name="Promociones y Sorteos"
              onClicked={toggleMenu}
            />
            <Item path={isRoot ? '#about' : '/#about'} name="Sobre Nosotros" onClicked={toggleMenu} />
            <Item path="/blog" name="Nuestro Blog" onClicked={toggleMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default presenter;
