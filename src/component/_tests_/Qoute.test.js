import RRender from 'react-test-renderer';
import Quote from '../Quote';

it('renders the Quote Page correctly without errors', () => {
  const tree = RRender.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
