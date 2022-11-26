import React from 'react'

const ObjectTypescript = () => {

    const person= {
        name: 'yota',
        age: 30,
        hobbies: ['Sports','Cooking']
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
