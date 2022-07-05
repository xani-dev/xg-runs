# Running Stats Tracker App 🏃‍♀️
This app is a React Project intended to keep track of my daily running stats in terms of Pace, BPM and Run Types. 

This project was created with Firestore, the Accuweather API, CSS, HTML and Javascript. 


## Description: 
I creaed this project to get a historic record of my daily runs, I am especially interested in having track of my Pace, BPMs and Run Types. 

I was especially interested in the integrating of the Accuweather API, along with React and the use of Firestore as DB. 

Displays a table showing all previous records with Location, a Weather Icon based on the weather reported from the AccuWeather API at the time the run and location was recorded, BPMs, Run Type and Run Pace. 

Info can be added using the form provided and records can be deleted, if needed. 

![Run Tracker Demo]()

Weather Icons are from [Erik Flowers](https://erikflowers.github.io/)

## How to Run: 
In order to run this project, you must update the Accuweather API Access Token with your own on your .env file along with your Firestore Keys.

```
REACT_APP_API_KEY= 'YOUR-API-CODE-HERE'; REACT_APP_AUTH_DOMAIN= 'YOUR-API-CODE-HERE'
REACT_APP_PROJECT_ID= 'YOUR-API-CODE-HERE'
REACT_APP_STORAGE_BUCKET= 'YOUR-API-CODE-HERE'
REACT_APP_MESSAGING_SENDER_ID= 'YOUR-API-CODE-HERE'
REACT_APP_APP_ID= 'YOUR-API-CODE-HERE'
REACT_APP_API_ENDPOINT = https://api.test.com

REACT_APP_WEATHER_API_KEY = 'YOUR-API-CODE-HERE' 
```

## Technologies:
- Firebase 9
- Firestore
- React
- HTML, CSS
- Javascript
## License information: 

[MIT](https://choosealicense.com/licenses/mit/)
