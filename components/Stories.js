import React from 'react'
import StoryCard from './StoryCard'

const Stories = () => {
    const stories = [
        {
            name: 'Alfa Mukhtar',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v'
        },
        {
            name: 'Goodness Enyo',
            src: 'https://links.papareact.com/4zn',
            profile: 'https://links.papareact.com/kxk'
        },
        {
            name: 'Joel Onotu',
            src: 'https://links.papareact.com/k2j',
            profile: 'https://links.papareact.com/f0p'
        },
        {
            name: 'Corper Faith',
            src: 'https://links.papareact.com/xql',
            profile: 'https://links.papareact.com/snf'
        },
        {
            name: 'Oluwa Timileyi',
            src: 'https://links.papareact.com/4u4',
            profile: 'https://links.papareact.com/zvy'
        }
    ]
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map((story, index) => {
           return (
            <StoryCard
            key={index}
            name={story.name}
            src={story.src}
            profile={story.profile}
            />
           )
        })}
    </div>
  )
}

export default Stories