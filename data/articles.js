const articles = [
  {
    id: '1',
    slug: 'delhi-pollution-levels-increase',
    title: 'दिल्ली में प्रदूषण का स्तर फिर खतरनाक',
    description:
      'रात भर चलने वाली ठंडी हवाओं के बावजूद राजधानी में वायु गुणवत्ता और बिगड़ गई...',
    content:
      'रात भर चलने वाली ठंडी हवाओं के बावजूद राजधानी में वायु गुणवत्ता और बिगड़ गई। विशेषज्ञों के मुताबिक यह स्थिति अगले कुछ दिनों तक जारी रह सकती है। सरकार ने लोगों से अनावश्यक बाहर निकलने से बचने और मास्क पहनने की अपील की है।',
    category: 'City',
    imageUrl: '/images/pollution.jpg',
    author: 'Live Desk',
    publishedAt: '2025-11-20T10:00:00Z',
  },
  {
    id: '2',
    slug: 'india-wins-cricket-series',
    title: 'भारत ने रोमांचक मुकाबले में सीरीज़ जीती',
    description:
      'आखिरी ओवर तक चले रोमांचक मुकाबले में भारत ने विपक्षी टीम को चार रन से हराया...',
    content:
      'सीरीज़ के निर्णायक मुकाबले में भारत ने शानदार प्रदर्शन किया। कप्तान की सूझबूझ भरी कप्तानी और गेंदबाजों के अनुशासित प्रदर्शन ने जीत में अहम भूमिका निभाई। स्टेडियम में मौजूद हजारों दर्शकों ने इस जीत का जमकर जश्न मनाया।',
    category: 'Sports',
    imageUrl: '/images/cricket.jpg',
    author: 'Sports Desk',
    publishedAt: '2025-11-19T16:30:00Z',
  },
  {
    id: '3',
    slug: 'stock-market-rally-today',
    title: 'शेयर बाजार में जबरदस्त उछाल, सेंसेक्स नया रिकॉर्ड',
    description:
      'घरेलू और विदेशी निवेशकों की जोरदार खरीदारी से बाजार में जबरदस्त तेजी...',
    content:
      'घरेलू और विदेशी निवेशकों की जोरदार खरीदारी से बाजार में जबरदस्त तेजी देखी गई। सेंसेक्स ने नया ऑल टाइम हाई बनाया और निफ्टी भी रिकॉर्ड स्तर पर बंद हुआ। विश्लेषकों का मानना है कि यह तेजी आने वाले दिनों में भी जारी रह सकती है।',
    category: 'Business',
    imageUrl: '/images/stock-market.jpg',
    author: 'Business Desk',
    publishedAt: '2025-11-18T09:15:00Z',
  },
];

export function getAllArticles() {
  return articles;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs() {
  return articles.map((a) => a.slug);
}
