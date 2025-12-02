---
title: Mapping With Javascript
description: 'In this course, we will learn how to use JavaScript to create interactive maps on the web. We will use the Leaflet library to create maps and add interactivity to them. We will also learn how to use jQuery to add buttons and other controls to our maps.'
long_pages: true
published: false
uploads_dir: uploads/javascript
readings:
    - A great mapping tutorial from [Maptime Boston](https://maptimeboston.github.io/leaflet-intro/).
learning objectives:
    - Be familiar with JS libraries like Leaflet.
    - Create a small project of their own that can live on the web!
programming_language: 'JavaScript'
estimated time:
    - 3 - 4 hours
prerequisites: 
    - command line: 
        description: Introduction to the Command Line (Required) This workshop makes reference to concepts from the Command Line workshop, and having basic knowledge about how to use the command line will be central for anyone who wants to learn about programming with Python.
        required: true
    - data ethics: 
        description: Data Ethics (Recommended) This workshop will give you a basis for thinking through the ethical considerations of your programming projects.
        recommended: true

authors:
    - 'Zach Lloyd'
    - 'Stephen Zweibel'

editors:
    - 'Zach Lloyd'
    - 'Stephen Zweibel'

ethical considerations:
    - Data visualizations can be used to mislead or misrepresent data.

resources:
    - Leaflet:
        link: https://leafletjs.com/
        description: "Leaflet is an open-source JavaScript library for creating interactive maps on the web."

---
# Mapping With Leaflet

In this lesson, we'll work with a new tool called __Leaflet__. Leaflet is an open-source JavaScript library (like jQuery) that will help us add interactive maps to our web pages. Interactive maps have become one of the most popular ways to visualize and explore spatial data. What this will ultimately require us to decide is how to aggregate, categorize, combine, and visualize our data. All of these decisions, plus the context of the map on your page, will influence the story that the map tells. Thinking about your data as a story (no matter what the data is), is a good way to reckon with the ethical dimensions of web development.

On that note, and given current events, it is probably worth mentioning that Leaflet was created by a Ukrainian programmer in Kyiv. On the library's [main page](https://leafletjs.com/), you can read about the maintainers' sentiments on the war. This is a good time to reflect on how even well-established programming libraries can be affected by social and political forces, and also how they can be utilized in ways that were once unimaginable.

Keeping these ideas in mind, let's get started working with Leaflet.

## Web Maps

You are likely very familiar with web maps. I personally have found myself quite lost in NYC before. While "being lost" is not necessarily a bad way of being sometimes, if you have a specific destination (not to mention a certain time) in mind, having a map is quite helpful. You know what I mean--Google or Apple provide us with interactive geo-location almost every second of our lives.

<!-- Before we begin integrating web maps into our project, it might be helpful to consider the basic "layering" of a web map. Take a look at the map below. It was created using Leaflet, and you can see some of the code (HTML, CSS, and JavaScript) powering it on the side. Click on stuff and zoom and drag around on the map.

<HTMLEditor >

<html>
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"/>
 <script src="https://unpkg.com/leaflet@1.7.0/dist/leaflet.js"></script>
    <div id="map"></div>
</html>
<css>
#map {
    height: 600px;
    width: 600px;
}
</css>
<javascript>
```
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Here is a pop-up<br> on a marker')
    .openPopup();
```
</javascript>

</HTMLEditor>
<br />

You'll notice that there are several "layers" to this map. Web maps can be layered in many ways, but the most basic can resolve into just a few:
1. The background or tile layer--the map itself, with all its internal data about streets, boroughs, cities, etc.
2. The foreground layer--the parts that overlay the map: the markers, lines, and other elements.
3. The popup layer--the text or notification that appears when you click on a marker or other element on the map.
4. The control layer--the buttons that control the map, such as the zoom buttons. This layer is usually on top of the other layers.

These layers all work together to comprise the interactivity of the map. For our purposes, we will mostly work with the foreground layer and the popup layer. -->

## Getting Started with Leaflet

Leaflet is fairly straightforward to get started with and allows for a wide array of customization.

If you look at the JavaScript code for the map above, you'll notice a bunch of `L`s. Leaflet creates an object, `L`, that has a bunch of methods that we can use to create and manipulate maps. Our map is, itself, an object. The tile layer? A different object. Markers are objects, polylines are objects, polygons are objects, popups are objects--you get the point. And all these objects have properties and methods we can modify, too.

To better understand how this all works, let's get to work setting up our own map. Leaflet has an official [quick starter guide here](https://leafletjs.com/examples/quick-start/) that we'll more or less follow, but we'll add some more context. 

Let's say we want to add a map of New York to our page with Whitman's _Broadway_ poem. Using Leaflet, let's get a map to show and add a bit of spatial context to our page.

## HTML

First, open your `poem.html` file. My recommendation here is to simply overwrite all your existing HTML by copy/pasting the following:

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Walt Whitman's Broadway</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
    crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
    integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
    crossorigin=""></script>
    <link rel="stylesheet" href="poem.css">
  </head>
  <body>
    <div class="container">
      <h1><em>Broadway</em> by Walt Whitman</h1>
      <div id="intro">
        <p>Welcome to the page for Walt Whitman's poem <em>Broadway</em>. Click on elements to see more information about them.</p>
      </div>
      <div id="poem"> </div>
      <div id="info"></div>
      <h2>Map of New York</h2>
      <div id="map"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="map.js"></script>
    <script src="poem.js"></script>
  </body>
</html>
```

You'll notice we have added a few new things here. First, before our `poem.css` file, we added a new `<link>` tag to link to Leaflet's CSS file. You _must_ always include Leaflet's CSS file in the `<head>` section of your documents when adding maps. Also in the `<head>` we added a new `<script>` tag to link to Leaflet's JavaScript file. _This is also required_ for Leaflet to work.

Next, within our `<div>` `container`, we added a new `<div>` with an `id` of `map` at the end. This is where we'll put our map. It will appear underneath the poem and info divs. To offset it a bit, we also included a new `<h2>` tag with the text "Map of New York" to appear above the map.

Lastly, we have added a new `<script>` tag to link to our own new JavaScript file named `map.js`. This is where we'll add our own JavaScript code for the map.

Everything else in the HTML should be familiar to you. This will be about all the work we need to do on our HTML file in this lesson.

## CSS

The next step we'll need to take is to specify a height for our map. Leaflet's one demand of CSS is that it be a certain height. We can do this by adding a `height` property to our `#map` id. In your `poem.css` file, add the following:

```CSS
#map {
  height: 400px;
}
```

You can change the height to whatever you'd like, but it must be there.

If you save your files and click "Go Live", you should see our new header with a considerable amount of whitespace beneath it. That is where our map will live. Currently, however, the map is not visible. This is because we need to initialize the map in JavaScript.

## Initializing the Map

Create a new file called `map.js` and add the following:

```JavaScript
// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");
```

`poemMap` is now designated an object that we can use to modify the map on the page. Note the syntax: `.map()` is a method that `L` (Leaflet) has that creates a map in the `<div>` with the `id` given as the parameter. (`L.map()` here is not to be confused with the ordinary `.map()` method you've seen before! A little confusing, I know...) If you save everything and check the browser, you should see a map element appear.

Unfortunately, the map is currently blank and grey. This is because we have not yet added a tile layer to the map. Remember, the tile or background layer is the map itself, with all its internal data about streets, boroughs, cities, etc.

Let's go ahead and add the tile layer now. Below the initialization of the map, add the following:

```JavaScript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);
```

Let's take a look at what this code does. First, we add a new `.tileLayer` to the map. The first parameter is the URL of the tile layer source (in this case, [openstreetmap.org](https://www.openstreetmap.org/)). The second parameter is an object that contains the following properties:

- `maxZoom`: The maximum zoom level that the map can be zoomed to.
- `attribution`: The attribution text (to show the source of the map) that appears at the bottom of the map.

Whenever we create a new object like this `tileLayer`, we need to add it to the map. We do this by calling the `.addTo()` method on the object. This method takes one parameter, which is the map we want to add the tile layer to (`poemMap`).

Next, we use the `.setView()` method. This method takes two parameters: an array of the latitude (north-south) and longitude (east-west) of the center of the map, and the zoom level. We set the center of the map to New York City (using its coordinates) and the zoom level to 16. As we specified earlier, the max zoom level here is 18.

If you save and check your page, you should now see a map with New York City at its center. Nice!

## Adding Markers

Because our poem is about Broadway, why don't we add a marker to the map indicating where Times Square is located? We can get the official coordinates of Times Square simply by Googling "Times Square coordinates". The result is 40.7580 N, and 73.9855 W. Let's add a marker to the map at these coordinates:

```JavaScript
const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
```

First, we create a new `.marker()` object. This object takes one parameter, which is an array of the latitude and longitude of the location we want to mark. We then add this marker to the map.

If you scroll up on the map or zoom out, you should now see a marker appear at the coordinates. Next, let's add a popup to the marker. To do this, we need to add a `.bindPopup()` method to the marker. This method takes one parameter, which is simply the text we want to appear in the popup.

```JavaScript
timesSquare.bindPopup("<b>Times Square</b>");
```

Here we bind the popup to the marker with the bold text "Times Square". If you save and click on the marker, you should now see the popup appear.

![Times Square](/images/times-square.png)

## Adding Shapes

Besides popups and markers, you can add shapes to the map like lines, polygons, and circles. Let's add a circle to the map.

```JavaScript
const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);
```

Here we have added a circle with a radius of 500 meters. The circle is reddish (in terms of both border and fill) and has a 50% opacity so we can see the map underneath. To add the circle, we simply need to specify the coordinates of the center and add it to the map with the `.addTo()` method.

We can also add polylines to the map. Let's add a polyline from Times Square to the Graduate Center:

```JavaScript
const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);
```

Here we simply need to specify the start and end coordinates of the polyline. We can also specify the color of the line.

Lines, circles, and polygons are usually used to show a path or provide some contextual boundaries. We can also bind a popup to a line, circle, or polygon. For example, let's add a popup to the line from Times Square to the Graduate Center:

```JavaScript
polyline.bindPopup("<b>Times Square to the Graduate Center</b>");
```

If you click on the line on the map, you should now see a popup appear.

You can similarly add popups to circles and polygons. Let's add a popup to the circle:

```JavaScript
circle.bindPopup("I'm a circle!");
```

## Coordinates and Events

Leaflet has many methods for working with coordinates. For example, we can get the latitude and longitude of a marker by calling the `.getLatLng()` (getLatitudeLongitude) method:

```JavaScript
const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);
```

If you check your console in the browser, you should now see the latitude and longitude of our Times Square marker display.

If we wanted to pan (or shift the map's view) to Times Square, we could do so by calling the `.panTo()` method on the map:

```JavaScript
poemMap.panTo(timesSquare.getLatLng());
```

If you check your page, you should now see the map shift to the location of the Times Square marker.

Every time something happens in Leaflet, e.g. the user clicks on a marker or map zoom changes, the corresponding object in Leaflet sends an event which you can access with a function. It allows you to react to user interaction. For example, let's add a function to the map that logs the latitude and longitude of the point on the map that the user clicks on.

```JavaScript
poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});
```

Here we add a function to the map that is called whenever the user clicks on the map. The `.on()` method takes two parameters: the event name and a function that is called when the event occurs. The event name is `click` and the function has a parameter `e`, which is the map click event object that is created.

When the user clicks on the map, the `.on()` method calls the function we defined. We can access these coordinates by getting the `.latlng` (lowercase) property of the `e` object and then the `.lat` and `.lng` properties on the new `.latLng` object. (Note the differences between the new object we create--it has a capital `L` in the name.)

If you check your developer console in the browser, you should now see the latitude and longitude of the point on the map that the user clicks on.

Leaflet has [very extensive documentation](https://leafletjs.com/reference.html) on all its methods, properties, and events that I recommend you look through. We'll discuss more strategies for using documentation in a coming lesson, but it's good to take a preliminary look.

## Review Questions

1. Modular programming emphasizes separating the functionality of a program into smaller, independent pieces.

:::quiz
- True*
- False
:::

2. After initializing your map, you should add the tile layer.

:::quiz
- True*
- False
:::

3. The `.addTo()` method adds an object to a map.

:::quiz
- True*
- False
:::

## Challenges

1. Create a marker at the location of your favorite restaurant, bar, cafe, or event space in NYC.

2. Draw some polylines that replicate a walk to the nearest subway station from your favorite spot in step 1. (Note: It doesn't need to be super precise: just use the `click` event and `console.log()` to map out the general coordinates of your walk at each turn.)

3. Push all your code to GitHub.

## Key Terms

Do you recall the following key terms?

- modular programming
- layers
- markers
- popups
- events

## Download the Project

Here are the course files we created for this lesson if you need a reference:

::download{files="11_index.html, 11_script.js, 11_styles.css, 11_poem.html, 11_poem.css, 11_poem.js, poem.json, 11_map.js"} <br/>

# Working With GeoSpatial Data

In this lesson, we'll marshall our hard-earned skills with jQuery, JSON, and Leaflet to add a bit more complexity to our mapping project. We'll use a dataset of geospatial data to add some more interesting features to our maps. Specifically, we'll use a dataset that defines the locations of neighborhoods across New York City and incorporate it into our project.

Using this dataset will allow us to:
- Add neighborhoods boundaries as a new layer to the map
- Add popups to the neighborhood polygons
- List all neighborhoods on the page and add buttons and links to pan to each neighborhood's location

Because we are combining all of the skills we've learned throughout this course, I recommend taking it slowly and carefully. Be sure to understand the concepts, syntax, and major moves of each part before moving on. 

Without further ado, let's get started!

## The Dataset

We have said that we'd like to use a dataset that defines the locations of neighborhoods across New York City. We'll talk about good ways to find datasets in the coming weeks (as you begin your own final projects), but for now, let's use the dataset [from this source](https://data.beta.nyc/dataset/pediacities-nyc-neighborhoods/resource/35dd04fb-81b3-479b-a074-a27a37888ce7). If you click on the link, you can see a nice map of NYC that shows the boundaries of the neighborhoods. We'll do something similar with this dataset on our own maps.

Let's use the dataset as a local file in our project folder. You can download it from the source website or simply use the download button below:

::download{files="nycneighborhoods.json"}<br />

You'll see that we get a JSON file that contains the data we need. Make sure you save it in your working directory for this course. Let's open this file in VSCode and take a look at it:

![NYC Dataset](/images/nyc-dataset.png)

It all looks a little confusing, doesn't it? Let's break down what we are seeing here.

The JSON file we have here is an example of __GeoJSON__. [GeoJSON](https://geojson.org/) is a subset of JSON that defines a set of specifically _geographic_ features. In other words, it is a standardized format for representing spatial data and is used by many different mapping applications.

Just like regular JSON files you have seen, GeoJSON files utilize key-value pairs to define the features.

You'll notice our dataset is of the _type_ `"FeatureCollection"`. This is a special type of JSON object that contains a list or collection of multiple features. Each feature is itself a JSON object that additionally has the key `"type"` with a value of `"Feature"`. Each feature has a number of properties that define the object. For instance, you can see that we have properties of `neighborhood`, `boroughCode`, `borough`, and `id`. Each of these has a value that we will be able to access and use later. Each feature also has a property called `geometry` that contains the coordinates of the feature (the neighborhood). Each feature is defined as a polygon with an array of coordinates that define the shape of the polygon (the neighborhood in question). Remember that spatial data can be points, lines, or polygons--we are dealing with polygons here because we are circumscribing the shape of each neighborhood. If you scroll through the file, you'll see that we have a feature for each of the neighborhoods in NYC. 

Okay, let's prepare our page so we can use the dataset.

## Preparing the Page

Let's create a few new files. First, create a new HTML file in your working directory called `nyc-data.html`. Go ahead and add the following:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>NYC Neighborhoods</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
    crossorigin=""/>
    <link rel="stylesheet" href="nyc-data.css">
   <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
   crossorigin=""></script>
  </head>
  <body>
    <div class="container">
      <h1>NYC Neighborhoods</h1>
      <div id="map"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="nyc-data.js"></script>
  </body>
</html>
```

This should all be fairly familiar stuff to you. We get the necessary Leaflet and jQuery files, and we add a custom CSS file as well as a new JavaScript file to work with. To be able to navigate to the page, you can simply add another link to it in your `index.html` file, like we did with our poem:

```html
<h2><a href="nyc-data.html">NYC Neighborhoods</a></h2>
```

Next, go ahead and create the new CSS file, `nyc-data.css`, and add the following:

```css
#map { 
    height: 600px; 
    width: 75%;
}
```

This will set the size of the map to be 75% of the width of the page and 600px tall.

Next, create a new JavaScript file, `nyc-data.js`, and add the following to create the initial map:

```JavaScript
let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 16);
```

Check to make sure your map displays properly. If so, let's move on to the next step.

## Adding the Data

There are several different ways we could add this data to our map, but perhaps the simplest way will be to use Leaflet's built-in `L.geoJSON` method. This function takes in a GeoJSON object and adds it to a map.

To use this method, however, we'll need to make a minor change to our `nycneighborhoods.json` file. In the file itself, we'll want to store the JSON object as a JavaScript variable we can work with.

The first thing we'll need to do is change the file type from `.json` to `.js`, as a JavaScript file. You can change the file extension easily by simply right-clicking the file in the Explorer Window and selecting Rename. Change the file name to `nycneighborhoods.js`.

Now, in your `nycneighborhoods.js` file, create a new variable at the very top of the file to store the data like so:

```JavaScript
const nyc = {
"type": "FeatureCollection",
...
...
...
```

This allows us to work directly with the `nyc` variable to add the data to our map. This is the easiest way I've found to utilize the `L.geoJSON()` method to add data to a map without having to worry about taking extra steps to "parse" the data. Otherwise, Leaflet seems to have difficulty working directly with GeoJSON data, and you'll receive an `"Invalid GeoJSON object"` error. 

There is, however, one more step to take. We'll need to include the dataset as a source in our HTML file. So, in the `<head>` of your `nyc-data.html` file, add the following:

```html
<script src="nycneighborhoods.js"></script>
```

Now, we can finally create a new Leaflet layer with the data and add it to our map. In your `nyc-data.js` file, add the following line of code:

```JavaScript
L.geoJSON(nyc).addTo(nycMap);
```

The `nyc` variable we created earlier is the data in our dataset. We can use the `L.geoJSON` method to add this data to our map. If you save and check your page, you should now see the neighborhoods of NYC outlined over the map:

![Nyc Neighborhoods](/images/nyc-neighborhoods1.png)

Pretty neat, right? Make sure you are seeing this correctly display before moving on.

## Styling the Data

Let's add a bit of fill color to the polygons to make them stand out:

```JavaScript
// add some fill color to the map
L.geoJSON(nyc, {
    style: function(feature) {
        return {
            color: "blue",
            fillColor: "yellow",
            fillOpacity: 0.5
        };
    }
}).addTo(nycMap);
```

The `style` function takes in a `feature` (in this case, our neighborhood polygons) and returns a style object, which we add to our map. The style object here has three properties: `color`, `fillColor`, and `fillOpacity`. The `color` property sets the color of the polygon border, the `fillColor` property sets the color of the polygon interior, and the `fillOpacity` property sets the opacity of the polygon interior.

You should now see the polygons styled as a pale yellow with a blue border:

![NYC Neighborhoods](/images/nyc-neighborhoods2.png)

## Adding Popups to the Data

Let's add some popups to our map to show the name of each neighborhood. To do this, we'll need to add a new property to our object: `onEachFeature`. This property takes in a function that will be called for each feature (each neighborhood) in the dataset:

```JavaScript
// show each borough on the map
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);
```

The `onEachFeature` property takes in a function with two arguments: the feature and the layer. The feature is the neighborhood itself, and the layer is the Leaflet layer that will be added to the map. We can use the `bindPopup` method to add a popup to the layer. Using HTML in the popup, we can display the name of the neighborhood and the borough by getting the `properties` object from the feature and accessing the `borough` and `neighborhood` properties. In between the `<h3>` tags, we can put a horizontal rule `<hr>` to separate the borough and neighborhood names. Finally, as always, we add the layer to the map.

If you save, you should now be able to click on each neighborhood to see a popup with the name of the neighborhood and the borough.

![NYC Neighborhoods](/images/nyc-neighborhoods3.png)

Great! Now, let's add a bit more functionality to our page.

## Adding Buttons

Let's say we wanted to add a button to our page that pans the map to a particular neighborhood. Let's create a new button in our `nyc-data.html` file, below our map `<div>` tag:

```html
<button id="pan-to-flatbush">Pan to Flatbush</button>
```

In our `nyc-data.js` file, we can then use jQuery to check for a click event on the button, and find the neighborhood in the dataset:

```JavaScript
$("#pan-to-flatbush").click(function() {
    // find flatbush neighborhood property in the dataset
    let flatbush = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    });
    console.log(flatbush);
});
```

We can use the `find` method to find the neighborhood in the dataset that matches the name we want to pan to. The `find` method takes in a function that will be called for each feature (each neighborhood) in the dataset. In this case, we want to find the neighborhood that matches the name "Flatbush". The `find` method will return the first neighborhood that matches the function. To see the result, we `console.log()` the neighborhood we find, just to make sure we are pulling in the correct data.

If you save and click the Flatbush button, you should see the feature object for Flatbush logged to the console:

![Find Flatbush](/images/find_flatbush.png)

Perfect, we have successfully found the neighborhood we want to pan to. Now, let's use the `panTo` method to pan the map to the neighborhood. Let's fill out this section of code to accomplish this:

```JavaScript
// use jquery to see if flatbush button is clicked
$("#pan-to-flatbush").click(function() {
    // find flatbush neighborhood property in the dataset
    let flatbush = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    });
    console.log(flatbush);
    // find the coordinates of flatbush property
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    }).geometry.coordinates;
    console.log(coordinates);
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});
```

To pan the map to the neighborhood, we need to find the coordinates of the neighborhood. We can do this by accessing the `geometry` property from the feature and accessing the `coordinates` property. The `coordinates` property is an array of arrays, and we `console.log(coordinates)` to make sure we are pulling in the correct data. We then use the `panTo` method to pan the map to the coordinates.

If you save and click the Flatbush button, you should see the map pan to Flatbush. It's not perfect (it doesn't pan to the exact center, but to the outer border of the neighborhood), but it's pretty close. To pan exactly to the center of the polygon would require a bit more complex calculations on our part, but this will work for demonstration purposes.

## Listing All Neighborhoods

We now have a simple external button control that allows us to pan the map to Flatbush. What if we wanted to list _all_ the neighborhoods of NYC and allow the user to click on each to pan to it? 

Below our Flatbush button, let's add a new `<div>` for displaying the entire list of neighborhoods:

```html
<div id ="neighborhoods"></div>
```

Next, in our `nyc-data.js` file, we'll want to loop through the dataset objects, pulling out the neighborhood name from each so we can display it in the list.

```JavaScript
// get a list of all the neighborhoods in the dataset
let neighborhoods = nyc.features.map(function(feature) {
    return feature.properties.neighborhood;
}).filter(function(neighborhood) {
    return neighborhood !== "";
}).sort();
console.log(neighborhoods);
```

We can use the `map` method to loop through the dataset and return an array of neighborhood names. The `filter` method then allows us to remove any neighborhoods that are blank (in case there are blank property names in the dataset). We then use the `sort` method to sort the neighborhoods alphabetically. Finally, we `console.log()` the neighborhoods array to make sure we are pulling in the correct data.

If you check your console, you should see the list of sorted neighborhoods as output:

![Neighborhoods List](/images/neighborhoods_list.png)

Let's go ahead and write these out to our neighborhoods `<div>`:

```Javascript
// display all the neighborhoods in the neighborhoods div
neighborhoods.forEach(function(neighborhood) {
    $("#neighborhoods").append("<a href ='#'><li>" + neighborhood + "</li></a>");
    // display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) {
        $("#neighborhoods").append("<br>");
    }
});
```

Here we utilize the `forEach` method to loop through the neighborhoods array and `append` each neighborhood to the `<div>` with the id of `neighborhoods`. As you may recall from [an earlier lesson's Challenge #3](?page=10), `forEach` is similar to `map()`, with the important difference being that `forEach` does not create a new array (which would be unnecessary in this case). You'll notice that we are surrounding each neighborhood with an `<a href>` tag and a `<li>` (list item) tag. This is because we want to be able to turn each name into a clickable element. We can use the `indexOf` method to find the index of the neighborhood in the array. If the index is divisible by 4, we add a `<br>` tag to separate the neighborhoods into spaced columns to make things a little easier to read.

To enable a basic columnar structure, we also need to add a line of code to our `nyc-data.css` file:

```CSS
#neighborhoods {
    columns: 100px 3
}
```

This allows us to create a simple columnar structure with 3 columns, each 100px wide.

If you save all files and check your page, you should see the list of neighborhoods displayed in columns:

![Neighborhoods List](/images/neighborhoods_list_columns.png)

You'll notice that there are several duplicates in the dataset (e.g., Jamaica Bay, Broad Islands, Pelham Islands, etc.), and that we are not always getting groups of 4. The data probably needs to be cleaned up (in this case, removing redundancies), which is always a good idea when working with data in your actual projects. We won't worry about this for now.

In any case, we now have a full list of clickable elements. Finally, let's add a click event to each neighborhood to pan the map to that neighborhood.

```JavaScript
// if the neighborhood is clicked, find the neighborhood on the map and pan to it
$("#neighborhoods").on("click", "li", function() {
    let neighborhoodText = $(this).text(); // get the text of the neighborhood
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === neighborhoodText; //check if the text matches the neighborhood in the dataset
    }).geometry.coordinates; // get the coordinates of the neighborhood
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    // zoom in
    nycMap.setZoom(16);
    // add a marker to the neighborhood polygon
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
    // add a popup to the marker
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap);
});
```

We can use the `.on(click)` method to add a click event to the `<li>` tag (i.e., each neighborhood name). We then use the `$(this).text` method to get the text of the particular `<li>` tag that was clicked. Remember, in this context, `this` simply points to whatever element is being acted upon. It is flexible in that we don't have to specify an individual element of the type. Next, we check if the `neighborhoodText` matches the `neighborhood` property in the dataset. If it does, we can use the `find` method to find the neighborhood in the dataset and grab the coordinates. Using the coordinates, we `panTo` the location. We also zoom in on the neighborhood and add a marker with a popup to the spot.

If you save your page, you should now be able to click on each neighborhood and the map will automatically zoom toward the neighborhood in question. Cool!

Again, you'll notice we are not displaying the marker in the exact center of the neighborhood polygon. Because each polygon is differently shaped and built-up from a large variety of coordinates, we'll just place the marker at the border of the neighborhood like we did before. Figuring out how to center each marker would probably be an important task if we were planning to use this website professionally, however.

The last step we should probably take is to give attribution to our dataset source. Even if the source is open and freely available for use, it's wise to give attribution in case there are mistakes or otherwise undesirable elements in the data. This is not only a way to protect yourself, but also to let others know where to find/work with your data themselves.

For our purposes, we can simply provide a link to the source at the top of our page, by adding a link below our header:

```HTML
<a href = "https://data.beta.nyc/dataset/pediacities-nyc-neighborhoods/resource/35dd04fb-81b3-479b-a074-a27a37888ce7" alt="Data Source">Here's the source for NYC neighborhood boundaries.</a>
```

## What Have We Done?

Let's take a moment to review the variety of skills and techniques we've utilized to create this new page. Although the page is fairly simple looking, we've accomplished some rather complex tasks. We have:

- A base layer map of the world
- An overlay of neighborhoods in NYC specifically, using a geospatial dataset
- The ability to click around on the map and see each neighborhood
- An external button that allows us to navigate to a particular location on the map, based on the data we have
- An entire list of clickable neighborhoods pulled from the dataset

We are only scratching the surface of what jQuery, JSON, and Leaflet can do working in tandem, but we have accomplished quite a lot. These are the skills we'll employ to put together your own final projects with your own datasets, your own stylistic creativity, and your own intentions for the final result.

## Review Questions

1. Each object in a GeoJSON dataset is called a:

:::quiz
- Property
- Feature* 
- Coordinate
:::

2. True or False - The `geometry` property contains coordinate data for a particular feature.

:::quiz
- True*
- False
:::

3. When using a dataset pulled from an online source, it is wise to: (select all that apply)

:::quiz
- Check the data for redundancies, duplicates, or otherwise erroneous material*
- `console.log()` your retrievals of the data for testing purposes*
- Give attribution for your source*
:::

## Challenges

1. Create another button that pans the map to your favorite neighborhood.

2. Draw some polylines to connect the boundaries of different neighborhoods.

3. If a neighborhood is in Manhattan, change the color of the neighborhood polygons to red. (Hint: You'll need to check for the `borough` property and perform `style` changes accordingly.)

## Key Terms

Do you recall the meaning of the following terms?

- GeoJSON
- FeatureCollections/Features
- Geometry

## Download the Project

Here are the course files we created for this lesson if you need a reference:

::download{files="12_index.html, 12_script.js, 12_styles.css, 12_poem.html, 12_poem.css, 12_poem.js, poem.json, 12_map.js, 12_nyc-data.css, 12_nyc-data.html, 12_nyc-data.js, nycneighborhoods.js"} <br/>

# Reading Documentation

Throughout this course, we have often referred you to "the documentation" for various libraries and tools. As you may have experienced when looking through these resources, documentation can be overwhelmingly large, complex, and confusing. Learning to read documentation is an important skill, but it's one that takes time.

So, in this lesson, we'll look to some strategies to help you:
1. Better navigate through technical jargon.
2. Better understand the structure and style of documentation.
3. Feel more confident in your ability to read documentation overall.

## What is Documentation?

Documentation, at its core, is a collection of descriptions/explanations for employing a particular product or service. Unfortunately, documentation can run the gamut from being very thorough to very vague. Oftentimes, the more niche a product is, and the smaller the community, the less in-depth the documentation. 

This is also, partly, due to the nature of documentation's audience. If documentation is too overly thorough in its explanations, experienced developers might find it bloated. On the other hand, if documentation is too sparse, new developers might find it difficult to understand. Writing efficient documentation means hitting the sweet spot between thoroughness, understandability, and ease of use.

## "Getting Started" vs. "Documentation"

Most documentation for a tool has two separate sections, written from different perspectives.

1. "Getting Started" is a section that describes how to get started using the tool. It is meant to be a quick introduction for how to install, configure, and use the product in a basic way. Leaflet's ["Quick Start" guide](https://leafletjs.com/examples/quick-start/) is a good example of this, with basic comprehension and implementation instructions.
2. Compare, now, Leaflet's Quick Start to [Leaflet's full docs](https://leafletjs.com/reference.html). This is more like a dictionary or glossary of presets, methods, and actions. Information density is prioritized rather than presenting a readable tutorial you can follow along with directly.

## The Art of ~~Reading~~ Referencing

For the most part, documentation isn't meant to be "read" in the traditional sense. Rather, it is meant to be _referenced_. If you have a sense of the overall structure, you can usually jump through non-chronologically. Using <kbd>ctrl</kbd> + <kbd>f</kbd> to maneuver through search terms is often the best approach.

Let's take a look at the [CSS reference docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). It is, in short, overwhelming. It contains the full list of CSS properties and values, as well as a lot of information about them. However, if we want to achieve something simple, such as changing the font properties of a particular piece of text, we can simply <kbd>ctrl</kbd> + <kbd>f</kbd> `font` to find all the relevant properties:

![MDN font](/images/mdn-font.png)

This is a good example of how documentation works. The baseline property, in this case, `font`, is our first highlighted result. Everything else is in some sense a derivative of the baseline property; for instance, we can specify directly the font size, the weight, the [kerning](https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning), etc. 

In general, when searching for terms, first look to the most basic (i.e., probably the least wordy and jargony) instance. It will likely provide you with the foundational concept of the language that you're looking for and let you expand upon it.

Here is a list of reference docs for the tools we are using in this course. Spend a little bit of time looking at each one, discerning its structure and how you can best use it. Search around for some terms and click/scroll around to see what comes up.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [jQuery](https://api.jquery.com/)
- [Leaflet](https://leafletjs.com/reference.html)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

The MDN reference docs are usually the most comprehensive, and besides searching for terms you can also use the sidebar to navigate through additional resources. This is also the case with the Leaflet and jQuery docs.

If you ever find yourself without internet and need offline documentation, one useful tool is [Zeal](https://zealdocs.org/), an offline documentation browser. It contains most (although not all) of the docsets for the tools and languages that we've used in this course so far.

## Beyond the Docs

### Google Searches

There are a number of reasons why learning with official documentation is the best approach for really coming to grips with a language. However, we may have inflated this a little. While documentation is best utilized when you have a very specific end goal, and when you already have a basic sense of how this goal might be accomplished, these factors may not always be in place. Especially when you are first starting out with a language or tool, you may not know the best search parameters to use in docs. 

If you aren't quite sure what you are looking for (and <kbd>ctrl</kbd> + <kbd>f</kbd> isn't being helpful), simply Googling around is the best way to go when faced with a particular problem. There are, however, some best practices for this as well. 

For example, let's say you created a button on a page, and you wanted to add some space around it so other elements aren't cramming it. How would you go about doing this? What sort of keywords would you use? What language is suitable?

Programming isn't always that different from other software contexts you have encountered. Thinking about the typical Word or Google doc you might write, when thinking about space around something you are probably dealing with `margins` in some form. Aside from <kbd>ctrl</kbd> + <kbd>f</kbd> `margin` in the docs, you could also turn to Google. In this case your search parameters could be something like: "adding margins around a button css", or even simply, "adding space around a button css." Note that although Google will likely figure it out, we are explicitly searching here for CSS. Specifying the language is important, as it will help us narrow down our search results.

### Handling Errors

We have talked about the basics of understanding errors before, but its worth noting that documentation often provides info on how to deal with possible errors that may arise in a program. There may be errors that can arise that are specific to the tool, and the docs can be the best place to go when dealing with these issues. However, this may not always be the case. If the docs are less than clear, again, simply Googling a confusing error message can be a useful approach if it has you stumped. This is not necessarily to say you should simply copy/paste an entire error. For example, copy/pasting this behemoth of an error message...
    
```
Uncaught (in promise) TypeError: _super.call is not a function
    at new ObservableQuery (b1f6a7d9f98d979758232d0dc3c394ce.js:26213)
    at QueryManager.watchQuery (b1f6a7d9f98d979758232d0dc3c394ce.js:27305)
    at b1f6a7d9f98d979758232d0dc3c394ce.js:27332
    at new Promise (<anonymous>)
    at QueryManager.query (b1f6a7d9f98d979758232d0dc3c394ce.js:27330)
    at ApolloClient.query (b1f6a7d9f98d979758232d0dc3c394ce.js:27981)
    at Object.require.2.react (b1f6a7d9f98d979758232d0dc3c394ce.js:29740)
    at newRequire (b1f6a7d9f98d979758232d0dc3c394ce.js:41)
    at require.39 (b1f6a7d9f98d979758232d0dc3c394ce.js:66)
    at b1f6a7d9f98d979758232d0dc3c394ce.js:71
```

... would not give you very good results. A solution might be to:

1. First, articulate your code that's breaking into a series of smaller steps. Often, programmers recommend a method called [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging). This is a technique similar to writing pseudo-code, in that you first try to articulate your problem in spoken or written natural language. Attempting to explain the problem in simple language will very often lead you to a solution, or the beginning of a solution. In describing what the code is supposed to do and observing what it actually does, any incongruity between these two becomes apparent. 

2. Second, begin your search. Hopefully you now have a rough idea of what your code is and isn't doing correctly, so begin by including keywords from your error message and try to find results that fit your particular use case. For example, in the error above, if you Google "javascript uncaught (in promise) typeerror", you will find quite a few people have run into the same problem!

The first hit of this result is [this](https://stackoverflow.com/questions/57673148/how-to-fix-uncaught-in-promise-typeerror-cannot-read-property-method-of-un) question on the notorious Stack Overflow. Its worth taking a minute to discuss this site.

![Stack Overflow](/images/error_google.png)

### Stack Overflow

Stack Overflow is a very commonly used resource for programmers. It is a great place to find answers to all kinds of questions, and even to share your knowledge with others if you feel up to it. It is essentially a question/answer forum, and, at this point, contains over 21 million programming questions. If you have a question or issue about your code, it is very likely someone else has had it too. Whether or not you will always find an answer to your problem is more dubious, but it can be informational in other ways as well.  

Let's say we wanted to figure out how to disable a button using jQuery (for instance, a "submit" button that only works when a form is filled out on the page). We could search for "disable button jquery" in Google. The first hit of this result is not actually pointing us to documentation, but rather to [this Stack Overflow question](https://stackoverflow.com/questions/1594952/jquery-disable-enable-submit-button/62723465#62723465).

![Stack Overflow](/images/stack_overflow_example.png)

Always, take a quick look at the question to make sure it's relevant to your problem. Then scroll down through the answers and the discussions to find what you're looking for. You may also notice snarky debates—another "feature" of Stack Overflow. (Unfortunately, in many cases this is why I wouldn't recommend _asking_ questions as a beginner on StackOverflow, as folks and moderators can be less than friendly. It is still a great place for _finding_ answers through search, however). In this particular case, there are many, many answers, and almost each one is a different way to solve the problem. It is worth pointing out that this question was asked over 12 years ago, which is something you might want to consider, as some things may possibly be out of date. In any case, there is a plethora of information on the page that should help point you in the right direction.

As you might imagine, implementing code snippets from Stack Overflow is an incredibly common practice, and is even the source of many jokes, like this meme:

![Joke](/images/so_joke.jpg)

Don't feel the need to reinvent the wheel if you find a working solution on Stack Overflow. However, do pay close attention to any code you wrangle with, and make sure you understand what it is doing and how it fits into your overall program/project.

### Other Resources

While Stack Overflow is a great resource for programmers, it is not the only resource. There are many, many others, like [GitHub](https://github.com/), [CodeProject](https://www.codeproject.com/), different subreddits (like r/webdev, r/learnjavascript, etc.) on [Reddit](https://www.reddit.com/), and much more. I would especially recommend reddit, as the communities are very active and usually inviting of folks who are just learning to code.

If you would like to go really in-depth learning Leaflet, I would highly recommend Malcom Maclean's [Leaflet Tips and Tricks](https://leanpub.com/leaflet-tips-and-tricks/read).

## Final Thoughts

In general, keep in mind that documentation is best used as a reference for what you can do with a particular piece of software. It is not always the best place to start for beginners, but you will likely always end up arriving at the official documentation in one way or another. Beyond that, simply Googling around can be a good jumping off point. The absolute most important thing to learn is how to find answers to your questions. This means learning how to ask the _right_ questions. As a recap, when searching, be sure to:
1. Include the language/tool you are searching in as a search parameter.
2. Break down your search into keywords.
3. Be specific.
4. Don't be afraid to copy/paste and tweak results to fit your programs, but be sure to understand what the code is doing as best you can.

As you begin putting together your final project in the remaining weeks, try to keep these resources and strategies in mind, and refer back to them as needed.

## Review Questions

1. You should read documentation straight through, from top to bottom.

:::quiz
- True
- False*
:::

2. You should copy and paste your entire error message when searching for guidance through Google.

:::quiz
- True
- False*
:::

3. To get the most out of your Google searches, you should: (select all that apply)

:::quiz
- Include the target language/tool you are searching in as a search parameter.*
- Break down your search into keywords.*
- Be specific.*
- Say please.
:::

## Challenges

Here's a basic rectangle class in HTML:   

```HTML
<div class="rectangle">
    <p>I am a rectangle</p>
</div>
```

1. Using this [CSS reference guide](https://www.w3schools.com/cssref/), look into how you might do the following: 
    1. Give the rectangle a width, height, and background color.
    2. Give the box a thick border.
    3. Center the rectangle on the page.
    4. Center the "I am a rectangle" text within the rectangle.
    5. Add a drop shadow to the rectangle.

2. Using the [jQuery reference](https://api.jquery.com/), look into how you might do the following:
    1. Check if the user has pressed the <kbd>enter</kbd> key on the keyboard.
    2. Add a hover event to an element (like a button) so that it will change color when the mouse is hovering over it.
    3. Scroll to the top of the page if the user clicks a button.

3. Using the [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and/or Google, look into how you might do the following:
    1. Find the index of a substring within a string (like "dog" in "The dog jumped.").
    2. Given an array of numbers (e.g., `[40, 38, 37, 93, 55, 66]`, filter out any values that are less than 50.
    3. Given a decimal number (like `.36`), round it up to the nearest whole number.
    4. Create a random number between 1 and 100.

## Key Terms

- Documentation
- Reference
- Rubber Duck Debugging 

# Starting Your Project 

Congratulations on making it this far! We've covered quite a lot of ground in a rather short amount of time. At this point, you should be well-equipped to get your hands dirty starting your own projects. 

That being the case, the remaining few weeks will be entirely devoted to working on your own projects. Your projects will largely be self-directed, based on your own particular creative aspirations or research interests. There are, however, a few requirements. Let's go through them.

## Project Requirements

Your projects should demonstrate that you understand the major concepts covered in this course. At a baseline level, this means your project should include:

- A homepage that includes a brief description of your project and its purpose.
- Interactive content that allows the user to explore the project (buttons, links, images, text, etc).
- Dataset(s) pertinent to the project, whether it be data you've created yourself, or data you've imported from a data source.
- Some sort of visualization of the data you are working with (e.g., a map).
- A style appropriate to the project or to your personal aesthetic tastes.
- A new GitHub repository dedicated to the project and a working version that you can share with others.

Depending on the kind of project you are creating, it might be weighted towards one or more of these requirements over the others. This is fine, as long as you are, again, able to show that you understand the material we've covered.

## Project Components

The above requirements will expect you to demonstrate knowledge with JavaScript, HTML, CSS, jQuery, JSON, Leaflet, and GitHub. In other words, in practical terms your project will be comprised of _at least_ one of each of the following:

- HTML file
- CSS file
- JavaScript file
- JSON file
- Leaflet map
- GitHub repository

Keep in mind that all of these components are meant to _work together_ to tell a particular story or demonstrate a particular idea or purpose.

It will be up to you to decide how you want to structure your project. Will it be comprised of multiple web pages? Will it be a single web page with multiple components? The design will probably depend on your own creative ideas, the kind of project you are developing, and your ultimate goals for the user of the site. We'll talk through some strategies for putting your site together next week, but it will be helpful to have some idea of how you might structure your project before you begin writing any code.

## Project Ideas

As mentioned, your projects are self-directed and individually tailored. The content and structure of your site can be based on whatever you'd like. However, let's discuss some ideas to help you get off the ground.

As a starting point for your projects, ask yourself: 

1. What kind of story do I want to tell?
2. What kind of data will I need?
3. What kind of visualizations will I want?
4. How will the website be structured?
5. How will the user interact with the website?

Here are some sample ideas for projects:

- An exploration of an essay, poem, or work of fiction
- A Choose Your Own Adventure game
- A walking tour of the city
- An exploration of green spaces, parks, wildlife, etc.
- An exploration of libraries, archives, or museums
- Observations/celebrations of ethnic or cultural diversity
- Observations on geography and political affiliations, income levels, access to healthcare, etc.
- An investigation of the impacts of climate change

These are just suggestions, but feel free to use them as a starting point. For example, let's say you wanted to create a walking tour. What might your site consist of? A few things off the top of my head could be:

- Polylines indicating the tour on a map
- A dataset with coordinates of the walk and interesting features along the way
- Markers and popups giving information on the map
- Images to show some of the views of the walk
- Text to describe the walk
- Links to landmarks, businesses (restaurants, bars, cafes) etc. along the way

These are just basic elements that could be the foundation of an interesting guided tour. Feel free to get creative and expand on your ideas to make something particularly unique!

## Project Scope

It is very important to keep in mind that there are only a few weeks remaining in the semester. While it is fine to have big ideas and plans for your project, be very mindful of the __scope__ of your project and what you can actually accomplish in the allotted time. In other words, try to narrow down your project to a _single achievable goal_. Creating big, complex, beautiful websites takes a lot of time and effort, and is not necessarily the point of this project. 

Instead, try to provide major milestones for yourself to work towards that comprise the essential parts of your project. Keep your project goals direct, to the point, and attuned to the project requirements. You can always build upon your work later, but don't get bogged down in too much detail or minor features until you have a sufficient working version of the site.

## Where to Find Data?

Okay, now that we've discussed some of the basics for your project, let's look to some ways to gather data. Depending on your project, you might be gathering/creating your dataset yourself, or you might be importing data from a source online. For the latter option, here are a few recommendations for finding datasets:

- [NYC Open Data](https://opendata.cityofnewyork.us/): Official source for data in New York City.
- [USGS (United States Geological Survey)](https://www.usgs.gov/): Official source for geological data in the United States.
- [Google's Dataset Search](https://datasetsearch.research.google.com/): Search for datasets on Google.
- [Kaggle](https://www.kaggle.com/datasets): Search for a variety of datasets on Kaggle.
- [Data.gov](https://www.data.gov/): US Gov data covering everything from climate change to crime.
- [Datahub.io](https://datahub.io/): Mostly business and finance datasets
- [EarthData](https://earthdata.nasa.gov/): NASA data
- [Data.world](https://data.world/): Data from various sources

### Use JSON Data

Each of these websites has a search engine that can help you find datasets that you might be interested in. In general, keep in mind that __we want to use JSON files__. Some sites will give you an option of multiple formats. If not, you may want to convert the data into JSON. For instance, if you encounter CSV files (which is common), you can use the [CSVtoJSON](https://csv.keyangxiang.com/) tool to convert the data into JSON. There are many online converters out there, so don't be discouraged if your data is not in a format you want.

Okay, enough prepping. Let's get started! Attempt the Challenges below to get going with your ideas. __Above all, remember to have fun with your projects!__

## Challenges

1. Write a short project proposal to share your ideas with the class (a paragraph or two will suffice).

2. Begin gathering or creating a dataset relevant to your ideas.

3. Create a new folder and a new GitHub repository for the project. Begin uploading your essential files you'll be working with (an HTML file, a CSS file, a JS file, your data, etc.). If you need a refresher with GitHub, review the [GitHub lesson](?page=7).

# Putting the Project Together

Hopefully you have a good idea of what you'd like your project to achieve. While there is no one right answer for how to structure your project, there are some best practices that you can employ to help you envision the final product. In this lesson, we'll cover a few strategies for thinking about your project holistically.

## Wireframing

__Wireframing__ is the practice of creating a rough outline of a project in order to help you visualize the final product. It usually involves drawing a basic sketch of what the project will look like and figuring out minor details later on. This helps determine how the information is presented and how the various bits of information interact. Because this entanglement of information is the center of wireframing, there is no focus on fonts or colors or graphics. For instance, here's a basic wireframe for YouTube culled from [this site](https://www.visual-paradigm.com/learning/handbooks/agile-handbook/wireframe.jsp):

![Wireframe](/images/wireframe_example.png)

If you've ever used modern-day YouTube, this should look pretty familiar to you. It highlights only the essential aspects of what the site is meant to accomplish and what the user experience should be. Again, the point of wireframing is to help you visualize the final product; in other words, it serves as a blueprint for design. For your project, it can help you plan out:

- __Content:__ What content will be displayed?
- __Structure:__ How are the pieces of the application fitting together?
- __Information Hierarchy:__ How is the information organized and displayed together? What is most important?
- __Functionality:__ How will the overall interface work?
- __Behavior:__ How will the users interact with the interface? What will be the results?

Try grabbing a notebook or using [this site](https://app.diagrams.net/) to draw a simple wireframe plan for your project.

## CSS Styling

### Flexbox Layout

Remember flexboxes? We used them to center and space our jokes page to make them look nice and to allow it to display well on mobile devices. They are not required for you to use in your projects, but they will likely come in handy in allowing you to effectively structure the content of your pages. For instance, we could have used them style our columns of NYC neighborhoods we created earlier to make the page much cleaner looking.

If you need a refresher on flexboxes, feel free to review [the lesson on CSS](?page=8) or look through the very handy [flexbox guide here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

It's worth pointing out that flexboxes are similar to CSS `grids`. Depending on what you are trying to achieve, one might be better suited for your purposes than the other. I'd encourage you to [look over this resource](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) and especially [this resource](https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184) to learn about the differences between `grid` and `flexbox`, and to decide which might be best for your project.

### Styling Elements

Keep in mind that basically anything you display on the page can be styled. You can style the entire page, individual elements, or even individual parts of elements. For instance, let's say we wanted to add a bit of style to our "Flatbush" button from our map page we created in previous lessons. We want it to change color when the mouse hovers over it, and change color again once it's clicked. To accomplish this, we could use jQuery and CSS like so:

```JavaScript
// change the color of the button when the mouse hovers over it and when it is clicked
$("#flatbush").mouseover(function() {
    $("#flatbush").css("background-color", "orange");
}).mouseout(function() {
    $("#flatbush").css("background-color", "white");
}).click(function() {
    $("#flatbush").css("background-color", "yellow");
}
);
```

`mouseover` and `mouseout` are jQuery events that are triggered when the mouse enters or leaves the element. The button's normal state is colored white, but when the mouse hovers over it, it changes color to orange. When the mouse is clicked, the button changes color to yellow.

Alternatively, we could accomplish this entirely in CSS (without needing jQuery) to style the button when the mouse hovers over it and when it is clicked:

```CSS
#flatbush {
    background-color: white;
    border: 1px solid black;
    padding: 10px;
}

#flatbush:hover {
    background-color: orange;
}

#flatbush:active {
    background-color: yellow;
}
```

The above CSS code will change the button's background color to orange when the mouse hovers over it, and to yellow when it is clicked. This latter option is probably the most appropriate way to go, as it is usually best to keep style changes to your CSS files if possible, but both options are available to you. There is almost always more than one way to accomplish a particular task.

These are very simple examples meant to get you thinking about the overall design of your page, and how you can make individual elements more perceptible and visually appealing. Remember, for accessibility purposes, you should try to provide a solid contrast with the colors you are using, especially if you are styling text.

## Incorporating GeoJSON Data

If you have a GeoJSON dataset you'd like to work with, keep in mind the preliminary step we covered in the [Working With GeoSpatial Data](?page=12) lesson. If you recall, we first needed to convert the file to a JavaScript object, by changing the file extension to `.js` and then storing the data in a variable:

```JavaScript
const varToStoreData = { // store all the data in a const variable
"type": "FeatureCollection",
...
...
...
```

This is the easiest way to utilize the `L.geoJSON()` method to add data to a map without having to worry about taking extra steps to "parse" the data. Otherwise, Leaflet seems to have difficulty working directly with JSON data. Once this is done, also remember that you need to include the new `.js` file in your HTML file's `<head>`:

```HTML
<head>
    <script src="your_dataset.js"></script>
```

This method should work well in most cases.

## General Advice

In general, while working on your projects, keep the following in mind:

- __Don't be afraid to ask for help__. If you need help, you can always reach out to your instructor or to your fellow classmates. Even for solo projects, programming is almost always a collaborative venture (whether in drawing advice from colleagues, friends, or complete strangers online).
- __Break down your project into smaller steps__. This will help you to better understand the overall purpose of your project and allow you to better understand the steps you need to take to complete it.
- __Break your code itself down into logical chunks__. This is especially important for large projects, as it helps you keep your code organized and focused on the task at hand.
- __Review previous lessons, check documentation, and search the web for resources__. This will help you to better understand the concepts you are employing and to better understand the code you are writing.
- __Limit your scope__. Focus on the basics of building your site first, and worry about the complex aspects later.

## Challenge

Your only challenge here is to continue working on your projects. __Good luck!__

# Going Live

The last step in building your project is to go live with your project, or to deploy it to the web. This is, of course, the final step in the process of building a web application. Thankfully, GitHub has a built-in deployment tool that will allow you to deploy your project very easily.

### Deploying to the Web

Once you are finished with your project, follow the instructions below to deploy your project to the web.

1. __Stage, commit, and push all your changes to GitHub.__ Once you are finished working on your project, make sure to push all your changes to GitHub. 

2. __Navigate to your GitHub repository in your browser__. Make sure you are logged in to GitHub and click through to your project repository.

3. __Go to the Settings tab at the top, and then to the Pages tab in the sidebar__.

4. __Under Branch, choose `master`__.

5. __Click the Save button__.

6. __Refresh the page, or click on the Pages tab again__. You should see a new message saying "Your site is live at...". This will include your username, repository name, and the URL of your site.

7. __Click Visit Site to view your published site__.

And that's it! You should now be able to see your site live on the web and be able to share it with others. For instance, here is my URL of the practice site we built together in this course: https://zipper3030.github.io/Javascript/

__Congratulations on all your work!__ You have accomplished quite a lot in this course and had to overcome many difficult challenges along the way. I hope the course has inspired you to continue to improve your skills and knowledge with programming and web development. Good luck with your future endeavors!
