import { useState } from 'react';
import Settings from '../components/Profile/Settings';
import Show from '../components/Profile/Show';
import { wrapper } from '../redux/store';

const profile = () => {
  const [onSetting, setOnSetting] = useState(false);

  return (
    <div>
      {onSetting ? <Settings setOnSetting={setOnSetting} /> : <Show setOnSetting={setOnSetting} />}
    </div>
  );
};

export default wrapper.withRedux(profile);
