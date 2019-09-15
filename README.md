# Map Marker

## Requirement
The assignment task consists of two parts. First you need to build a simple React application that
shows a map and markers on it. A user should be able to view, create, edit and delete this markers.
All the changes should be immediately visible on the map.

## Design

* Store markers array in react context so that it is available to all components
* We have following actions in this application:
  * ADD: to add a new marker
  * EDIT: to edit existing marker
  * DELETE: to delete existing marker
  * SET_CENTER: to set center of map
* Create a state provider component which should be parend of all other components
* Divide the layout in 2 parts:
  * Map: left side of the viewport where map will be plotted
  * Markers: right side of the viewport where we list down all markers
* Markers:
  * Header: create a button to add new marker. 
    * a dialog should open on click of this button.
    * dialog should contain an input box and save/cancel button
    * on click of save button make call to google API to search location
    * on success of API response dispatch action to add/update the marker in context, and dispatch action to set center of map
  * Markers List: get all markers from the context and plot it in a 2 column layout
  * Marker Card: it should accept marker object (from Marker List component) and create the UI for the marker
    * Edit: on click of edit button open dialog to modify marker.
    * Delete: dispatch and action to delete the element from context