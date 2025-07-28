import React, { useState, useEffect } from "react";
import {
  type EntryKey,
  type ChangeLogEntry,
  categoryToIconMap,
} from "@/data/changelog";

type ChangelogEntryProps = {
  date: string;
  entries: ChangeLogEntry;
  globalExpandState: boolean | null;
};

export default function ChangelogEntry({
  date,
  entries,
  globalExpandState,
}: ChangelogEntryProps) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (globalExpandState === true) setExpanded(true);
    else if (globalExpandState === false) setExpanded(false);
  }, [globalExpandState]);

  const hasEntries = Object.values(entries).some(Boolean);

  return (
    <div className="flex gap-4 w-full mb-6">
      {/* Date label */}
      <div
        className={`min-w-[120px] text-xl font-semibold ${
          hasEntries
            ? "text-blue-600 cursor-pointer hover:underline"
            : "text-gray-400 cursor-default"
        } pt-1`}
        onClick={() => hasEntries && setExpanded(!expanded)}
      >
        {date}
      </div>

      {/* Entries block */}
      <div
        className={`transition-all duration-200 w-full ${
          expanded && hasEntries ? "block" : "hidden"
        } border border-gray-200 shadow-md rounded-md `}
      >
        <div className="space-y-2 border-l-2 border-gray-200 pl-4 py-2">
          {Object.entries(entries).map(([category, text]) => {
            if (!text) return null;
            const key = category as EntryKey;

            return (
              <div key={key} className="flex gap-2 items-start w-full">
                <span className="text-lg">{categoryToIconMap[key]}</span>
                <div>
                  <p className="text-gray-800">{text}</p>
                  <p className="text-sm text-gray-500 capitalize">{key}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
