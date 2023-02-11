import React, {useState} from "react";
//import "./index.css";
//import ReactDOM from "react-dom";
//create your first component
// const ToDos = props => {
// 	const [tasks, setTasks] = useState(null);
// 	useEffect(
// 		() =>
// 	)
// }
function App() {
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	const addTodo = (todo) => {
		const newToDo = {
			id: Math.random(),
			todo: todo,
		};
		//add the todo to the list
		setList([...list, newToDo]);
		//clear input box
		setInput("");
	};
	const deleteTodo = (id) =>{
		//filter out todo with the id
		const newList = list.filter((todo) => todo.id !== id);

		setList(newList);
	};
	return (
	  <div className="app">
		<div className="container">
		<h1>Sage's To Do List</h1>
		 <input className="form" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
		<button className="add" onClick={() => addTodo(input)}>Add</button>
		<ul className="list-group">
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<span>Squeek</span>
				<button className="hovertext" data-hover="&times;" onClick={() => deleteTodo(todo.id)}>&times;</button>
			</li>
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<span>Beg for salmon</span>
				<button className="delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
			</li>
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<span>Watch TV (preferrably a violent show)</span>
				<button className="delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
			</li>
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<span>Cuddle with human</span>
				<button className="delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
			</li>
		</ul>
		<ul className="list-group">
			{list.map((todo) => (
				<li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
					{todo.todo}
					<button className="delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
				</li>
			))}
		</ul> 
		</div>
	  </div>
	);
   };

export default App;

