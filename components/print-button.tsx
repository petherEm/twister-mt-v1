"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-3 sm:mt-0 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
    >
      <Printer className="h-4 w-4 mr-2" />
      Drukuj
    </button>
  );
}
