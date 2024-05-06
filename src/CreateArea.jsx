import React, { useState } from "react";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="relative w-96 mt-9 mb-5 mx-auto p-4 rounded-md shadow-[rgba(137,137,137,.3)_0px_1px_5px]">
				<input className="" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
				<textarea
					className="w-full border-none p-1 outline-none text-lg resize-none"
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button
					onClick={submitNote}
					className="absolute right-4 -bottom-4 bg-yellow-400 text-white text-sm rounded-3xl w-9 h-9 shadow-[rgba(0,0,0,.3)_0px_1px_3px] cursor-pointer outline-none"
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
