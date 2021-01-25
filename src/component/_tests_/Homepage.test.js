import RRender from 'react-test-renderer';
import Homepage from '../Homepage';

it('renders the Homepage Page correctly without errors', () => {
  const tree = RRender.create(<Homepage />).toJSON();

  expect(tree).toMatchSnapshot();
});
