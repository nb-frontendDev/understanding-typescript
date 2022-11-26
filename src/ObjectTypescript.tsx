import React from 'react'

const ObjectTypescript = () => {

    const person: { name: string; age: number; hobbies: string[]; role: [ number, string ]; } = {
        name: 'yota',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: [2, 'author'],
    }

    let favoriteActivetues: string[];
    favoriteActivetues = ['Sports'];
    
    console.log(person);

    for (const hobby of person.hobbies) { 
        console.log(hobby.toLocaleUpperCase());
    }

  return (
    <div>
      
    </div>
  )
}

export default ObjectTypescript
