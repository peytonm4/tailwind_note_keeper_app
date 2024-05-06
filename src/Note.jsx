import React from "react";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="bg-white rounded-lg p-3 w-64 m-4 float-left shadow-[rgba(0,0,100,0.3)_3px_3px_10px_3px]">
			<h1 className="mb-2 text-lg">{props.title}</h1>
			<p className="mb-3 text-lg break-words whitespace-pre-wrap">{props.content}</p>
			<button
				onClick={handleClick}
				className="relative float-right mr-3 border-none w-20 h-8 cursor-pointer outline-none bg-yellow-400"
			>
				DELETE
			</button>
		</div>
	);
}

export default Note;
