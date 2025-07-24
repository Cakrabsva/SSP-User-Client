// components/PageLoader.jsx
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="
        max-w-[411px] min-w-[375px] h-screen py-8
        border border-gray-200 rounded-4xl shadow-lg
        mx-auto 
        bg-white
        relative">

      <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center">
        <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
        <p className="text-gray-600 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
