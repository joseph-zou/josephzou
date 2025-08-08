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
  releases: "🚀",
  idea: "💡",
  learned: "📚",
  life: "🌱",
};

export type ChangeLogEntry = {
  [K in EntryKey]?: string;
};

export interface ChangelogDataType {
  date: string; // YYYY-MM-DD
  entries: ChangeLogEntry;
}

// data will always be inserted in the order of work, releases, idea, learned, life
export const changelogData: ChangelogDataType[] = [
  {
    date: "2025-08-10",
    entries: {
      work: "Added multi-browser support to PassWin, supporting vault versioning and safe edits. Continued working on personal finance application.",
      releases: "v1.1.0 Passwin",
      learned: "Plaid api",
      life: "Did my first alpine class.",
    },
  },
  {
    date: "2025-08-03",
    entries: {
      work: "Created resume page, helped MTM migrate their database, added chatbot frontend to personal site.",
      idea: "A fully featured accounting software, that tracks cashflow, assets, and estimates taxes. I figured it would be nice to have my own accounting software with features I control.",
      learned: "oauth, cursor ai",
    },
  },
  {
    date: "2025-07-27",
    entries: {
      work: "Added changelog to personal website. Fixed login issue due to bad extension packing for passwin. ",
      releases: "v1.0.1 Passwin patch",
    },
  },
  {
    date: "2025-07-20",
    entries: {
      work: "Continued development of LeetHub",
      learned: "Tanstack query",
      life: "This week was my birthday, I was gifted a Kindle which was exactly what I wanted because I've been meaning to read more on the go.",
    },
  },
  {
    date: "2025-07-13",
    entries: {
      work: "Finished building PassWin and published it to chrome webstore.",
      idea: "Some people I know wanted an automated way to submitting their leetcode solutions to Github, Leetcode + Github = LeetHub.",
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
      learned: "Session management, tanstack router",
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
      idea: "A personal website because I don't use social media. I wanted it to be unique by having its own 3D gallery.",
      learned: "Various design patterns, Three.js",
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
  {
    date: "2025-05-25",
    entries: {
      work: "",
      releases: "Shopify store",
      idea: "💡",
      learned: "📚",
      life: "I started bouldering",
    },
  },
  {
    date: "2025-05-18",
    entries: {
      work: "Building a shopify store for a friend",
      life: "I learned how to change the suspensions of a car.",
    },
  },
];
