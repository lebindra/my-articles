export const navbarData = {
  homeTitle: "लेबिन्द्र बहादुर गुरुङ",
}

export const footerData = {
  author: 'लेबिन्द्र बहादुर गुरुङ',
  aboutAuthor:
    'Namaste!! I’m Lebindra Gurung, an educator and community advocate with experience in teaching, gender empowerment, agroforestry, and disability rehabilitation. Through my writings, photography, and insights, I aim to inspire and drive positive change. Join me on this journey! ',
  authorInterest:
    `Join me as I strive to inspire, educate, and contribute to positive change in society. Let’s connect and grow together!`,
  aboutTheSite:
    ` •	Personal Information of Lebindra Gurung.
      •	Activities of Lebindra Gurung.
      •	Collection of important information.
      •	Scenic Photography 
      •	Creative writing`,
}

export const homePage = {
  title: `मेरो लेख साइटमा स्वागत छ। \n Discover. Inspire. Grow.`,
  description:
    'Discover the world of Lebindra Gurung through his personal journey, creative writings, and scenic photography. Explore insights on education, community development, gender empowerment, agroforestry, and disability rehabilitation. This platform also features a curated collection of important information, offering inspiration and knowledge for positive change. Join me in learning, growing, and making a difference!',
}

export const blogsPage = {
  title: 'All Articles',
  description: 'Here you will find all the articles I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Browse posts categorized by tags',
}

export const aboutPage = {
  title: 'लेबिन्द्र बहादुर गुरुङ',
  description: 'Community Attendant, Writer and Social Campaigner',
  aboutMe:
    "With extensive experience as a dedicated tutor and teacher across various educational institutions, I have passionately contributed to shaping minds and fostering learning. My journey extends beyond the classroom, as I have actively engaged in community development initiatives, focusing on gender empowerment, agroforestry, and community-based rehabilitation for people with disabilities. Additionally, I had the privilege of serving as the Executive Director of the Manakamana Area Development Committee, a renowned religious institution in Nepal, where I worked under the Government of Nepal to drive impactful development projects. My diverse experiences reflect my commitment to education, community empowerment, and sustainable development, all of which continue to inspire my work and contributions to society.",
}

export const seoData = {
  title: `लेबिन्द्र बहादुर गुरुङ`,
  ogTitle: ``,
  description: `Community Attendant, Writer and Social Campaigner`,
  twitterDescription: ``,
  image:
    '/buddha.png',
  mySite: 'https://test.sumitpun.com.np/',
  twitterHandle: '',
  mailAddress: 'sony23grg@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
