'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Image from 'next/image';
import Swal from 'sweetalert2';


export default function VotePage() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [namaCalonDipilih, setNamaCalonDipilih] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

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

  const handleVote = async (vote: string, candidateName: string) => {
    if (!user) return setMessage('❌ Anda harus login terlebih dahulu.');
    if (hasVoted) return setMessage('❌ Anda sudah memberikan suara.');
  
    const result = await Swal.fire({
      title: `Yakin memilih ${candidateName}?`,
      text: "Pilihan tidak bisa diubah setelah dikirim.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, pilih!',
      cancelButtonText: 'Batal',
    });
  
    if (!result.isConfirmed) return;
  
    try {
      await setDoc(doc(db, 'vote1', user.uid), {
        userId: user.uid,
        vote,
        timestamp: new Date(),
      });
      setNamaCalonDipilih(candidateName);
      await Swal.fire('Terkirim!', 'Pilihan Anda sudah dicatat.', 'success');
      setHasVoted(true);
      setMessage('✅ Data berhasil dikirim!');
    } catch (error) {
      Swal.fire('Gagal!', `Terjadi kesalahan: ${(error as Error).message}`, 'error');
    }
  };
  
  

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-white space-y-6">
      <h2 className="text-2xl font-bold text-center">Kirim Suara</h2>

      {user ? (
        hasVoted ? (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="text-5xl">✅</div>
            <h2 className="text-2xl font-bold text-green-600">Terima kasih telah memilih!</h2>
            <p className="text-gray-600 text-lg">Suaramu telah tercatat dan berarti.</p>

            <div className="mt-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Kamu memilih: <strong>{namaCalonDipilih}</strong>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 py-6 flex-wrap justify-center">
            {/* Paslon 1 */}
            <div onClick={() => handleVote('1', 'Harmoko')} className="group cursor-pointer">
              <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden w-64">
                <div className="relative w-full h-64">
                  <Image src="/assets/1.png" alt="Paslon 1" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                    <h2 className="text-xl font-bold">Harmoko</h2>
                    <p className="text-sm mt-1">Fakultas Peternakan</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Harmoko
                  </h3>
                  <p className="text-lg text-gray-500">Fakultas Peternakan</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm py-2 text-blue-500 group-hover:text-base transition-all">
                      Pilih Kandidat
                    </p>
                    <p className="text-2xl hidden group-hover:flex transition-all">🗳️</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paslon 2 */}
            <div onClick={() => handleVote('2', 'Harry Kurniawan')} className="group cursor-pointer">
              <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden w-64">
                <div className="relative w-full h-64">
                  <Image src="/assets/2.png" alt="Paslon 2" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                    <h2 className="text-xl font-bold">Harry Kurniawan</h2>
                    <p className="text-sm mt-1">Fakultas Teknik</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    Harry Kurniawan
                  </h3>
                  <p className="text-lg text-gray-500">Fakultas Teknik</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm py-2 text-green-500 group-hover:text-base transition-all">
                      Pilih Kandidat
                    </p>
                    <p className="text-2xl hidden group-hover:flex transition-all">🗳️</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <p className="text-red-500 text-center">❌ Anda harus login terlebih dahulu.</p>
      )}

      {message && <p className="text-green-500 text-center">{message}</p>}
    </div>
  );
}
