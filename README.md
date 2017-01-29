READ ME !
=====================

This is just a sample project using expressjs, mongoose to develop a REST API and its unit test.

To install : 
```
npm install
```

/configs/env/dev.js and /configs/env/prod.js need to be configured before running it.

To unit test : 
```
npm test
```

To run in production mode : 
```
NODE_ENV=production node index.js
```

To run in development mode : 
```
node index.js
```


##Endpoint List

- /api/driver
- /ride

###Driver Schema 

| Field Name   | Type    | Desc.                                      |
|--------------|---------|--------------------------------------------|
| Name         | String  | Driver Name                                |
| Surname      | String  | Driver Surname                             |
| CurrLoc      | [Number]| Driver's current location as [lat,lon]     |
| CreationDate | Date    | Record creation date.                      |
| JobCount     | Integer | Driver's job count.                        |

###/api/driver EndPoint

#####Post Method :
 Saves a new driver.
 
 Requires a JSON as post data(content type : application/json). 
 
 Sample Post Data :
```json
{
    "name":"Okan",
    "surname":"Karaman"
}
```

 Returns a JSON if it is successfull or throws an exception error if it is failed.

 Sample response : 
```json
{
    "message": "success",
    "_id": "588dca3119298aaf69f90496"
}
```
 
#####Get Method :
 Serves all drivers list as JSON Array.
 
  Sample response : 
```json
  [
    {
        "_id": "588dca3119298aaf69f90496",
        "surname": "karaman",
        "name": "okan",
        "__v": 1,
        "currLoc": [
            15.2996,
            22.918824
        ],
        "creationDate": "2017-01-29T09:29:44.680Z",
        "jobCount": 7
    }
  ]
```  


###/api/driver/:_id EndPoint

#####Get Method :
 Serves driver as JSON( `_id` param is mongoDB objectID).
 
  Sample response : 
```json
{
    "_id": "588dca3119298aaf69f90496",
    "surname": "okan",
    "name": "karaman",
    "__v": 1,
    "currLoc": [
        15.2996,
        22.918824
    ],
    "creationDate": "2017-01-29T09:29:44.680Z",
    "jobCount": 7
}
```  


#####Put Method :
 Updates a driver.( `_id` param is mongoDB objectID)
 
 Requires a JSON as put data(content type : application/json). 
 
 Sample Post Data :
 
```json
{
	"name":"okan",
	"surname":"karaman",
	"jobCount":7,
	"currLoc":[15.2996,22.918824]
}
```

 Returns a JSON if it is successfull or throws an exception error if it is failed.

 Sample response : 
```json
{
  "message": "success",
  "updatedDriver": {
    "currLoc": [
      15.2996,
      22.918824
    ],
    "_id": "588dca3119298aaf69f90496",
    "surname": "okan",
    "name": "karaman",
    "__v": 1,
    "creationDate": "2017-01-29T09:29:44.680Z",
    "jobCount": 7
  }
}
```

#####Delete Method :
 Deletes a driver.( `_id` param is mongoDB objectID)

 Returns a JSON if it is successfull or throws an exception error if it is failed.

 Sample response : 
```json
{
  "message": "Deleted",
  "_id": "588e2526669a6fc5cdf84401"
}
```

###/ride EndPoint

#####Post Method :
 Serves closest 3 drivers list as JSON Array.
 
 Requires a JSON as post data(content type : application/json).
 
 Sample post data : 
 ```json
 {
    "location":[-45.79888, 5.17888] 
 }
 ```
 
  Sample response : 
```json
  [
  {
    "dis": 33.86667083871678,
    "obj": {
      "surname": "driverson",
      "name": "test user 2",
      "__v": 1,
      "currLoc": [
        -45.79858673438413,
        5.178794837380533
      ],
      "_id": "588db85519298aaf69f90404",
      "creationDate": "2017-01-29T09:29:44.680Z",
      "jobCount": 1
    }
  },
  {
    "dis": 51.51857335193485,
    "obj": {
      "surname": "driverson",
      "name": "test user 9",
      "__v": 1,
      "currLoc": [
        -45.79904322100334,
        5.17931331465672
      ],
      "_id": "588db85519298aaf69f9040b",
      "creationDate": "2017-01-29T09:29:44.680Z",
      "jobCount": 1
    }
  },
  {
    "dis": 54.4680212375423,
    "obj": {
      "surname": "driverson",
      "name": "test user 1",
      "__v": 1,
      "currLoc": [
        -45.79839848995561,
        5.178977206751629
      ],
      "_id": "588dc3f619298aaf69f90435",
      "creationDate": "2017-01-29T09:29:44.680Z",
      "jobCount": 1
    }
  }
]
```  


