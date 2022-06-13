/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { changeEmail } from '../../../../redux/services/accountServices';
import ButtonPrimary from '../../../Button/ButtonPrimary';

const Email = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser?.email) setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = async () => {
    if (!currentUser || !email.trim()) return;
    if (email === currentUser?.email) return;

    const provider = currentUser.providerData.some((p) => p.providerId === 'password');

    if (provider && !password) return setShowPassword(true);

    setLoading(true);
    await changeEmail(currentUser, email, password);
    setLoading(false);
  };

  return (
    <>
      {/* Email */}
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        className="m-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1 peer ..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Current Password */}
      {showPassword && (
        <>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            className="m-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1 peer ..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      )}

      {/* button */}
      <ButtonPrimary disabled={loading} onClick={handleSubmit} loading={loading} />
    </>
  );
};

export default Email;
