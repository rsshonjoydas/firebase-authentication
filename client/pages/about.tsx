import { useAppSelector } from '../redux/hooks';
import { wrapper } from '../redux/store';

const About = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <h4>
      <span className="text-purple-500">Currently logged in as:</span>{' '}
      <span className="text-green-400">{currentUser?.email}</span>{' '}
      <span className="text-green-400">{profile?.fullName}</span>{' '}
    </h4>
  );
};

export default wrapper.withRedux(About);
