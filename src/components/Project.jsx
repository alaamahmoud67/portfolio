import React from 'react'
import { FaLink, FaGithub } from 'react-icons/fa';
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'
import img7 from '../assets/img-7.png'
import img8 from '../assets/img-8.png'
import img9 from '../assets/img-9.png'
import img11 from '../assets/img-11.png'

export default function Project() {
    const cardsData = [
        {
          id: 1,
          image: img1,
          title: 'Card Title 1',
          subtitle: 'Card Subtitle 1',
          text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
          links: [
            { href: 'https://www.sheefra.io/', icon: <FaLink />, text: 'Visit Site' },
            { href: '#', icon: <FaGithub />, text: 'GitHub' },
          ],
        },
        {
          id: 2,
          image:  img2,
          title: 'Card Title 2',
          subtitle: 'Card Subtitle 2',
          text: 'Another example text to build on the card title.',
          links: [
            { href: 'https://game.aveneme.com/', icon: <FaLink />, text: 'Visit Site' },
            { href: '#', icon: <FaGithub />, text: 'GitHub' },
          ],
        },
        {
          id: 3,
          image: img3,
          title: 'Card Title 3',
          subtitle: 'Card Subtitle 3',
          text: 'Yet another text to illustrate the card content.',
          links: [
            { href: 'https://www.odaxperience.com/', icon: <FaLink />, text: 'Visit Site' },
            { href: '#', icon: <FaGithub />, text: 'GitHub' },
          ],
        },
        {
          id: 4,
          image: img4,
          title: 'Card Title 4',
          subtitle: 'Card Subtitle 4',
          text: 'Final example text for this card.',
          links: [
            { href: 'https://theeyeverse.vercel.app/', icon: <FaLink />, text: 'Visit Site' },
            { href: '#', icon: <FaGithub />, text: 'GitHub' },
          ],
        },
        {
            id: 5,
            image: img5,
            title: 'Card Title 4',
            subtitle: 'Card Subtitle 4',
            text: 'Final example text for this card.',
            links: [
              { href: 'https://appwell.com/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
          {
            id: 6,
            image: img6,
            title: 'Card Title 4',
            subtitle: 'Card Subtitle 4',
            text: 'Final example text for this card.',
            links: [
              { href: 'https://cwatches.vercel.app/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
          {
            id: 7,
            image: img7,
            title: 'Card Title 1',
            subtitle: 'Card Subtitle 1',
            text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
            links: [
              { href: 'https://edueats.vercel.app/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
          {
            id: 8,
            image:  img8,
            title: 'Card Title 2',
            subtitle: 'Card Subtitle 2',
            text: 'Another example text to build on the card title.',
            links: [
              { href: 'https://molequl.vercel.app/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
          {
            id: 9,
            image: img9,
            title: 'Card Title 3',
            subtitle: 'Card Subtitle 3',
            text: 'Yet another text to illustrate the card content.',
            links: [
              { href: 'https://www.wynkapp.org/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
          {
            id: 11,
            image: img11,
            title: 'Card Title 4',
            subtitle: 'Card Subtitle 4',
            text: 'Final example text for this card.',
            links: [
              { href: 'https://kedra-website.vercel.app/', icon: <FaLink />, text: 'Visit Site' },
              { href: '#', icon: <FaGithub />, text: 'GitHub' },
            ],
          },
      ];
  return (
    < div className="bg-black ">
        <section className='bg-black'>
        <div className="container mx-auto ">
   <div className="flex justify-center py-4  lg:py-8">
  <div className="flex items-center space-x-2 sm:space-x-4">
    <span className="w-16 h-[2px] bg-[#1a1443] sm:w-24"></span>

    <span className="bg-[#1a1443] w-fit text-white py-1 px-3 text-sm sm:text-lg md:text-xl rounded-md text-center">
      Project
    </span>

    <span className="w-16 h-[2px] bg-[#1a1443] sm:w-24"></span>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {cardsData.map((card) => (
    <div
      key={card.id}
      className="bg-[#080914] border border-[#1f223c] text-gray-200 rounded-lg shadow-2xl p-4 group overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="rounded-t-lg w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h5 className="text-lg font-semibold">{card.title}</h5>
        <h6 className="text-sm text-gray-400 mb-2">{card.subtitle}</h6>
        <p className="text-gray-300 mb-4">{card.text}</p>
        <div className="flex lg:flex-row flex-col gap-2">
  {card.links.map((link, index) => (
    <a
      key={index}
      href={link.href}
      className="btn text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-white transition duration-300 border border-pink-500 px-4 py-2 rounded-md flex items-center gap-2"
    >
      {link.icon} {link.text}
    </a>
  ))}
</div>
      </div>
    </div>
  ))}
</div>
</div>
        </section>

    
    </div>
  )
}
