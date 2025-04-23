"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function VoteStatistics() {
  const [vote1Count, setVote1Count] = useState(0);
  const [vote2Count, setVote2Count] = useState(0);
  // const [vote3Count, setVote3Count] = useState(0);
  const maxVotes = 290; // Ubah sesuai kebutuhan

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const votesSnapshot = await getDocs(collection(db, "vote1"));
        let countVote1 = 0;
        let countVote2 = 0;
        // let countVote3 = 0;

        votesSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.vote == 1) countVote1++;
          if (data.vote == 2) countVote2++;
          // if (data.vote == 3) countVote3++;

        });

        setVote1Count(countVote1);
        setVote2Count(countVote2);
        // setVote3Count(countVote3);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    };

    fetchVotes();
  }, []);

  const totalVotes = vote1Count + vote2Count;

  const chartData = [
    { name: "Harmoko", value: vote1Count },
    { name: "Harry Kurniawan", value: vote2Count },
    // { name: "Vote 3", value: vote3Count },
  ];

  return (
    <Card className="flex flex-col items-center p-6">
      <CardHeader className="items-center">
        <CardTitle className="text-4xl font-bold text-center">Total vote</CardTitle>
        <p className="text-3xl font-semibold">
          {totalVotes}/{maxVotes}
        </p>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} margin={{ top: 100, right: 30, left: 30, bottom: 10 }}>
            <CartesianGrid strokeDasharray="9 1" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 14 }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#00CFFF" radius={[10, 10, 0, 0]} barSize={50} label={{ position: "top", fill: "#000", fontSize: 16, fontWeight: "bold" }} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex gap-6 mt-4">
          {/* <span className="px-4 py-2 bg-gray-300 rounded">vote 1</span>
          <span className="px-4 py-2 bg-gray-300 rounded">vote 2</span> */}
        </div>
      </CardContent>

      <Link 
        href="/hasil"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Lihat Pemenang
      </Link>
    </Card>
  );
}
