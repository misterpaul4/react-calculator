import RRender from 'react-test-renderer';
import App from '../App';

it('renders the Calculator Page correctly without errors', () => {
  const tree = RRender.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
