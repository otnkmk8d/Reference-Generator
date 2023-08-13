javascript: const formattedDate = new Date(document.lastModified).toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).split("/").join("-");
var today = new Date().toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).split("/").join("-");
var result = ("[著者名]. "+ "“" + document.title + "”. " + "[Webサイトの名称]. "+ A + ". " + location.href + ", (参照 " + today + ").");
navigator.clipboard.writeText(result).then(
  () => {
    alert("参考文献をコピーしました");
  },
);