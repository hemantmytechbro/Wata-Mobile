 // src/data/posts.ts

// ---- Post Data ----
export const cardData = [
  {
    id: "1",
    user: "Léo Grondin",
    avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
    title: "Bridge collapse puts Uganda link.",
    description:
      "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
    image:
      "https://plus.unsplash.com/premium_photo-1675122317265-9cdd93e6b92d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
    comments: 189,
    views: 1200,
    votes: 620,
    shares: 160000,
    repost:3,
  },
  {
    id: "2",
    user: "Éloïse Boulanger",
    avatar: "https://media.istockphoto.com/id/2165425306/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=laIE4kJ8o55lKWDDjVwDbMjMBpDc5JhfGRBCBwzemv8=",
    title: "Patch up Kamuli road",
    description: "Repair works are in progress on Kamuli road.",
    image:
      "https://cdn.prod.website-files.com/5fa4da31b6c3a45d2cfd2d5d/6312333ce58b0d9024d156cf_stijn-kleerebezem-bsk8f6BVSHc-unsplash.jpg",
    comments: 200,
    views: 250,
    votes: 120,
    shares: 300,
    repost:300,
  },
  // ...more posts
];

// ---- Comments Data ----
export const commentsData = [
  {
    id: "1",
    name: "Anushka",
    avatar: "https://i.pravatar.cc/100?img=1",
    comment: "This looks amazing 🔥🔥",
    time: "2h",
    replies: [],
  },
  {
    id: "2",
    name: "Rahul",
    avatar: "https://i.pravatar.cc/100?img=2",
    comment: "Wow, where is this?",
    time: "3h",
    replies: [],
  },
  {
    id: "3",
    name: "Priya",
    avatar: "https://i.pravatar.cc/100?img=3",
    comment: "So aesthetic ✨",
    time: "5h",
    replies: [],
  },
 
];

// ---- Votes Data ----
export const votesData = [
  {
    name: "Jolien Charlier",
    time: "5 mins ago",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Léo Grondin",
    time: "1 hour ago",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Susan Brown",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Keira Mitchell",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];
