import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Movie from './Movie';
const Movies = () => {
    const [moviesArr] = useState([
        { id: uuid(), name: "Harry Potter and the Sorcerer's Stone", duration: "2h 32m", year: "2001", rating: "PG", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world." },
        { id: uuid(), name: "Harry Potter and the Chamber of Secrets", duration: "2h 41m", year: "2002", rating: "PG", description: "Harry Potter lives his second year at Hogwarts with Ron and Hermione when a message on the wall announces that the legendary Chamber of Secrets has been opened. The trio soon realize that, to save the school, it will take a lot of courage." },
        { id: uuid(), name: "Harry Potter and the Prisoner of Azkaban", duration: "2h 22m", year: "2004", rating: "PG", description: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard." },
        { id: uuid(), name: "Harry Potter and the Goblet of Fire", duration: "2h 37m", year: "2005", rating: "PG-13", description: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares." },
        { id: uuid(), name: "Harry Potter and the Order of the Phoenix", duration: "2h 18m", year: "2007", rating: "PG-13", description: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts." },
        { id: uuid(), name: "Harry Potter and the Half-Blood Prince", duration: "2h 33m", year: "2009", rating: "PG", description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past." },
        { id: uuid(), name: "Harry Potter and the Deathly Hallows: Part 1", duration: "2h 26m", year: "2010", rating: "PG-13", description: "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows." },
        { id: uuid(), name: "Harry Potter and the Deathly Hallows: Part 2", duration: "2h 10m", year: "2011", rating: "PG-13", description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts." }

    
    
    
    ])
    return ( 
        <div>   
            {moviesArr.map((u)=><Movie key={u.id} {...u}></Movie>)}
        </div>
    );
}

export default Movies;
