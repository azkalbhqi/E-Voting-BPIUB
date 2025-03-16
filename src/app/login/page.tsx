'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../lib/firebase';

export default function LoginPage() {
  const auth = getAuth(app);
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, username, password);
      router.push('/dashboard'); // Redirect on success
    } catch (err) {
      setError('Username atau password salah!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-fit text-center">
        <div className="flex justify-center mb-4">
          <Image src="/assets/logotype_bpi.png" alt="Logo" width={50} height={50} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Selamat datang, Awardee BPI UB! 👋</h2>
        <p className="text-gray-600 text-sm mt-2">
          Mari menjelajahi akun Anda dan manfaatkan sepenuhnya fitur-fitur aplikasi kami.
        </p>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mt-6 text-left">
            <label className="text-gray-700 text-sm font-semibold">USERNAME</label>
            <input
              type="email"
              placeholder="Masukkan email anda"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mt-4 text-left">
            <label className="text-gray-700 text-sm font-semibold">PASSWORD</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link href="#" className="text-sm text-blue-500 float-right mt-1">Lupa Password?</Link>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="text-gray-600 text-sm">Ingat Saya</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6 hover:bg-blue-600 transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
