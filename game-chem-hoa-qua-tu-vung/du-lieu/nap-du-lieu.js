/* ===== NẠP DỮ LIỆU BÀI HỌC — dùng chung cho mọi game 奇妙汉语 =====
   Cần nạp sau danh-sach-bai.js. Không phải sửa file này khi thêm bài mới. */
(function(){
  const TONG_HOP = {id:'tong-hop', ten:'Tổng hợp'};
  const KIND = {chem:'game-chem-chu-han', ghep:'game-ghep-chu-han'};
  const ds = () => window.QMHY_BAI || [];
  const shuffle = a => { a = a.slice(); for (let i = a.length-1; i > 0; i--){ const j = Math.random()*(i+1)|0; [a[i],a[j]] = [a[j],a[i]]; } return a; };

  const QMHY = window.QMHY = {
    /* Danh sách để chọn: các bài theo thứ tự, cuối cùng là Tổng hợp */
    lua() { return [...ds(), TONG_HOP]; },
    /* Mã điểm gửi lên Sheet: bài 1–2 giữ mã cũ, bài khác là <mã game>-<id bài> */
    ma(kind, id){ const b = ds().find(x => x.id === id); return (b && b.ma && b.ma[kind]) || KIND[kind] + '-' + id; },
    /* Bài đang chọn trong link (?bai=...) */
    baiTrongLink(){ return new URLSearchParams(location.search).get('bai') || ''; },

    /* Nạp mọi file dữ liệu ngay lúc trang đang tải, để script game phía sau dùng được luôn */
    napTatCa(){
      ds().forEach(b => document.write('<script src="du-lieu/' + b.id + '.js"><\/script>'));
    },

    /* Gom dữ liệu cho một loại game. Trả về null (và hiện màn chọn bài) khi link chưa chọn bài hoặc chọn sai. */
    gop(kind, khung){
      const id = QMHY.baiTrongLink();
      const chon = QMHY.lua().find(x => x.id === id);
      const data = window.QMHY_DATA || {};
      const thieu = ds().filter(b => !data[b.id]).map(b => b.ten);
      if (thieu.length){ QMHY.bao(khung, 'Chưa tải được dữ liệu của ' + thieu.join(', ') + '. Kiểm tra thư mục du-lieu trên kho đã đủ file chưa.'); return null; }
      if (!chon){ QMHY.manChon(khung, id ? 'Không tìm thấy bài “' + id + '”. Em chọn lại nhé.' : ''); return null; }
      const bai = chon.id === TONG_HOP.id ? ds() : [chon];
      const out = kind === 'chem' ? gopChem(bai.map(b => data[b.id].chem)) : gopGhep(bai.map(b => data[b.id].ghep));
      return Object.assign(out, {id:chon.id, ten:chon.ten, ma:QMHY.ma(kind, chon.id)});
    },

    manChon(khung, loi){
      const el = document.querySelector(khung); if (!el) return;
      const ten = document.title.split('·')[0].trim();
      el.innerHTML = `<div style="text-align:center;padding:18px 12px">
        <h2 style="margin:0 0 6px;color:var(--brand)">${ten}</h2>
        <p style="margin:0 0 14px;font-size:15px">${loi || 'Em chọn bài muốn chơi.'}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${QMHY.lua().map(b =>
          `<a class="btn" style="text-decoration:none" href="?bai=${b.id}">${b.ten}</a>`).join('')}</div></div>`;
    },
    bao(khung, loi){
      const el = document.querySelector(khung);
      if (el) el.innerHTML = `<p style="padding:18px;text-align:center;color:var(--red)">${loi}</p>`;
    }
  };

  /* Chém chữ: từ trùng giữa các bài lấy bản của bài đầu tiên, quả nhiễu thì gộp.
     Quả nhiễu nhắc tới từ không có trong lượt chơi thì bỏ; thiếu thì bù ngẫu nhiên cho đủ 3. */
  function gopChem(list){
    const P = {}, CONF = {}, MEAN = {};
    list.forEach(d => Object.keys(d.P).forEach(k => {
      if (!P[k]){ P[k] = d.P[k]; MEAN[k] = d.MEAN[k]; CONF[k] = []; }
      (d.CONF[k] || []).forEach(c => { if (!CONF[k].includes(c)) CONF[k].push(c); });
    }));
    const keys = Object.keys(P);
    keys.forEach(k => {
      CONF[k] = CONF[k].filter(c => P[c] && c !== k);
      if (CONF[k].length < 3) CONF[k].push(...shuffle(keys.filter(x => x !== k && !CONF[k].includes(x))).slice(0, 3 - CONF[k].length));
    });
    return {P, CONF, MEAN};
  }

  /* Đỉnh luyện chữ: chữ trùng lấy bản của bài đầu tiên. Bộ phận nhiễu chỉ dùng bộ phận có trong lượt chơi;
     thiếu thì bù ngẫu nhiên từ các bộ phận khác cho đủ số ô. */
  function gopGhep(list){
    const PART = {}, CHARS = [];
    list.forEach(d => {
      Object.keys(d.PART).forEach(p => { if (!PART[p]) PART[p] = d.PART[p]; });
      d.CHARS.forEach(ch => { if (!CHARS.some(x => x.c === ch.c)) CHARS.push(ch); });
    });
    const all = Object.keys(PART);
    const out = CHARS.map(ch => {
      const need = Math.max(4, ch.parts.length + 1) - ch.parts.length;
      let fake = (ch.fake || []).filter(p => PART[p] && !ch.parts.includes(p));
      if (fake.length < need) fake.push(...shuffle(all.filter(p => !ch.parts.includes(p) && !fake.includes(p))).slice(0, need - fake.length));
      return Object.assign({}, ch, {fake});
    });
    return {PART, CHARS: out};
  }
})();
