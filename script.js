const pdfFile = "files/yachu.pdf";

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