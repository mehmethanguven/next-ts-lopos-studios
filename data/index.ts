import { IImage, INavLink, ISocialIcon } from '@/types'

export const navLinks: INavLink[] = [
  { title: 'home', url: '/' },
  { title: 'about', url: 'about' },
  { title: 'careers', url: '#careers' },
  { title: 'events', url: '#events' },
  { title: 'products', url: '#products' },
  { title: 'support', url: '#support' },
]

export const creationImages: IImage[] = [
  {
    title: 'deep earth',
    imageName: 'image-deep-earth.jpg',
  },
  {
    title: 'night arcade',
    imageName: 'image-night-arcade.jpg',
  },
  {
    title: 'soccer team',
    imageName: 'image-soccer-team.jpg',
  },
  {
    title: 'the grid',
    imageName: 'image-grid.jpg',
  },
  {
    title: 'from up above vr',
    imageName: 'image-from-above.jpg',
  },
  {
    title: 'pocket borealis',
    imageName: 'image-pocket-borealis.jpg',
  },
  {
    title: 'the curiosity',
    imageName: 'image-curiosity.jpg',
  },
  {
    title: 'make it fish eye',
    imageName: 'image-fisheye.jpg',
  },
]

export const socialIcons: ISocialIcon[] = [
  {
    title: 'facebook',
    url: '#',
    imageUrl: '/images/icon-facebook.svg',
  },
  {
    title: 'twitter',
    url: '#',
    imageUrl: '/images/icon-twitter.svg',
  },
  {
    title: 'pinterest',
    url: '#',
    imageUrl: '/images/icon-pinterest.svg',
  },
  {
    title: 'instagram',
    url: '#',
    imageUrl: '/images/icon-instagram.svg',
  },
]
