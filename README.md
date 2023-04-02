## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [QuickStart](#Quickstart)
* [Social Media](#social-media)

## General info
You can get custom and random identifiers for your data with no length limit and other interesting features.
	
## Technologies
Project is created with:
* Javascript
	
## Quickstart

To create a random ID...

**1. Install**

```shell
npm install randomizedid
```

**2. Create a ID** 

```javascript
const randomizedid = require('randomizedid');
randomizedid(); // ⇨ 'xIHJfPrCEm'
```

## Examples
```javascript
randimizedid() // ⇨ 'xIHJfPrCEm' To get 10 random characters

randimizedid(25)// ⇨ 'LUuBXRtyO0APurPL52hoU45D7' To get customized length of characters

randomizedid(29, 5) // ⇨ '71IhP-blAzp-QRhLA-qxOuB-DRKaH' To get customized lenght of characters and interspersed by dashes every n (second argument) characters

randomizedid(29, 5, '_') // ⇨ '71IhP_blAzp_QRhLA_qxOuB_DRKaH' "e added a third parameter that serves to select the separator of the string, which can be either '-' or '_'
```

## Social Media
Follow me (:

Instagram [@jarregui92](https://www.instagram.com/jarregui92)

Linkedin [@jarregui92](https://www.linkedin.com/in/jarregui92/)

Github [@jarregui92](https://github.com/jarregui92)
