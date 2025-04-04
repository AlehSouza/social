'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full">Usuário</div>
      <div className="w-full border-x border-gray-300 gap-4 flex flex-col min-w-[600px] flex items-center p-4 ">
        {children}
      </div>
      <div className="w-full">Explorer</div>
    </div>
  );
}
