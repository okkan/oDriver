READ ME !
=====================
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
#####Get Method :
 Serves all driver list as JSON Array.
 
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
