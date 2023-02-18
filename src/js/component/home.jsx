import React, {useState, useEffect} from "react";
//create your first component
// const ToDos = props => {
// 	const [tasks, setTasks] = useState(null);

function App() {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);

	function addItem() {
		if (!newItem){
			alert("Enter an Item.")
			return;
		}
		const item = {
			done:false,
			id:Math.floor(Math.random()* 1000),
			label: newItem,
		};
		//add the todo to the list
		setItems(oldList => [...oldList, item]);
		//clear input box
		setNewItem("");
	};
	function deleteItem(id){
		//filter out todo with the id
		const newArray = items.filter(item => item.id !==id);
		setItems(newArray);
	};
	useEffect(async () =>{
		const options = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		  };
		const resp = await fetch("https://assets.breatheco.de/apis/fake/todos/user/sage",options)
		const store = await resp.json()
		setItems(store)
	}, [])
	useEffect (async () =>{
		const options = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(items),
		  };
	  
		  fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/sage",
			options
		  ).catch((err) => console.error(err));
	}, [items])
	return (
	  <div className="app">
		<div className="container">
		<h1>Sage's To Do List</h1>
		 <input
		 className="form"
		 placeholder="Add an item..."
		 type="text" value={newItem}
		 onChange={e => setNewItem(e.target.value)}/>
		<button className="add" onClick={() => addItem()}>Add</button>
		<ul className="list-group">
			{items.map(item =>{
				return(
					<li key={item.id}>{item.label} <button className="delete-button" onClick={() => deleteItem(item.id)}>x</button></li>
				)
			})}
		</ul> 
		</div>
	  </div>
	);
   };

export default App;

