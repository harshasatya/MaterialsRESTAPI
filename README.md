# MaterialsRESTAPI

This REST API is built using Express.js which serves data from MongoDB Collections.

END POINTS - 

/ - returns all the items 

/{id} - returns the document with specific ID 

/filter/{value} - returns the documents with specific element (main_element) 

/boronlessthan/{value} - returns all the documents where the IsBoron_composition_average is less than value.
