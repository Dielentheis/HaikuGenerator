#Haiku Generator

To use this haiku generator, run node haiku. The default settings will generate a haiku from the CMUDictionary with the structure [[5], [7], [5]].

To take words from Harry Potter and the Sorcerer's Stone instead of cmudict.txt, simply change the second parameter of the function call in haiku_generator.js to true. Then run node haiku_generator to produce a haiku.

To change the structure of the haiku, modify the first parameter of the function call in haiku_generator.js. Then run node haiku_generator to produce a haiku.

** If using Harry Potter or changing the haiku structure, make sure to comment out the first function call at the top of haiku.js