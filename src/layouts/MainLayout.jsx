import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
