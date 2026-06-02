const pdfFile = "https://github.com/abcdmagar123-hash/Yachu/releases/download/yachu/yachu.pdf";

window.onload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "yachu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

document.getElementById("viewBtn").addEventListener("click", () => {
    window.open(pdfFile, "_blank");
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "yachu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
