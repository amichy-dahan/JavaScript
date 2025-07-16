const fs  = require("fs");



function readFileWithErrorHandling(filep, callback) {
  fs.readFile(filep, (err, data) => {
    if (err) {
      console.log("DEBUG: שגיאה בזיהוי הקובץ");
      console.log("שגיאה:", err.code); // הדפסת קוד השגיאה
      if (err.code === 'ENOENT') {
        callback("❌ שגיאה: הקובץ לא נמצא.");
      } else if (err.code === 'EISDIR') {
        callback("❌ שגיאה: מדובר בתיקייה, לא בקובץ.");
      } else {
        callback("❌ שגיאה כללית: " + err.message);
      }
    } else {
      console.log("DEBUG: הקריאה הצליחה"); // תוודא שהצליחה
      callback(`✅ קובץ נקרא בהצלחה. גודל: ${data.length} בתים`);
    }
  });
}


readFileWithErrorHandling('data.text', (result) => {
      console.log(result)
});


