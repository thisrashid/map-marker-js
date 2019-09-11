Create a map and markers on it.
A user should be able to view, create, edit and delete this markers
In the right pane create a button to create new marker
  on click on add button display a search box and button to allow ading new marker
display list of markers added in a grid in content area

<div className="container">
  <MapContainer markers={markers}/>
  <Sidebar markers={markers} onAdd={} onEdit={} onDelete={}/>
</div>

Sidebar
<div>
  <Header onAdd={}/>
  <MarkerList markers={markers} onEdit={} onDelete={}/>
</div>

Header
<header>
  <button onClick={}>Add</button>
  <MarkerForm onSave={onAdd} onCancel={}/>
</header>

Marker Form
<form class="marker-form">
  <input />
  <button onClick={onSave}>Add</button>
</form>

Marker List
<div class="markers-list">
  <MarkerCard marker={marker}/>
</div>

Marker Card
<div class="marker-card">
  Label
  Lat
  Lng
  <button>Edit</button> or <button>Delete</button>
</div>