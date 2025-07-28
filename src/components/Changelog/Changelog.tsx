import {
  changelogData,
  type ChangelogDataType,
  entryKeyList,
  categoryToIconMap,
} from "@/data/changelog";
import ChangelogEntry from "./ChangelogEntry";
import dayjs from "dayjs";
import { useState } from "react";

const displayDate = (raw: string) => `v.${dayjs(raw).format("YYYY.MM.DD")}`;

export default function Changelog() {
  const [globalExpandState, setGlobalExpandState] = useState<boolean | null>(
    null
  );
  const expandAll = () => setGlobalExpandState(true);
  const collapseAll = () => setGlobalExpandState(false);
  return (
    <div className="flex flex-col h-full w-full items-center gap-3">
      <div className="w-full bg-background text-gray-800  text-center text-base md:text-lg py-2 border-b border-gray-300 shadow-sm ">
        This changelog updates every Sunday — because people ship updates too.
      </div>

      <div className="w-full max-w-3xl px-5">
        <div className="flex flex-col items-center mt-2 mb-4 md:flex-row gap-5">
          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={expandAll}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition shadow-sm"
            >
              Collapse All
            </button>
          </div>

          {/* Category checkboxes (minimal, not button-like) */}
          <div className="flex gap-3">
            {entryKeyList.map((entryKey) => (
              <label
                key={entryKey}
                className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed"
              >
                <input
                  type="checkbox"
                  disabled
                  className={`w-4 h-4 accent-gray-400 rounded-sm border-gray-400 `}
                />
                {categoryToIconMap[entryKey]} {entryKey}
              </label>
            ))}
          </div>
        </div>

        {changelogData.map((changelog: ChangelogDataType) => (
          <ChangelogEntry
            key={changelog.date}
            date={displayDate(changelog.date)}
            entries={changelog.entries}
            globalExpandState={globalExpandState}
          />
        ))}
      </div>
    </div>
  );
}
