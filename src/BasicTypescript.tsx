import { roles } from 'aria-query';
import React from 'react'

const BasicTypescript = () => {

    // const person: { name: string; age: number; hobbies: string[]; role: [ number, string ]; } = {
    //     name: 'yota',
    //     age: 30,
    //     hobbies: ['Sports', 'Cooking'],
    //     role: [2, 'author'],
    // }

    enum Role {
        ADIMN, READ_ONLY, AUTHOR
    }

     const person = {
        name: 'yota',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADIMN,
    }

    let favoriteActivetues: string[];
    favoriteActivetues = ['Sports'];
    

    for (const hobby of person.hobbies) { 
        console.log(hobby.toLocaleUpperCase());
    }

    if (person.role === Role.ADIMN ) { 
        console.log('読み取り専用ユーザー');
    }

  return (
    <div>
      
    </div>
  )
}

export default BasicTypescript
