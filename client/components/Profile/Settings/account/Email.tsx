/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { changeEmail } from '../../../../redux/services/accountServices';

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
        className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
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
            className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      )}

      {/* button */}
      <div className="text-right">
        <button
          type="button"
          className="px-6 py-1 my-2 text-sm font-semibold text-right border rounded-md hover:bg-gray-50"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Change'}
        </button>
      </div>
    </>
  );
};

export default Email;
