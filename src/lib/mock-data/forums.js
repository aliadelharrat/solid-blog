export const categories = [
  {
    id: 1,
    name: "التكنولوجيا",
    supervisor: "أليس جونسون",
    vice_supervisor: "بوب سميث",
    forums: [
      {
        id: 1,
        name: "مناقشة التكنولوجيا العامة",
        description: "ناقش أحدث الاتجاهات والابتكارات في مجال التكنولوجيا.",
        photo:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        moderators: ["مشرف تكنولوجيا 1", "مشرف تكنولوجيا 2"],
        last_reply: {
          date: "05/10",
          by: "مستخدم 123",
        },
        stats: {
          topics: 120,
          replies: 980,
        },
      },
      {
        id: 2,
        name: "الذكاء الاصطناعي وتعلم الآلة",
        description: "استكشف التطورات في الذكاء الاصطناعي وتعلم الآلة.",
        photo:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        moderators: [
          "مشرف ذكاء اصطناعي 1",
          "مشرف ذكاء اصطناعي 2",
          "مشرف ذكاء اصطناعي 3",
        ],
        last_reply: {
          date: "06/10",
          by: "محب الذكاء الاصطناعي",
        },
        stats: {
          topics: 45,
          replies: 320,
        },
      },
    ],
  },
  {
    id: 2,
    name: "الألعاب",
    supervisor: "تشارلي براون",
    vice_supervisor: "ديانا برينس",
    forums: [
      {
        id: 3,
        name: "ألعاب الكمبيوتر",
        description: "كل شيء عن ألعاب الكمبيوتر، من الأجهزة إلى البرامج.",
        photo:
          "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        moderators: ["مشرف كمبيوتر 1", "مشرف كمبيوتر 2"],
        last_reply: {
          date: "04/10",
          by: "لاعب محترف",
        },
        stats: {
          topics: 80,
          replies: 760,
        },
      },
      {
        id: 4,
        name: "ألعاب الأجهزة",
        description: "ناقش أحدث ألعاب الأجهزة والتحديثات.",
        photo:
          "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        moderators: ["مشرف أجهزة 1", "مشرف أجهزة 2", "مشرف أجهزة 3"],
        last_reply: {
          date: "03/10",
          by: "محب الأجهزة",
        },
        stats: {
          topics: 60,
          replies: 500,
        },
      },
    ],
  },
  {
    id: 3,
    name: "نمط الحياة",
    supervisor: "إيثان هانت",
    vice_supervisor: "فيونا غالاغر",
    forums: [
      {
        id: 5,
        name: "اللياقة الصحية",
        description: "شارك النصائح وناقش الروتين الرياضي والحياة الصحية.",
        photo:
          "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        moderators: ["مشرف لياقة 1", "مشرف لياقة 2"],
        last_reply: {
          date: "07/10",
          by: "حياة صحية",
        },
        stats: {
          topics: 30,
          replies: 200,
        },
      },
      {
        id: 6,
        name: "السفر والمغامرة",
        description: "استكشف وجهات السفر وشارك مغامراتك.",
        photo:
          "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        moderators: ["مشرف سفر 1", "مشرف سفر 2", "مشرف سفر 3"],
        last_reply: {
          date: "08/10",
          by: "عشاق المغامرة",
        },
        stats: {
          topics: 50,
          replies: 400,
        },
      },
    ],
  },
];

export const topics = [
  {
    id: 1,
    title: "How to Master JavaScript in 30 Days",
    author: {
      name: "ItsAdel",
      date: "5 min ago",
    },
    replies: 2,
    views: 45,
    last_reply: {
      by: "Admin",
      date: "3 seconds ago",
    },
  },
  {
    id: 2,
    title: "Best Practices for React Performance Optimization",
    author: {
      name: "CodeGuru",
      date: "12 min ago",
    },
    replies: 15,
    views: 230,
    last_reply: {
      by: "ReactFan",
      date: "8 min ago",
    },
  },
  {
    id: 3,
    title: "Why GraphQL is Better than REST API?",
    author: {
      name: "TechExplorer",
      date: "2 hours ago",
    },
    replies: 7,
    views: 150,
    last_reply: {
      by: "BackendDev",
      date: "45 min ago",
    },
  },
  {
    id: 4,
    title: "Introduction to Machine Learning with Python",
    author: {
      name: "DataWizard",
      date: "1 day ago",
    },
    replies: 22,
    views: 300,
    last_reply: {
      by: "AIEnthusiast",
      date: "2 hours ago",
    },
  },
  {
    id: 5,
    title: "Top 10 VS Code Extensions for Developers",
    author: {
      name: "DevToolsPro",
      date: "3 days ago",
    },
    replies: 50,
    views: 750,
    last_reply: {
      by: "FrontendNinja",
      date: "1 day ago",
    },
  },
  {
    id: 6,
    title: "Understanding Docker for Beginners",
    author: {
      name: "CloudMaster",
      date: "5 days ago",
    },
    replies: 10,
    views: 120,
    last_reply: {
      by: "DevOpsGuy",
      date: "2 days ago",
    },
  },
  {
    id: 7,
    title: "Loaded from the server",
    author: {
      name: "CloudMaster",
      date: "5 days ago",
    },
    replies: 10,
    views: 120,
    last_reply: {
      by: "DevOpsGuy",
      date: "2 days ago",
    },
  },
];
