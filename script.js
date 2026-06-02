// 🔴 Replace this with your REAL GitHub release link
const pdfFile = "https://github.com/abcdmagar123-hash/Yachu/releases/download/yachu/yachu.pdf";

document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "yachu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
