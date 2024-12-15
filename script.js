const textEditor = document.getElementById("TextEditor");
const colorInput = document.getElementById("ColorText");
const fontSelect = document.getElementById("FontSelect");
const fontSizeSelect = document.getElementById("FontSizeSelect");
const imageUpload = document.getElementById("ImageUpload");
const imageSizeSelect = document.getElementById("ImageSizeSelect");

// שינוי צבע הטקסט
colorInput.addEventListener("change", () => {
    textEditor.style.color = colorInput.value;
});

// שינוי גופן הטקסט
fontSelect.addEventListener("change", () => {
    textEditor.style.fontFamily = fontSelect.value;
});

// שינוי גודל הטקסט
fontSizeSelect.addEventListener("change", () => {
    textEditor.style.fontSize = fontSizeSelect.value + "px";
});

// העלאת תמונה
imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            textEditor.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// שינוי גודל התמונה
imageSizeSelect.addEventListener("change", () => {
    const images = textEditor.getElementsByTagName("img");
    for (let img of images) {
        img.style.width = imageSizeSelect.value + "px";
    }
});