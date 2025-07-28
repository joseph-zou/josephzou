export type EntryKey = "work" | "releases" | "idea" | "learned" | "life";

export const entryKeyList: EntryKey[] = [
  "work",
  "releases",
  "idea",
  "learned",
  "life",
];

export const categoryToIconMap: Record<EntryKey, string> = {
  work: "🛠️",
  idea: "💡",
  learned: "📚",
  life: "🌱",
  releases: "🚀",
};

export type ChangeLogEntry = {
  [K in EntryKey]?: string;
};

export interface ChangelogDataType {
  date: string; // YYYY-MM-DD
  entries: ChangeLogEntry;
}

// data will always be inserted in the order of work, releases, idea, learning, life
export const changelogData: ChangelogDataType[] = [
  {
    date: "2025-07-27",
    entries: {
      work: "Added changelog to personal website",
      releases: "v1.0.1 Passwin patch",
    },
  },
  {
    date: "2025-07-20",
    entries: {
      life: "Birthday",
    },
  },
  {
    date: "2025-07-13",
    entries: {
      releases: "v1.0.0 Passwin",
    },
  },
  {
    date: "2025-07-06",
    entries: {},
  },
  {
    date: "2025-06-29",
    entries: {
      idea: "A password manager that utilizes the argon2id algorithm.",
      learned: "Session management, tanstack router, three.js",
    },
  },
  {
    date: "2025-06-22",
    entries: {
      releases: "v1.0 Personal website",
    },
  },
  {
    date: "2025-06-15",
    entries: {
      releases: "Deskmate application",
      learned: "Various design patterns",
    },
  },
  {
    date: "2025-06-8",
    entries: {
      idea: "A desktop pet application that acts as a lightweight personal assistant — inspired by the idea of having a digital companion that’s both fun and genuinely helpful.",
    },
  },
  {
    date: "2025-06-1",
    entries: {},
  },
];
