/* ===== DANH SÁCH BÀI — 奇妙汉语 =====
   Thêm bài mới: tải file dữ liệu (ví dụ bai-4.js) vào thư mục du-lieu, rồi thêm MỘT dòng vào danh sách dưới đây.
   Game từng bài, game tổng hợp và bảng xếp hạng sẽ tự có bài mới.
     id   : tên ngắn của bài, trùng với tên file dữ liệu (bai-4 ↔ bai-4.js), dùng trong link: chem-chu.html?bai=bai-4
     ten  : tên hiện trên game và bảng xếp hạng
     ma   : (chỉ bài 1–2) giữ mã điểm cũ để điểm đã có trên Sheet không bị mất. Bài mới không cần dòng này. */
window.QMHY_BAI = [
  {id:'bai-1-2', ten:'Bài 1–2', ma:{chem:'game-chem-chu-han', ghep:'game-ghep-chu-han'}},
  {id:'bai-3',   ten:'Bài 3'}
];
