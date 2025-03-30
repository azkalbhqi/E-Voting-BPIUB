'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function VotePage() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Cek apakah user sudah memberikan suara
        const voteRef = doc(db, 'vote1', currentUser.uid);
        const voteSnap = await getDoc(voteRef);

        if (voteSnap.exists()) {
          setHasVoted(true);
          setMessage('✅ Anda sudah memberikan suara.');
        }
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleVote = async (vote: string) => {
    if (!user) return setMessage('❌ Anda harus login terlebih dahulu.');
    if (hasVoted) return setMessage('❌ Anda sudah memberikan suara.');

    try {
      // Simpan data voting dengan UID sebagai document ID
      await setDoc(doc(db, 'vote1', user.uid), {
        userId: user.uid,
        vote, // Menyimpan pilihan (1 atau 2)
        timestamp: new Date(),
      });

      setMessage('✅ Data berhasil dikirim!');
      setHasVoted(true);
    } catch (error) {
      setMessage(`❌ Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Kirim Suara</h2>
      {user ? (
        hasVoted ? (
          <h1 className="text-green-500 font-semibold">✅ Kamu sudah memilih, terima kasih!</h1>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div
              onClick={() => handleVote('1')}
              className="cursor-pointer p-6 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition"
            >
              <h3 className="text-lg font-bold">Pilih Card 1</h3>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => handleVote('2')}
              className="cursor-pointer p-6 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition"
            >
              <h3 className="text-lg font-bold">Pilih Card 2</h3>
            </div>
          </div>
        )
      ) : (
        <p className="text-red-500">❌ Anda harus login terlebih dahulu.</p>
      )}
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
}
