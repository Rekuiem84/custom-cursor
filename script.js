const cursor = document.querySelector("#cursor");
const smoothCursor = document.querySelector("#smoothCursor");

document.addEventListener("mousemove", (event) => {
	let x = event.clientX;
	let y = event.clientY;
	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
	//this make the cursor's movement smooth
	if (smoothCursor.checked) {
		cursor.animate(
			{
				left: `${x}px`,
				top: `${y}px`,
			},
			{ duration: 400 }
		);
	}
});

const hideCursor = document.querySelector("#hideCursor");

hideCursor.addEventListener("click", () => {
	hideCursor.checked
		? (document.documentElement.style.cursor = "none")
		: (document.documentElement.style.cursor = "default");
});
